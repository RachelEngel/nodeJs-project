const mongoose = require('mongoose')
const productScema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        require: true
    }
})


module.exports = mongoose.model('products', productScema)