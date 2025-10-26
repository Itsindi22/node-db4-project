const express = require('express');
const recipesRouter = require('./Recipes/recipes-router');

const server = express();

// Middleware
server.use(express.json()); // <-- fix here

// Mount the router
server.use('/api/recipes', recipesRouter);



module.exports = server;
