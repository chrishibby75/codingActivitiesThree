var axios = require('axios');
var cheerio = require('cheerio');

console.log("\n***************************************************\n" +
            "Showing items from amazon.com" + 
            "\n***************************************************\n");

axios.get("https://www.amazon.com/s?k=toys&ref=nb_sb_noss_2/").then(function(response) {

var $ = cheerio.load(response.data);

var results = [];

$("div.s-inner-result-item").each(function(i, element) {
    var title = $(element).children().text();
    var link =$(element).find("a").attr("href");

    results.push({
        title: title,
        link: link
    });
});

console.log(results);
})