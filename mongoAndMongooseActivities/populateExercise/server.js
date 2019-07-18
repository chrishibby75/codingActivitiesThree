var express = require('express');
var mongoose = require('mongoose');
var logger = require('morgan');

var PORT = 3000;

var db = require("./models");

var app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect("mongodb://localhost/populatedb", { useNewUrlParser: true });

db.User.create({ name: "Dean Koontz" }).then(function(dbUser) {
    console.log(dbUser);
}).catch(function(err) {
    console.log(err.message);
});

app.get("/notes", function(req, res) {
    db.Note.find({}).then(function(dbNote) {
        res.json(dbNote);
    }).catch(function(err) {
        res.json(err);
    });
});

app.get("/user", function(req, res) {
    db.User.find({}).then(function(dbUser) {
        res.json(dbUser);
    }).catch(function(err) {
        res.json(err);
    });
});

app.post("/submit", function(req, res) {
    db.Note.create(req.body).then(function(dbNote) {
        return db.User.findOneAndUpdate({}, { $push: { notes: dbNote._id } }, { new: true });
    }).then(function(dbUser) {
        res.json(dbUser);
    }).catch(function(err) {
        res.json(err);
    });
});

app.get("/populateduser", function(req, res) {
    db.User.findAll({}).populate("notes").then(function(dbUser) {
        res.json(dbUser);
    }).catch(function(err) {
        res.json(err);
    });
});

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});