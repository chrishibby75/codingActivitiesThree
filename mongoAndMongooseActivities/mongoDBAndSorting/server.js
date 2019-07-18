var express = require('express');
var mongojs = require('mongojs');

var app = express();

var databaseUrl = "zoo";
var collections = ["animals"];

var db = mongojs(databaseUrl, collections);

db.on("error", function(error) {
    console.log("Database Error:", error);
});

app.get("/", function(req, res) {
    res.send("Hello World");
});

app.get("/all", function(req, res) {
    db.animals.find({}, function(err, found) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(found);
        }
    });
});

app.get("/name", function(req, res) {
    db.animals.find().sort({name: 1}, function(err, found) {
        if (err) {
            console.log(err); 
        }
        else {
            res.json(found);
        }
    });
});

app.get("/weight", function(req, res) {
    db.animals.find().sort({weight: -1}, function(err, found) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(found);
        }
    });
});

app.listen(8080, function() {
    console.log("App listening on PORT 8080");
});