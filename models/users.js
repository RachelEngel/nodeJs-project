const mongoose = require('mongoose')
const addUserScema = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('users', addUserScema)