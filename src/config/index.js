'use strict';
const endpoints = require('./endpoints');
const config = Object.assign({}, require('./env'), { endpoints });
module.exports = config;
