"use strict";

const mongoose = required('mongoose');

const club = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	logo: String,
	players: {
		type: [{
			id: {
				type: mongoose.Schema.Types.ObjectId,
				required: true
			},
			expire: Date
		}]
	},
	win: {
		type: Number,
		required: true,
		default: 0
	},
	draw: {
		type: Number,
		required: true,
		default: 0
	},
	loss: {
		type: Number,
		required: true,
		default: 0
	},
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
	matchlist: {
		type: [{
			type: mongoose.Schema.Types.ObjectId
		}]
	},
	tournament: {
		type: [{
			type: mongoose.Schema.Types.ObjectId
		}]
	}
});

module.exports = club;
