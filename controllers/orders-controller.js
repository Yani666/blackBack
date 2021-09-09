const Orders = require ("../models/Orders")

exports.createOrder = (req,res) =>{
    const{_id:_owner} = req.user
    Orders.create({...req.body, _owner})
    .then(orders => {res.status(200).json({orders})})
    .catch(err => {res.status(400).json({err})})
}

exports.updateOrders = (req, res) =>{
    const {id} = req.params
    Orders.findByIdAndUpdate(id,{...req.body}, {new:true})
    .then(orders => res.status(200).json({orders}))
    .catch(err => res.status(400).json({error}))
 }

 exports.getOrders = (req, res) =>{
     Orders.find()
     .then(orders => res.status(200).json({orders}))
     .catch(err => res.status(400).json({error}))
 }

 exports.getOneOrder = (req, res) =>{
     const {id} = req.params
     Order.findById(id)
     .then(order => res.status(200).json({order}))
     .catch(err => res.status(400).json({error}))
 }

 exports.deleteOrder = (req, res ) =>{
     const {id} = req.params
     Orders.findByIdAndDelete(id)
     .then(orders => res.status(200).json({orders}))
     .catch(err => res.status(400).json({error}))
 }
