const Sequelize = require('sequelize');
const sequelize = require('./../db/connection');

var Topic = sequelize.define('topics', {
  body: Sequelize.STRING
});

module.exports = Topic;