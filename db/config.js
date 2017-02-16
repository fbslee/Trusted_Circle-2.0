const Promise = require('bluebird');
const sequelize = require('./connection');

//const seeder = require('./seedData/_seedMethods');

const initDatabase = () => {
	return new Promise((resolve, reject) => {
		var User = require('./../models/users.model');
		var Circle = require('./../models/circles.model');
		var Topic = require('./../models/topics.model');
		var Vote = require('./../models/votes.model');
		var Message = require('./../models/messages.model');
        var User_Circle = require('./../models/user_circle.model');
		var User_Topic = require('./../models/user_topic.model');
		
		User.hasMany(Message);
		Message.belongsTo(User);

		Topic.hasMany(Message);
		Message.belongsTo(Topic);

		Circle.hasMany(Topic);
		Topic.belongsTo(Circle);

		User.hasMany(Vote);
		Vote.belongsTo(User,{foreignKey: 'id', as: 'votee'});
		Vote.belongsTo(User,{foreignKey: 'id', as: 'voter'});

		Circle.hasMany(Vote);
		Vote.belongsTo(Circle);

		User.belongsToMany(Circle, {
			through: User_Circle
		});
		Circle.belongsToMany(User, {
			through: User_Circle
		});

        User.belongsToMany(Topic, {
            through: User_Topic
        })
        Topic.belongsToMany(User, {
            through: User_Topic
        })
		
		sequelize.sync({/*force: true*/}).then(err => {
			resolve();
		});
	});
};

module.exports = initDatabase;