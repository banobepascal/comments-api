const express = require('express');
const { createUser } = require('../controllers/auth');

const userRoute = express();

userRoute.post('/users/create', createUser);

module.exports = userRoute;