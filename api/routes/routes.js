const express = require('express');
const userRoute = require('./auth');
const projectsRoute = require('./projects');
const allRoutes = express.Router();

allRoutes.use(express.json());

allRoutes.use(userRoute);
allRoutes.use(projectsRoute);

module.exports = allRoutes;
