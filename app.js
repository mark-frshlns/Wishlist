//express app
const express = require("express");
const app =  express();
const bodyParser = require("body-parser");
const session = require('express-session');
const routes = require('./routes');
const passport = require('passport');
const logger = require('morgan');
const csp = require('helmet-csp');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
cookieParser = require('cookie-parser');
const path = require('path');
const db = require('./models');
//
global.__root   = __dirname + '/'; 

app.use(express.static("client/build"));
app.use(csp({
    directives:{
        defaultSrc:["'self'",'stanthony-wishlist.com'],
        scriptSrc:["'self'"],
        fontSrc:['fonts.googleapis.com','fonts.gstatic.com','use.fontawesome.com'],

    }
}))
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:"application/json"}));
app.use(cookieParser());
app.use(session({ secret: "V+5TT#S.RYtaAju>MkRn", store: new SequelizeStore({db:db.sequelize}), resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(routes);

module.exports = app;