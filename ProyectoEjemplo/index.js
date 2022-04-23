const {port} = require('./config/index');
const express = require('express');
// const {} = require('./server/server');

const routas = require('./router/zuzulRoute');

const app = express();


app.use('/app',routas);






module.exports = app;