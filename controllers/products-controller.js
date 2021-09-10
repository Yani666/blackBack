const Products = require ("../models/Products")

exports.createProducts = (req,res) =>{
    let img
    if(req.files){
        console.log(req.files)
        img = req.files.map((file)=> file.path)
    }
     const {
         title, price, ...restProd
     } = req.body
     console.log("holi img", img)
    Products.create({...req.body, img})
    .then(products => {res.status(200).json({products})})
    .catch(err => {res.status(400).json({err})})
}



exports.updateProducts = (req, res) =>{
    const {id} = req.params
    let {img} = req.body
    if(req.files){
        console.log(req.files)
        img = req.files.map((file)=> file.path)
    }
    Products.findByIdAndUpdate(id,{...req.body,img}, {new:true})
    .then(products => res.status(200).json({products}))
    .catch(error => res.status(400).json({error}))
 }

 exports.getProducts = (req, res) =>{
     Products.find()
     .then(products => res.status(200).json({products}))
     .catch(error => res.status(400).json({error}))
 }

 exports.getOneProduct = (req, res) =>{
     const {id} = req.params
     Products.findById(id)
     .then(products => res.status(200).json({products}))
     .catch(error => res.status(400).json({error}))
 }

 exports.deleteProduct = (req, res ) =>{
     const {id} = req.params
     Products.findByIdAndDelete(id)
     .then(() => res.status(200).json({msj:"el producto ha sido eliminado"}))
     .catch(error => res.status(400).json({error}))
 }
