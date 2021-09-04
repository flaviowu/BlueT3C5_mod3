const mongoose = require('mongoose')

const UserModel = new mongoose.Schema({
    username: { type: String, require: true },
    password: { type: String, require: true},
    email: { type: String, require: true}
})

const User = mongoose.model('User', UserModel)
module.exports = User