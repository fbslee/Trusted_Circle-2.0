const Sequelize = require('sequelize');
const sequelize = require('./../db/connection');

var Comment = sequelize.define('comment', {
  text: Sequelize.STRING,

});

module.exports = Comment;

