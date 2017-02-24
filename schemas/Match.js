"use strict";

const mongoose = require('mongoose');

const match = new mongoose.Schema({
	home: {
		type: {
			id: mongoose.Schema.Types.ObjectId,
			players: {
				type: [{
					id: mongoose.Schema.Types.ObjectId,
					position: {
						type: String,
						enum: ['GK', 'DL', 'DC', 'DR', 'LW', 'CC', 'RW', 'AL', 'AC', 'AR', 'R']
					},
					goal: Number,
					assist: Number,
					evaluation: {
						type: Number,
						min: 0,
						max: 10
					},
					yellowcard: Number,
					redcard: Boolean,
					description: {
						type: String,
						maxlength: 250
					}
				}]
			}
		},
		required: true
	},
	away: {
		type: {
			id: mongoose.Schema.Types.ObjectId,
			players: {
				type: [{
					id: mongoose.Schema.Types.ObjectId,
					position: {
						type: String,
						enum: ['GK', 'DL', 'DC', 'DR', 'LW', 'CC', 'RW', 'AL', 'AC', 'AR', 'R']
					},
					goal: Number,
					assist: Number,
					evaluation: {
						type: Number,
						min: 0,
						max: 10
					},
					yellowcard: Number,
					redcard: Boolean,
					description: {
						type: String,
						maxlength: 250
					}
				}]
			}
		},
		required: true
	},
	matchtype: {
		type: {
			mt: {
				type: String,
				enum: ['exhibition', 'club exhibition', 'tournament']
			},
			tournament: mongoose.Schema.Types.ObjectId,
			validate: checkMatchType
		},
		required: true
	},
	data: Date,
	refree: mongoose.Schema.Types.ObjectId,
	comments: {
		type:[{
			type: String,
			maxlength: 250
		}]
	},
	media: String,
	privatematch: {
		type: Boolean,
		default: false
	}
});

function checkMatchType(val) {
	return (val.mt === 'exhibition' && !val.tournament) || (val.mt === 'tournament' && !!val.tournament)
}

module.exports = match;
