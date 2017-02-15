const Sequelize = require('sequelize');
const sequelize = require('./../db/connection');

var User = sequelize.define('user', {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  username: {
    type: Sequelize.STRING,
    unique: true
  },
  password: Sequelize.STRING,
  photo: Sequelize.STRING,
  upvotes: {
      type: Sequelize.INTEGER,
      defaultValue: 0
  },
  trustedCounselor: Sequelize.BOOLEAN,
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