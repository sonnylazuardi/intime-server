var config = require('../config/config');

var thinky = require('thinky')(config.rethinkDB);
var type = thinky.type;

module.exports = thinky;