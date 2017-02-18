const Sequelize = require('sequelize');
const sequelize = require('./../db/connection');

var Vote = sequelize.define('votes', {
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