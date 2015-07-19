var Author = require('../models/Author');

function handleError(res) {
    return function(error) {
        console.log(error.message);
        return res.send(500, {error: error.message});
    }
}

var userController = {
    list: function (req, res) {
        Author.run().then(function(authors) {
            res.json({
                authors: authors
            });
        }).error(handleError(res));
    },
    add: function (req, res) {
        var author = new Author({
            name: 'Alif Raditya Rohman'
        });

        author.save().then(function(result) {
            res.json({
                result: result
            });
        }).error(handleError(res));
    }
};

module.exports = userController;