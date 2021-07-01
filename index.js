const express = require('express');
const mongoose = require('mongoose');
const dbConfig = require('./api/config/db.config');
const router = require('./api/routes/routes');

const app = express();

app.use(express.json());

mongoose.connect(dbConfig.db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('connected to db');
}).catch((err) => {
    console.log('db connection failed', ...err);
    process.exit();
});

app.use(router)

app.listen(process.env.PORT || 3000, () => 
    console.log('app running on localhost', 3000)
);
