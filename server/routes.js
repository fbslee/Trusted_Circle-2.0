var router = require('express').Router();
var controller = require('./controllers');
var passport = require('passport');
var path = require('path');
var bluebird = require('bluebird');

const Sequelize = require('sequelize');
const sequelize = require('../db/connection');

const Chatrooms = require('../models/chatrooms.model');
const Topic = require('../models/topics.model');

router.get('/test', function(req,res) {
  console.log('yuri is gay')
  res.send()
})

//'/api/signup
// var Message = require('../models/message');
router.get('/signup', controller.signup.get);
// router.get('/trains', controller.train.get);
// router.get('/gettrainsongs', controller.train.get);
// router.get('/trainsbytag', controller.tags.get);

router.get('/logout', (req, res) => {
    console.log('logged user out');
    req.logout();
});


router.get('/roomList', (req, res) => {
    console.log('/roomlist being hit!!!')
    
    Chatrooms.findAll().then( (val) => {
            res.send(val) 
    })
  

});

router.get('/topics', (req, res) => {
    console.log('/topics being hit!!!')
    
    Topic.findAll().then( (val) => {
            res.send(val) 
    })
  

});

// router.post('/addsongtotrain', controller.song.post);
// router.post('/addtrain', controller.train.post);
// router.post('/favtrain', controller.favTrain.post);
// router.post('/hypemSongs', controller.findHypemSongs.post);
router.post('/signup', controller.signup.post);
router.post('/login', (req, res, next) => {

  passport.authenticate('local', (err, user, info) => {
    if (err) { return next(err); }
    if (!user) {
        res.status(400);
        return res.send('false'); 
    }

    req.logIn(user, (err) => {
      if (err) { return next(err); }
      return res.send(user);
    });

  })(req, res, next);

});

// router.post('/messages', controller.messages.post);


module.exports = router;