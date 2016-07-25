var express = require('express');
var config = require('./config');
var router = require('./router/router');

const appServer = express();
router.config(appServer);

appServer.listen(config.port, function () {
    console.log('Server is running!');
})