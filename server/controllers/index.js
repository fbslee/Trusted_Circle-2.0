var bcrypt = require('bcryptjs'),
  rp = require('request-promise');

const userModel = require('../../models/users.model');
// const Message = require('../models/message');

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

  // var messages = {
  //   get: function(req, res) {
  //     Message.findAll ()
  //     .then
  //   }
  //   post: function(req, res) {
  //     var content = 
  //   },
  //   delete: function(req, res) {
  //     Message.destroy({
  //       where: {
  //         id:req.params.id
  //       }
  //     })
  //     .then(function(deletedRecords){
  //       res.status(200).json(deletedRecords);
  //     })
  //     .catch((err)=> {
  //       res.status(500).json(error);
  //     })
  //   }
  // }
};

// var favTrain = {
//   post: (req, res) => {
//     console.log('Serving request for ', req.method, 'where url is ', req.url);

//     var userId = req.session.passport ? req.session.passport.user : req.body.user;
//     models.favTrain(req.body.trainName, req.body.trainImg, req.body.trainId, userId)
//       .then(success => {
//         res.send('User successfully favorited train ' + trainName);
//       }).catch(err => {
//         res.status(500).send(err);
//       });
//   }
// };

module.exports = {
  // findHypemSongs: hypemCtrl.findHypemSongs,
  signup: signup
  // train: train,
  // tags: tags,
  // song: song,
  // favTrain: favTrain
};