
const Products = require('../models/products');


const createProduct = async(req, res) => {
    let newProduct = new Products(req.body)
    try {
        let currentProduct = await newProduct.save();
        res.send(currentProduct)
    } catch (err) {
        res.status(500)
        res.send(err)
    }
}

const getAllProducts = async(req, res) => {
    console.log("getAllProducts")
    try {
      const allProducts = await Products.find();
        res.send(allProducts)
    } catch (err) {
        res.status(500)
        res.send(err)
    }
}
const getProductById = async(req, res) => {
        const productId = req.params.productId;
    const filter = { productId: productId }
        try {
            const currentProduct = await Products.findOne(filter)
            res.send(currentProduct)
        } catch (err) {
            res.status(500);
            res.send(err);
        }
    }


module.exports = { createProduct, getAllProducts, getProductById }