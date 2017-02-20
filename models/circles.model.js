const Sequelize = require('sequelize');
const sequelize = require('../db/connection');

var Circle = sequelize.define('circles', {
  name: Sequelize.STRING,
  totalMembers: Sequelize.INTEGER
});

module.exports = Circle;