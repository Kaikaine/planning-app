const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    password: String,
    friends: Array,
    events: Array,
    notifications: Array
})

const User = mongoose.model('user', UserSchema)

module.exports = User