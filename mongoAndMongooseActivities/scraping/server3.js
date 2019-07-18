var axios = require('axios');
var cheerio = require('cheerio');

console.log("\n*******************************************************************\n" +
            "Look at the images of every award winner in one of the pages of \n" +
            "`awwwards.com`. Then, grab the image's source URL." +
            "\n*******************************************************************\n");

axios.get("http://www.awwwards.com/websites/clean/").then(function(response) {

    var $ = cheerio.load(response.data);
    var results = [];

    $("figure.rollover").each(function(i, element) {

        var imgLink = $(element).find("a").find("img").attr("data-srcset").split(",")[0].split(" ")[0];

        results.push({
            link: imgLink
        });
    });

    console.log(results);
});