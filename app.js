//express app
const express = require("express");
const app =  express();
const bodyParser = require("body-parser");
const routes = require('./routes');
const logger = require('morgan');
//
global.__root   = __dirname + '/'; 

app.use(express.static("client/build"));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:"application/json"}));
app.use(routes);

module.exports = app;