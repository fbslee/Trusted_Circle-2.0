const Sequelize = require('sequelize');
const connection = 'postgres://teampassive:plantlife@trustedcircle.c7a9s4oomcjk.us-west-2.rds.amazonaws.com:5432/trustedcircles';

const sequelize = new Sequelize(connection, {
  dialect: 'postgres',
  ssl: true,
  dialectOptions: {
      ssl: {
         require: true
      }
   }
});

sequelize.authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  }).catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

module.exports = sequelize;
