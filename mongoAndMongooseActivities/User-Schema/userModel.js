var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: "Username is required"
    },
    password: {
        type: String,
        trim: true,
        required: "A password is required",
        validate: [
            function(input) {
                return input.length >= 8
            },
            "Password should be longer"
        ]
    }, 
    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valide email address"]
    }, 
    userCreated: {
        type: Date,
        default: Date.now
    },
    isCool: {
        type: Boolean,
        default: false
    }
});

UserSchema.methods.coolifier = function() {
    this.username = this.username + "...the Coolest!";
    return this.username;
};

UserSchema.methods.makeCool = function() {
    this.isCool = true;
    return this.isCool;
};

var User = mongoose.model("User", UserSchema);

module.exports = User;