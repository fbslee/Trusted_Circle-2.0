const Sequelize = require('sequelize');
const sequelize = require('./../db/connection');

var User = sequelize.define('user', {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  userName: Sequelize.STRING,
  password: Sequelize.STRING,
  photo: Sequelize.STRING,
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
  }
});

module.exports = User;