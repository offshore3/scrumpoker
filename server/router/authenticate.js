var authenticate = {};
var appServer = {};

authenticate.init = (server) => {
    appServer = server;
}

authenticate.actions = {
    requireLogin: (request) => {

    }
}

authenticate.get = (path, action, authenticateAction) => {
    checkPermission(appServer.get, path, authenticateAction);
    appServer.get(path, action);
}

authenticate.post = (path, action, authenticateAction) => {
    checkPermission(appServer.post, path, authenticateAction);
    appServer.post(path, action);
}

authenticate.put = (path, action, authenticateAction) => {
    checkPermission(appServer.put, path, authenticateAction);
    appServer.put(path, action);
}

authenticate.delete = (path, action, authenticateAction) => {
    checkPermission(appServer.delete, path, authenticateAction);
    appServer.delete(path, action);
}

function checkPermission(requestMethod, path, authenticateAction) {
    if (authenticateAction) {
        requestMethod.bind(appServer)(path, authenticateAction);
    }
}

module.exports = authenticate;