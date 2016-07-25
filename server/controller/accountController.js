var controller = {};

controller.test = (request, response) => {
    response.send("test data");
}

module.exports = controller;