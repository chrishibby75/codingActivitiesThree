var axios = require('axios');
var cheerio = require('cheerio');

console.log("\n****************************************\n" +
            "Grabbing every article, \nheadline and link" +
            " from the NHL website:" + 
            "\n*****************************************\n");

            axios.get("https://www.nhl.com/").then(function(response) {
                var $ = cheerio.load(response.data);

                var results = [];

                $("h4.headline-link").each(function(i, element) {
                    var title = $(element).text();

                    var link = $(element).parent().attr("href");

                    results.push({
                        title: title,
                        link: link
                    });
                });

                console.log(results);
            });