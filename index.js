var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./src/config/routes');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

routes(app);

var server = app.listen(5000, function() {
    console.log('magic on 5000');
});