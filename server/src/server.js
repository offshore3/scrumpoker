import express from 'express';
import config from './config';
import router from './router/router';

const appServer = express();
router.config(appServer);

appServer.listen(config.port, function () {
    console.log('Server is running!');
})