var express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var setupPassport = require('./passportSetup');
require('../db');

var bodyParser = require('body-parser');
var router = require('./routes');

var http = require('http').Server(app);
var io = require('socket.io')(http);

var app = express();
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({ 
  secret: 'Tcircle',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 6000000 }
}));
setupPassport(app);
app.use('/api', router);


io.on('connection', (socket) => {
    console.log('a user has connected...');

    socket.on('disconnect', () => {
        console.log('a user has disconnected...')
    });

    socket.on('add-message', (message, username) => {
        io.emit('message', { type: 'new-message', text: message, username: username });
    });

});


var port = 3000 || process.env.PORT;


http.listen(port, () => {
    console.log("server is running on:", port)
})

