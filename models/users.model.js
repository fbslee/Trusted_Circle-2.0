const Sequelize = require('sequelize');
const sequelize = require('./../db/connection');

var User = sequelize.define('user', {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  userName: Sequelize.STRING,
  password: Sequelize.STRING,
  photo: Sequelize.STRING,
  upvotes: {
      type: Sequelize.INTEGER,
      defaultValue: 0
  },
  trustedCounselor: Sequelize.BOOLEAN
});

module.exports = User;