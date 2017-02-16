const Sequelize = require('sequelize');
const sequelize = require('../db/connection');

var Circle = sequelize.define('circle', {
  name: Sequelize.STRING,
  status: Sequelize.STRING
});

module.exports = Circle;