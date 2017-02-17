const Sequelize = require('sequelize');
const sequelize = require('../db/connection');

var User = sequelize.define('user', {
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
    defaultValue: 'http://santetotal.com/wp-content/uploads/2014/05/default-user.png'
  },
  upvotes: {
      type: Sequelize.INTEGER,
      defaultValue: 0
  },
  trustedCounselor: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
  },
  long: {
      type: Sequelize.FLOAT,
      defaultValue: 0
  },
  lat: {
      type: Sequelize.FLOAT,
      defaultValue: 0
  },
  salt: Sequelize.STRING,
});

module.exports = User;
