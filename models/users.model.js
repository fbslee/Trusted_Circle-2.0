const Sequelize = require('sequelize');
const sequelize = require('../db/connection');

var User = sequelize.define('users', {
  firstname: Sequelize.STRING,
  lastname: Sequelize.STRING,
   
  username: {
    type: Sequelize.STRING,
    unique: true
  },
  email: {
    type: Sequelize.STRING,
    unique: true
  },
  password: Sequelize.STRING,
  photo: {
    type : Sequelize.STRING,
    defaultValue: 'https://static.productionready.io/images/smiley-cyrus.jpg'
  },
  upvotes: {
      type: Sequelize.INTEGER,
      defaultValue: 0
  },
  trustedCounselor: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
  },
  salt: Sequelize.STRING,
});

module.exports = User;
