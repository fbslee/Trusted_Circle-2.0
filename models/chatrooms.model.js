const Sequelize = require('sequelize');
const sequelize = require('../db/connection');

var Chatrooms = sequelize.define('chatrooms', {
  roomName: Sequelize.STRING,
  long: {
      type: Sequelize.FLOAT,
      defaultValue: 0
  },
  lat: {
      type: Sequelize.FLOAT,
      defaultValue: 0
  }
});

module.exports = Chatrooms;
