"use strict";

const mongoose = require('mongoose');
const schema = require('./schemas');
const _ = require('underscore');

module.exports = function (wagner) {

	mongoose.connect('mongodb://127.0.0.1:27357');

	const club = mongoose.model('club', schema.club);
	const player = mongoose.model('player', schema.player);
	const match = mongoose.model('coach', schema.match);
	const tournament = mongoose.model('tournament', schema.tournament);
	const referee = mongoose.model('tournament', schema.referee);
	const user = mongoose.model('tournament', schema.user);

	const models = {
		club: club,
		player: player,
		match: match,
		tournament: tournament,
		referee: referee,
		user: user
	};

	//noinspection JSCheckFunctionSignatures
	_.each(models, function(value, key) {
		wagner.factory(key, function() {
			return value;
		});
	});

	return models;
};