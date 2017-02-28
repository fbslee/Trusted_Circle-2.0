var email   = require("emailjs");
var keys = require('../../keys');
var server  = email.server.connect({
   user:    keys.email, 
   password:keys.password, 
   host:    keys.smtp, 
   ssl:     true
});

var emailer = function(receiver, subject, text){
	server.send({
   	text:    text, 
   	from:    "Trusted Circle<real.team.passive@gmail.com>", 
   	to:      receiver,
   	subject: subject
}, function(err, message) { console.log(err || message); })
};

module.exports = {
	emailer: emailer
}