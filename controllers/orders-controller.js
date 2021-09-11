const Orders = require ("../models/Orders")
const {transporter} = require("../config/sendMail")
const sgMail = require('@sendgrid/mail')



exports.createOrder = async (req,res) =>{
    const{_id:_owner, email} = req.user
    try{
        const orders = await Orders.create({...req.body, _owner})
        res.status(201).json({orders})

    }catch(error){
        res.status(400).json({error}) 

    }
   
    
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

 exports.getOrdersByUser = (req, res) =>{
    const{_id:_owner, email} = req.user
    Orders.find({_owner})
    .then(orders => res.status(200).json({orders}))
    .catch(err => res.status(400).json({error}))
}
