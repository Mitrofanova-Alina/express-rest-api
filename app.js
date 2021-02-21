const config = require('./config/config');
const express = require('express');
const passport = require('passport');
const Strategy = require('passport-http-bearer').Strategy;
const routes = require('./routes')
const {verify} = require('./utils/jwt');

passport.use('bearerAuth', new Strategy(verify));

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(config.url, routes);
app.use(passport.initialize(undefined));

app.listen(config.port, config.host, () => {
    console.log(`API app started at ${config.port} port.`);
})
