const router = require('express').Router()
const {createOrder, updateOrders, getOrders, getOneOrder, deleteOrder, getOrdersByUser} = require ('../controllers/orders-controller')



router.post('/create', createOrder)
router.patch('/update/:id', updateOrders)
router.get('/get', getOrders)
router.get('/getOne/:id', getOneOrder)
router.delete('/delete/:id', deleteOrder)
router.get("/getMyOrders", getOrdersByUser)

module.exports = router