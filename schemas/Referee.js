"use strict";

const mongoose = require('mongoose');

const referee = new mongoose.Schema({
	userid: {
		type: mongoose.Schema.Types.ObjectId
	},
	alias: String,
	yellowcard: {
		type: Number,
		required: true,
		default: 0
	},
	redcard: {
		type: Number,
		required: true,
		default: 0
	},
	assist: {
		type: Number,
		required: true,
		default: 0
	},
	match: {
		type: [{
			id: mongoose.Schema.Types.ObjectId
		}]
	}
});

module.exports = referee;