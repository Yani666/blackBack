const Orders = require ("../models/Orders")
const {transporter} = require("../config/sendMail")
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)


exports.createOrder = async (req,res) =>{
    const{_id:_owner, email} = req.user
    try{
        const orders = await Orders.create({...req.body, _owner})
        const msg = {
            to: email, // Change to your recipient
            from: 'dyl.blink.1.8.2@gmail.com', // Change to your verified sender
            subject: 'Sending with SendGrid is Fun',
            text: 'and easy to do anywhere, even with Node.js',
            html: '<strong>and easy to do anywhere, even with Node.js</strong>',
          }
         await sgMail.send(msg)
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
