var express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var flash = require('connect-flash');
var setupPassport = require('./passportSetup');
const initDatabase = require('../db/config');

var bodyParser = require('body-parser');
var router = require('./routes');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({ 
  secret: 'Tcircle',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 6000000 }
}));
app.use(flash());
setupPassport(app);

app.use('/api', router);

var clients = {};

io.on('connection', (socket) => {
    console.log('a user has connected...');
    clients[socket.id] = socket;
    console.log('connected user is:', socket.id);


    socket.on('create', (username, room) => {
        console.log('a user has connected to', room)
        socket.emit('add-message', 'Has Joined', username , room);
        socket.join(room);
    });

    socket.on('disconnect', () => {
        console.log('a user has disconnected...', socket.id)
    });

    socket.on('add-message', (message, username, roomName) => {
        io.sockets.in(roomName).emit('message', { type: 'new-message', text: message, username: username, roomName: roomName });
    });

});


var port = 3000 || process.env.PORT;


initDatabase().then(() => {
  server.listen(port, () => {

	  console.log("listening on port " + port);
  });
});


