const Sequelize = require('sequelize');
const sequelize = require('./../db/connection');

var Topic = sequelize.define('topic', {
  body: Sequelize.STRING
});

module.exports = Topic;