var bcrypt = require('bcryptjs'),
  rp = require('request-promise');

const userModel = require('../../models/users.model');
const Circle = require('../../models/circles.model');
const User_Circles = require('../../models/user_circle.model');
const Vote = require('../../models/votes.model');
const Poll = require('../../models/polls.model');

var signup = {
  get: function(req, res){
      res.render('/signup');
  },
  post: function(req, res){
    var username = req.body.username;
    var password = req.body.password;
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var email = req.body.email;
    console.log('firstname')
    console.log(password, username)

    if(!username || !password) {
      console.log('WHY GOD WHY')
      req.flash('error', 'Please fill out all fields');
      res.redirect('signup');
    }
    

    var salt = bcrypt.genSaltSync(10);
    var hashedPassword = bcrypt.hashSync(password, salt);

    var newUser = {
      username: username,
      salt: salt,
      password: hashedPassword,
      firstname: firstname,
      lastname: lastname,
      email: email
    };

    userModel.create(newUser).then( () => {
      console.log('user created');
      res.redirect('/');
    }).catch( (err) => {
      req.flash('error', 'Please choose a different username');
      res.redirect('/signup');
    });
  }
};

var poll = {
  post: function(req, res){
    var circleName = req.body.circle;
    var suggestedUser = req.body.suggestedUser;
    var suggestor = req.body.suggestor;
    var circleId;
    var suggestedUserId;
    var suggestorId;
    var maxVotes;
    var userIds = [];
    var pollId;
    Circle.findOne({
      where: {
        name: circleName
      }
    }).then((data) => {
      circleId = data.dataValues.id;
      maxVotes = data.dataValues.totalMembers;
    }).then(()=>{
      userModel.findOne({
        where: {
          username: suggestedUser
        }
      }).then((data) => {
        suggestedUserId = data.dataValues.id;
      }).then(() => {
        userModel.findOne({
          where: {
            username: suggestor
          }
        }).then((data) => {
          suggestorId = data.dataValues.id;
        }).then(() => {
          Poll.findOne({
            where:{
              circleId: circleId,
              status: 'incomplete'
            }
          }).then((data) => {
            if(data === null){
                var newPoll = {
                maxVotes: maxVotes,
                suggestorId: suggestorId,
                circleId: circleId,
                suggestedMemberId: suggestedUserId
              }
              Poll.create(newPoll).then((data) => {
                pollId = data.dataValues.id;
                User_Circles.findAll({
                  where: {
                    circleId: circleId
                  }
                }).then((data) =>{
                  console.log('what is the pollId', pollId)
                  data.forEach(function(instance){
                    var newVote = {
                      userId: instance.dataValues.userId,
                      pollId: pollId
                    }
                    Vote.create(newVote).then((data) => {
                      console.log('vote was successfully created', data)
                    })
                  })
                })
              }).catch( (error) => {
                console.log(error)
              })
            } else {
              console.log('DAVID IS SO SMART')
              res.redirect('/results')
            }
          })
        })
      })
    })
  }
}

var vote= {
  get: function(req, res){
    
  }
}

module.exports = {
  signup: signup,
  poll: poll
};