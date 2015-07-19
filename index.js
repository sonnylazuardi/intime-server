var options = {
  host: 'busintime.id',
  port: 28015
};

var thinky = require('thinky')(options);
var type = thinky.type;

// Create a model - the table is automatically created
var Post = thinky.createModel("Post", {
    id: type.string(),
    title: type.string(),
    content: type.string(),
    idAuthor: type.string(),
    date: type.string()
}); 

var Author = thinky.createModel("Author", {
    id: type.string(),
    name: type.string()
});

// Join the models
Post.belongsTo(Author, "author", "idAuthor", "id");