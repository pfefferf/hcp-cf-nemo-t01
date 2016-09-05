'use strict';

let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    id: Number,
    user_name: String,
    last_name: String,
    first_name: String
});

let User = mongoose.model('User', userSchema);

module.exports = User;
