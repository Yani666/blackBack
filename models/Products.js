const {Schema, model} = require('mongoose')

const productSchema = new Schema({

    title: String,
    description: String,
    price: Number,
    img:[{
        name:String,
        newPath:{id: String,
        url: String}}],

    available:{
        type: Boolean,
        default: false}
    },{
        timestamps: true,
        versionKey: false
    
})


module.exports = model('Products', productSchema)