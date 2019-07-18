var express = require('express');
var mongoose = require('mongoose');
var logger = require('morgan');

var PORT = 3000;

var db = require('./models');

var app = express();
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect("mongodb://localhost/populate", { useNewUrlParser: true });

db.Library.create({ name: "Campus Library" }).then(function(dbLibrary) {
    console.log(dbLibrary);
}).catch(function(error) {
    console.log(error.message);
});

app.post("/submit", function(req, res) {
    db.Book.create(req.body).then(function(dbBook) {
        return db.Library.findOneAndUpdate({}, { $push: { books: dbBook._id } }, { new: true });
    }).then(function(dbLibrary) {
        res.json(dbLibrary);
    }).catch(function(error) {
        res.json(error);
    });
});

app.get("/books", function(req, res) {
    db.Book.find({}).then(function(dbBook) {
        res.json(dbBook);
    }).catch(function(error) {
        res.json(error);
    });
}); 

app.get("/library", function(req, res) {
    db.Library.find({}).then(function(dbLibrary) {
        res.json(dbLibrary);
    }).catch(function(error) {
        res.json(error);
    });
});

app.get("/populated", function(req, res) {
    db.Library.find({})
    .populate("books").then(function(dbLibrary) {
        res.json(dbLibrary);
    }).catch(function(error) {
        res.json(error);
    });
});

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});