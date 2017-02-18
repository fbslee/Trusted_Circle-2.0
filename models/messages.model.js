const Sequelize = require('sequelize');
const sequelize = require('./../db/connection');

var Message = sequelize.define('messages', {
  body: Sequelize.STRING,
  votes: {
      type: Sequelize.INTEGER,
      defaultValue: 0
  }
});

module.exports = Message;