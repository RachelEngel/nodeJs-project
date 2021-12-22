const mongoose = require('mongoose')
const createOrderScema = mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'users'
    },
    orderDate: {
        type: Date,
        required: true
    },
    total: {
        type: Number,
        require: true
    },
    productsList: {
        type: Array,
        require: true
    }
})


module.exports = mongoose.model('orders', createOrderScema)