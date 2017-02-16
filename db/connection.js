const Sequelize = require('sequelize');
const connection = 'postgres://aolbzfzg:1CjvX_i8ai9n1NwjurXZ0Q4ueYsY0BFQ@babar.elephantsql.com:5432/aolbzfzg';

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

// this.sequelize.sync({
//   // force: true
// });