const router = require('express').Router()
const {createProducts, updateProducts, getProducts, getOneProduct, deleteProduct} = require ('../controllers/products-controller')
const uploadDoc = require ('../config/cloudinary')



router.post('/create', uploadDoc.array('img'), createProducts)
router.patch('/update/:id',uploadDoc.array('img'), updateProducts)
router.get('/get', getProducts)
router.get('/getOne/:id', getOneProduct)
router.delete('/delete/:id', deleteProduct)

module.exports = router