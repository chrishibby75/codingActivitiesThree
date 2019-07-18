var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        required: "First name is required"
    },
    lastName: {
        type: String,
        trim: true,
        required: "Last name is required"
    },
    username: {
        type: String,
        trim: true,
        required: "Username is required"
    },
    password: {
        type: String,
        trim: true,
        required: "Password is required",
        validate: [
            function(input) {
                return input.length >= 8;
            },
            "Password is required"
        ]
    },
    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid email address"]
    },
    userCreated: {
        type: Date,
        default: Date.now
    },
    lastUpdated: Date,
    fullName: String
});

UserSchema.methods.setFullName = function() {
    this.fullName = this.firstName + " " + this.lastName;
    return this.fullName;
};

UserSchema.methods.lastUpdatedDate = function() {
    this.lastUpdated = Date.now();
    return this.lastUpdated;
};

var User = mongoose.model("User", UserSchema);

module.exports = User;