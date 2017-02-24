"use strict";

const mongoose = require('mongoose');

const player = new mongoose.Schema({
	userid: {
		type: mongoose.Schema.Types.ObjectId
	},
	alias: String,
	goalfor: {
		type: Number,
		required: true,
		default: 0
	},
	goalagainst: {
		type: Number,
		required: true,
		default: 0
	},
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
	position: {
		type: [{
			type: String,
			enum: ['GK', 'DL', 'DC', 'DR', 'LW', 'CC', 'RW', 'AL', 'AC', 'AR']
		}]
	},
	club: {
		type: [{
			id: mongoose.Schema.Types.ObjectId,
			expire: Date
		}],
	},
	match: {
		type: [{
			id: mongoose.Schema.Types.ObjectId
		}]
	}
});

module.exports = player;
