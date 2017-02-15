// var Sequelize = require('sequelize');

// module.exports.sequelize = new Sequelize('mysql://admin:QFLTJKDFFHAWHTJZ@aws-us-west-2-portal.1.dblayer.com:15760/compose');

// // module.exports.User = this.sequelize.define('users', {
// //   firstName: Sequelize.STRING,
// //   lastName: Sequelize.STRING,
// //   username: {
// //     type: Sequelize.STRING,
// //     unique: true
// //   },
// //   password: Sequelize.STRING,
// //   photo: Sequelize.STRING,
// //   upvotes: {
// //       type: Sequelize.INTEGER,
// //       defaultValue: 0
// //   },
// //   salt: Sequelize.STRING,
// //   trustedCounselor: Sequelize.BOOLEAN
// // });

// module.exports.Train = this.sequelize.define('trains', {
//   name: Sequelize.STRING,
//   imgUrl: Sequelize.STRING,
//   creatorId: Sequelize.INTEGER
// });

// module.exports.Song = this.sequelize.define('songs', {
//   title: Sequelize.STRING,
//   artist: Sequelize.STRING,
//   songSourcePath: Sequelize.STRING,
//   trackNum: Sequelize.INTEGER
// });

// module.exports.UserFav = this.sequelize.define('userFav', {
//   userId: Sequelize.INTEGER, 
//   trainId: Sequelize.INTEGER,
//   trainName: Sequelize.STRING,
//   trainImg: Sequelize.STRING,
// });

// this.User.belongsToMany(this.Train, {through: 'UserTrain'});
// this.Train.belongsToMany(this.User, {through: 'UserTrain'});

// this.User.hasMany(this.Song);
// this.Song.belongsTo(this.User);

// this.Train.hasMany(this.Song);
// this.Song.belongsTo(this.Train);

// this.Train.belongsToMany(this.Tag, {through: 'TrainTag'});
// this.Tag.belongsToMany(this.Train, {through: 'TrainTag'});

// this.sequelize.sync({
//   // force: true
// });