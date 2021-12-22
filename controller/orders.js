const Orders = require('../models/orders');

const createNewOrder = async (req, res) => {
    let newOrder = new Orders(req.body)
    try {
        let currentOrder = await newOrder.save();
        res.send(currentOrder)
    } catch (err) {
        res.status(500)
        res.send(err)
    }

}

const getUserOrder = async (req, res) => {
    const userId = req.params.userId;
    const filter = { userId: userId}
    try {
        const currentUserOrder = await Orders.find(filter).sort({ "orderDate": -1 }).limit(1)
        res.json({ productsList: currentUserOrder[0].productsList,
                   totalPrice: currentUserOrder[0].total,
                   orderDate: currentUserOrder[0].orderDate})
    } catch(err) {
        res.status(500);
        res.send(err);
    }
}

const deleteProductFromOrder = async (req, res) => {
    const productId = req.params.productId;
    const filter = { userId: req.params.userId }

    try{
        const currentOrder = await Orders.find(filter).sort({ "orderDate": -1 }).limit(1).updateMany(
          { }, { $pull: { "productsList": { productId: productId } } }, { safe: true, upsert: true })
        res.send(currentOrder);    
    } catch(err) {
        res.status(500)
        res.send(err)
    }

}

const updateProductFromOrder = async (req, res) => {
    const filter = { userId: req.params.userId };
    const productId = req.body.productId;
    try {
        const updatedOrder = await Orders.find(filter).sort({ "orderDate": -1 }).limit(1).updateMany(
            {
                productsList: { $elemMatch: { productId: productId } }
            },
            { $set: { "productsList.$.count": req.body.count } }
        )
        res.send(updatedOrder);
    } catch(err) {
        res.status(500);
        res.send(err);
    }
}


module.exports = { createNewOrder, getUserOrder, deleteProductFromOrder, updateProductFromOrder}