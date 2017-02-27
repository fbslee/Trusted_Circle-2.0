const Sequelize = require('sequelize');
const sequelize = require('./../db/connection');

var Comment = sequelize.define('comment', {
  text: Sequelize.STRING,
    votes: {
      type: Sequelize.INTEGER,
      defaultValue: 0
  }
});

module.exports = Comment;

