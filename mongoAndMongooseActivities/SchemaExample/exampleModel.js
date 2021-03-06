var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ExampleSchema = new Schema({
    string: {
        type: String,
        trim: true,
        required: "String is required"
    },
    number: {
        type: Number,
        unique: true,
        required: true
    },
    email: {
        type: String,
        match: [/.+@.+\..+/, "Please enter a valid email address"]
    },
    boolean: Boolean,
    array: Array,
    date: {
        type: Date,
        default: Date.now
    },
    longstring: {
        type: String,
        validate: [
            function(input) {
                return input.length >= 6;
            },
            "Longstring should be longer"
        ]
    }
});

var Example = mongoose.model("Example", ExampleSchema);

module.exports = Example;