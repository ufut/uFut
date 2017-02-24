"use strict";

const mongoose = require('mongoose');

const tournament = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	owner: {
		type: String,
		required: true
	},
	team: {
		id: mongoose.Schema.Types.ObjectId,
		pts: Number,
		win: Number,
		draw: Number,
		loss: Number,
		goalfor: {
			type: Number,
			required: true,
			default: 0
		},
		goalagainst: {
			type: Number,
			required: true,
			default: 0
		}
	},
	phase: [{
		phasetype: {
			type: String,
			enum:['round robin single', 'round robin double', 'swiss', 'single elimination', 'double elimination' ]
		},
		calendar : [{
			day: [mongoose.Schema.Types.ObjectId]
		}]
	}],
	comments: [{
		type: String,
		maxlength: 250
	}]

});

module.exports = tournament;
