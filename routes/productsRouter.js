const router = require('express').Router()
const {createProducts, updateProducts, getProducts, getOneProduct, deleteProduct} = require ('../controllers/products-controller')
const uploadDoc = require ('../config/cloudinary.js')


router.post('/create', uploadDoc.single('img'), createProducts)
router.patch('/update/:id', updateProducts)
router.get('/get', getProducts)
router.get('/getOne/:id', getOneProduct)
router.delete('/delete/:id', deleteProduct)

module.exports = router