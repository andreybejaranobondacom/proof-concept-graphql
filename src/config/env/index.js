'use strict';
const env = process.env.NODE_ENV || 'development';
const config = require(`./${env.toLowerCase()}`);

module.exports = config;
