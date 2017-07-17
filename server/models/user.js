// requiring the mongoose file in db is not compulsory, since this is just the schema
// using the mongoose module will also work
// var mongoose = require('../db/mongoose');
var mongoose = require('mongoose');

var User = mongoose.model("User", {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});


module.exports = { User };