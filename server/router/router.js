var authenticate = require('./authenticate');
var accountController = require('../controller/accountController');

var router = {};

router.test = accountController.test;

router.login = (request, response) => {
    
}

router.register = (request, response) => {
    
}

router.createProject = (request, response) => {
    
}

router.config = (appServer) => {
    authenticate.init(appServer); 
    
    var authActions = authenticate.actions;
    authenticate.get("/", router.test)
    authenticate.post("/login", router.login)
    authenticate.post("/register", router.register)
    authenticate.post("/createProject", router.createProject, authActions.requireLogin)
}

module.exports = router;