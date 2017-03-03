const Sequelize = require('sequelize');
const sequelize = require('../db/connection');

var Chatrooms = sequelize.define('chatrooms', {
  roomName: Sequelize.STRING,
});

module.exports = Chatrooms;
