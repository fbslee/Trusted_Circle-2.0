const Promise = require('bluebird');
const sequelize = require('./connection');

//const seeder = require('./seedData/_seedMethods');

const initDatabase = () => {
	return new Promise((resolve, reject) => {
		var User = require('./../models/users.model');
		var Circle = require('./../models/circles.model');
		var Topic = require('./../models/topics.model');
		var Vote = require('./../models/votes.model');
		var Poll = require('./../models/polls.model');
		var Message = require('./../models/messages.model');
        var User_Circle = require('./../models/user_circle.model');
		var User_Topic = require('./../models/user_topic.model');
		var Chatrooms = require('./../models/chatrooms.model');

		var User_Message_Votes = require('./../models/user_message_votes.model');

		var Comment = require('./../models/comment.model');

		
		User.hasMany(Message);
		Message.belongsTo(User);

		Topic.hasMany(Message);
		Message.belongsTo(Topic);

		// User_Message_Votes.hasMany(Message);
		// Message.belongsTo(User_Message_Votes);

		Circle.hasMany(Topic);
		Topic.belongsTo(Circle);

		// User.hasMany(Poll);
		Poll.belongsTo(User,{as: 'suggestedMember', foreignKey: 'suggestedMemberId'});
		Poll.belongsTo(User,{as: 'suggestor', foreignKey: 'suggestorId'});

		User.hasMany(Vote);
		// Vote.belongsTo(User);

		Poll.hasMany(Vote);
		// Vote.belongsTo(User);

		Circle.hasMany(Poll);
		// Poll.belongsTo(Circle);

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

		// User.belongsToMany(Message, {
        //     through: User_Topic
        // })

		// .has
		Message.belongsToMany(User, {
            through: User_Message_Votes
        })

		User.hasMany(Comment);
        Message.hasMany(Comment);
        Comment.belongsTo(User);
        Comment.belongsTo(Message);
			
		sequelize.sync().then(err => {


			resolve();
		});
	
	});

};
// this.sequelize.sync({
//   // force: true
// });
module.exports = initDatabase;