"use strict";

const express = require('express');
const httpStatus = require('http-status');
const bodyParser = require('body-parser');

module.exports = function (wagner) {
	//TODO
	const api = express.Router();

	api.use(bodyParser.json());

	api.post('/add', wagner.invoke(function (Tournament) {
		return function (req, res) {
		}
	}));

	api.get('/:id', wagner.invoke(function(Tournament) {
		return function (req, res) {
		}
	}));

	api.put('/:id/edit', wagner.invoke(function (Tournament) {
		return function (req, res) {
		}
	}));

	api.delete('/:id/delete', wagner.invoke(function (Tournament) {
		return function (req, res) {
		}
	}));

	return api;
};