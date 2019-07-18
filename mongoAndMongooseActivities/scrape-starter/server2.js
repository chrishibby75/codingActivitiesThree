var axios = require('axios');
var cheerio = require('cheerio');

axios.get("https://www.nytimes.com").then(function(response) {
    var $ = cheerio.load(response.data);
    var results = [];

    $("article.css-180b3ld").each(function(i, element) {
        var title = $(element).children().text();
        var link = $(element).find("a").attr("href");

        results.push({
            title: title,
            link: link
        });
    });

    console.log(results);
});