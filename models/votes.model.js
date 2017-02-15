const Sequelize = require('sequelize');
const sequelize = require('./../db/connection');

var Vote = sequelize.define('vote', {
  ballot: Sequelize.BOOLEAN
});

module.exports = Vote;