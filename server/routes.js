var router = require('express').Router();
var controller = require('./controllers');
var passport = require('passport');
var path = require('path');
var bluebird = require('bluebird');

const Sequelize = require('sequelize');
const sequelize = require('../db/connection');

const Chatrooms = require('../models/chatrooms.model');
const User = require('../models/users.model');
const Topic = require('../models/topics.model');
const Circle = require('../models/circles.model');
const User_Circles = require('../models/user_circle.model');
const Message = require('../models/messages.model');
const User_Topics = require('../models/user_topic.model');

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

router.get('/users', (req, res) => {
    console.log('getting users');
    User.findAll().then( (data) => {
        res.send(data)
    })
})

router.get('/users/:username', (req, res) => {
    console.log('getting specific user');
    console.log(req.params.username);

    User.findAll({
    where: {
        username: req.params.username
     }
    }).then( (data) => {
        res.send(data)
    })
})

router.get('/users_circles', (req, res) => {
    console.log('getting users circles');
    User_Circles.findAll().then( (data) => {
        res.send(data)
    })
})

router.get('/users_topics', (req, res) => {
    console.log('getting users topics');
    User_Topics.findAll().then( (data) => {
        res.send(data)
    })
})

router.get('/roomList', (req, res) => {
    console.log('/roomlist being hit!!!')
    
    Chatrooms.findAll().then( (val) => {
            res.send(val) 
    })
  

});

router.get('/circles', (req, res) => {
    console.log('/circles being hit!!! for GET');
    console.log(req.query);
    
    Circle.findAll().then( (val) => {
            res.send(val) 
    })
  

});


//ROUTE TO FIND ALL THE CIRCLES THEY BELONG TO...


router.get('/circles/:id', (req, res) => {
    console.log('/circles being hit!!! for GET from param');
    console.log(req.params);
    console.log(req.params.id);
    
    Circle.findAll({
    where: {
        id: req.params.id
     }
    }).then( (val) => {
            res.send(val) 
    })
  

});

router.get('/topics', (req, res) => {
    console.log('/topics being hit!!! for GET')
    
    Topic.findAll().then( (val) => {
            res.send(val) 
    })
  

});

router.get('/topics/:id', (req, res) => {
    console.log('/topics being hit!!! for GET from param')
    console.log(req.params);
    console.log(req.params.id);
    
    Topic.findAll({
    where: {
        id: req.params.id
     }
    }).then( (val) => {
            res.send(val) 
    })
  

});


router.get('/messages', (req, res) => {
    Message.findAll().then( (val) => {
            res.send(val) 
    })
  });

router.post('/messages', (req, res) => {
    var body = req.body.body;
    var username = req.body.username
    console.log('this is data', req.body)
    let newMessage = {
        body: body,
        username: username
    }
    Message.create(newMessage).then(function (newMessage) {
        res.status(200).json(newMessage);
      })
      .catch(function (error){
        res.status(500).json(error);
      });
  })



router.post('/topics', (req, res) => {
    console.log('/topics posting!!! from backend')
    
    Topic.findAll().then( (val) => {
            res.send(val) 
    })

});

router.post('/poll', (req,res) => {
    console.log('post req body', req.body)
    res.send('post backend reached')
})  

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



module.exports = router;