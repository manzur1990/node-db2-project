const express = require('express');
const db = require('../data/dbConfig');
const server = express();
const carsRouter = require('../carsRouter.js');

server.use(express.json());
server.use('/api/cars', carsRouter);

module.exports = server; 