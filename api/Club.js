"use strict";

const express = require('express');
const httpStatus = require('http-status');
const bodyParser = require('body-parser');

module.exports = function (wagner) {
	//TODO
	const api = express.Router();

	api.use(bodyParser.json());

	api.post('/add', wagner.invoke(function (Club) {
		return function (req, res) {
		}
	}));

	api.get('/:name', wagner.invoke(function(Club) {
		return function (req, res) {
		}
	}));

	api.put('/:name/edit', wagner.invoke(function (Club) {
		return function (req, res) {
		}
	}));

	api.delete('/:name/delete', wagner.invoke(function (Club) {
		return function (req, res) {
		}
	}));

	return api;
};