const Sequelize = require('sequelize');
const sequelize = require('./../db/connection');

var User_Circle = sequelize.define('user_circles', {
  status: {
      type: Sequelize.STRING,
      defaultValue: null
  }
});

module.exports = User_Circle;