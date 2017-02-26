const Sequelize = require('sequelize');
const sequelize = require('./../db/connection');

var User_Message_Votes = sequelize.define('user_message_votes', {
  userId: Sequelize.STRING,
  messageId: Sequelize.STRING
});

module.exports = User_Message_Votes;