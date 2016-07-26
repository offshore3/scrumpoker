var authenticate = require('./authenticate');
var accountController = require('../controller/accountController');
var projectController = require('../controller/projectController');

var router = {};

router.test = accountController.test;

router.login = (request, response) => {
    
}

router.register = (request, response) => {
    
}

router.createProject = (request, response) => {
    
}

router.config = (appServer) => {
    var authActions = authenticate.actions;

    authenticate.init(appServer);    
    authenticate.get("/", accountController.test)
    authenticate.post("/login", accountController.login)
    authenticate.post("/register", accountController.register)
    authenticate.post("/createProject",projectController.createProject, authActions.requireLogin)
}

module.exports = router;