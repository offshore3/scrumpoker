import express from 'express';
import config from './config';

import router from './router/router';

import http from 'http';

const appServer = express();
router.config(appServer);

appServer.listen(config.port, function () {
    console.log('Server is running!');
    
})