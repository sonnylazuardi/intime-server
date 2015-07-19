var thinky = require('../externs/thinky');
var type = thinky.type;

var Author = thinky.createModel("Author", {
    id: type.string(),
    name: type.string()
});

module.exports = Author;