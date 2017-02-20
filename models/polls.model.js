const Sequelize = require('sequelize');
const sequelize = require('./../db/connection');

var Poll = sequelize.define('polls', {
  result: {
      type: Sequelize.STRING,
      defaultValue: null
  },
  maxVotes: {
      type: Sequelize.INTEGER,
      defaultValue: 0
  },
  status: {
      type: Sequelize.STRING,
      defaultValue: 'incomplete'
  },
  votesIn: {
      type: Sequelize.INTEGER,
      defaultValue: 0
  },
  votesFor: {
      type: Sequelize.INTEGER,
      defaultValue: 0
  }
});

module.exports = Poll;