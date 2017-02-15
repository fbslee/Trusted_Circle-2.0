const Sequelize = require('sequelize');
const sequelize = require('./../db/connection');

var User_Topic = sequelize.define('user_topic', {
  status: {
      type: Sequelize.STRING,
      defaultValue: null
  }
});

module.exports = User_Topic;