const Sequelize = require('sequelize');
const sequelize = require('./../db/connection');

var User_Message_Votes = sequelize.define('usermessagevotes', {
  vote: Sequelize.STRING
});

module.exports = User_Message_Votes;