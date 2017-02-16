const Sequelize = require('sequelize');
const sequelize = require('./../db/connection');

var Vote = sequelize.define('vote', {
  choice: {
      type: Sequelize.STRING,
      defaultValue: null
  },
});

module.exports = Vote;