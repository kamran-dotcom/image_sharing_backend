const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    'name':String,
    'email':String,
    'password':String,
    'profile_image':String,
    'cover_image':String
})

module.exports = mongoose.model("users",userSchema);