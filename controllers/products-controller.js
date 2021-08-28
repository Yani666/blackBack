const Products = require ("../models/Products")

exports.createProducts = (req,res) =>{
    let img
    if(req.file){
        img = req.file.path
    }
     const {
         title, price, ...restProd
     } = req.body
    Products.create({...req.body, img})
    .then(products => {res.status(200).json({products})})
    .catch(err => {res.status(400).json({err})})
}



exports.updateProducts = (req, res) =>{
    const {id} = req.params
    Products.findByIdAndUpdate(id,{...req.body}, {new:true})
    .then(products => res.status(200).json({products}))
    .catch(err => res.status(400).json({error}))
 }

 exports.getProducts = (req, res) =>{
     Products.find()
     .then(products => res.status(200).json({products}))
     .catch(err => res.status(400).json({error}))
 }

 exports.getOneProduct = (req, res) =>{
     const {id} = req.params
     Products.findById(id)
     .then(products => res.status(200).json({products}))
     .catch(err => res.status(400).json({error}))
 }

 exports.deleteProduct = (req, res ) =>{
     const {id} = req.params
     Products.findByIdAndDelete(id)
     .then(products => res.status(200).json({products}))
     .catch(err => res.status(400).json({error}))
 }
