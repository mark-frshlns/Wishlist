//express app
const express = require("express");
const app =  express();
const bodyParser = require("body-parser");
const routes = require('./routes');
const logger = require('morgan');
const path = require('path');
//
global.__root   = __dirname + '/'; 
console.log(global.__root);
app.use(express.static(path.join(global.__root,"client/")));

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:"application/json"}));
app.use(routes);

module.exports = app;