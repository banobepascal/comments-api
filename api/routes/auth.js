const express = require('express');
const { createUser } = require('../controllers/auth');

const userRoute = express();

userRoute.post('/api/users/new', createUser);

module.exports = userRoute;