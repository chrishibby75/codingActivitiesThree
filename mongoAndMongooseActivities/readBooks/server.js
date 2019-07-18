var express = require('express');
var mongojs = require('mongojs');
var logger = require('morgan');

var app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

var databaseUrl = "warmup";
var collections = ["books"];

var db = mongojs(databaseUrl, collections);
db.on("error", function(error) {
        console.log("Database Error: ", error);
});

app.post("/submit", function(req, res) {
    var book = req.body;
    book.read = false;

    db.books.save(book, function(error, saved) {
        if (error) {
            console.log(error);
        }
        else{
            res.send(saved);
        }
    });
});

app.get("/read", function(req, res) {
    db.books.find({ read: true }, function(error, found) {
        if (error) {
            console.log(error);
        }
        else {
            res.json(found);
        }
    });
});

app.get("/unread", function(req, res) {
    db.books.find({ read: false }, function(error, found) {
        if (error) {
            console.log(error);
        }
        else {
            res.json(found);
        }
    });
});

app.get("/markread/:id", function(req, res) {
    db.books.update(
        {
            _id: mongojs.ObjectId(req.params.id)
        },{
            $set: {
                read: true
            }
        },
        function(error, edited) {
            if (error) {
                console.log(error);
                res.send(error);
            }
            else {
                console.log(edited);
                res.send(edited);

            }
        }
    );
});

app.get("/markunread/:id", function(req, res) {
    db.books.update(
        {
            _id: mongojs.ObjectId(req.params.id)
        },{
            $set: {
                read: false
            }
        },
        function(error, edited) {
            if (error) {
                console.log(error);
                res.send(error);
            }
            else {
                console.log(edited);
                res.send(edited);
            }
        }
    );
});

app.listen(3000, function() {
    console.log("App running on PORT 3000");
});