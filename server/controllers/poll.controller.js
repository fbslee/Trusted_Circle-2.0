var path = require('path');
var bluebird = require('bluebird');

const Sequelize = require('sequelize');
const sequelize = require('../db/connection');

const User = require('../../models/users.model');
const Circle = require('../../models/circles.model');
const User_Circles = require('../../models/user_circle.model');
const Vote = require('../../models/votes.model');
const Poll = require('../../models/polls.model');

var post = function(req,res){
    console.log('post req body', req.body)
    res.send('post backend reached')
}

module.exports ={
    post: post
}