"use strict";

const mongoose = require('mongoose');

const user = new mongoose.Schema({
	profile: {
		username: {
			type: String,
			required: true,
			lowercase: true
		},
		picture: {
			type: String,
			required: true,
			match: /^http:\/\//i,
			default: 'http://ufut.com/image/nopic.png'
		}
	},
	data: {
		oauth: {
			type: String,
			required: true
		}
	}
});

module.exports = user;