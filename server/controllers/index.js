var bcrypt = require('bcryptjs'),
  rp = require('request-promise');

const userModel = require('../../models/users.model');

var signup = {
  get: function(req, res){
      res.render('/signup');
  },
  post: function(req, res){
    console.log('req.body object is: ', req);
    var username = req.body.username;
    var password = req.body.password;
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var email = req.body.email;

    if(!username || !password) {
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
  signup: signup,
  // train: train,
  // tags: tags,
  // song: song,
  // favTrain: favTrain
};