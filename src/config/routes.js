var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

var router = function(app) {
    app.get('/user/list', userController.list);
    app.get('/user/add', userController.add);
};

module.exports = router;