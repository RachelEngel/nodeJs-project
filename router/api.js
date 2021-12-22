const users=require('../controller/users')
const products=require('../controller/products')
const orders=require('../controller/orders')
const router=require('express').Router()

router.get('/api/users/:name',users.getUserByName)
router.post('/api/users/createUser',users.createUser)

router.get('/api/products/getAllProducts', products.getAllProducts)
router.get('/api/products/:productId', products.getProductById)
router.post('/api/products/createProduct', products.createProduct)

router.post('/api/orders/newOrder', orders.createNewOrder)
router.get('/api/orders/:userId/order', orders.getUserOrder)
router.delete('/api/orders/:userId/product/:productId', orders.deleteProductFromOrder)
router.put('/api/orders/:userId/product', orders.updateProductFromOrder)

module.exports=router
