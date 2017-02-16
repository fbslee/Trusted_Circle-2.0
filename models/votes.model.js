const Sequelize = require('sequelize');
const sequelize = require('./../db/connection');

var Vote = sequelize.define('vote', {
  choice: {
      type: Sequelize.STRING,
      defaultValue: null
  },
  complete: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
  }
});

module.exports = Vote;