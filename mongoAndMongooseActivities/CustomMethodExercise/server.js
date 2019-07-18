var express = require('express');
var mongoose = require('mongoose');
var logger = require('morgan');

var PORT = 3000;

var User = require('./userModel');

var app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect("mongodb://localhost/custommethoddb", { useNewUrlParser: true });

app.post("/submit", function(req, res) {
    var user = new User(req.body);
    user.setFullName();
    user.lastUpdatedDate();

    User.create(user).then(function(dbUser) {
        res.json(dbUser);
    }).catch(function(err) {
        res.json(err);
    });
});

app.listen(PORT, function() {
    console.log("App listening on port: " + PORT);
});