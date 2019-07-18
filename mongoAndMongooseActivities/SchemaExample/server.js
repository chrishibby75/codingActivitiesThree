var mongoose = require('mongoose');
var example = require("./exampleModel");

mongoose.connect("mongodb://localhost/schemaexample", { useNewUrlParser: true });

var data = {
    array: ["item1", "item2", "item3"],
    boolean: false,
    string: "\'Don't worry if it doesn't work right. If everything did, you'd be out of a job.'-Mosher's law of software engineering",
    number: 42
};

example.create(data).then(function(dbExample) {
    console.log(dbExample);
}).catch(function(error) {
    console.log(error.message);
});