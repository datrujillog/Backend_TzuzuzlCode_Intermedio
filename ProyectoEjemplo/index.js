const {port} = require('./config/index');
const express = require('express');
// const {} = require('./server/server');

const router = require('./router/index');

const app = express();

// todo: middleware para leer el body de la peticion 
app.use(express.json());

app.use(router);

 




module.exports = app;