var express = require('express');
var axios = require('axios');
var cheerio = require('cheerio');
var mongojs = require('mongojs');

var app = express();

var databaseUrl = "scraper";
var collections = ["scrapedData"];

var db = mongojs(databaseUrl, collections);
db.on('error', function(error) {
    console.log("Database Error: ", error);
});

app.get("/", function(req, res) {
    res.send("Hello World");
});

app.get("/all", function(req, res) {
    db.scrapedData.find({}, function(error, found) {
        if (error) {
            console.log(error);
        }
        else {
            res.json(found);
        }
    });
});

app.get("scrape", function(req, res) {
    axios.get("https://new.ycombinator.com/").then(function(response) {
        var $ = cheerio.load(response.data);

        $(".title").each(function(i, element) {
            var title = $(element).children("a").text();
            var link = $(element).children("a").attr("href");

            if (title && link) {
                db.scrapedData.insert({
                    title: title,
                    link: link
                }, function(error, inserted) {
                    if (err) {
                        console.log(error);
                    }
                    else {
                        console.log(inserted);
                    }
                });
            }
        });
    });
    res.send("Scrape complete!");
});

app.listen(3000, function() {
    console.log("App listening on PORT 3000");
});