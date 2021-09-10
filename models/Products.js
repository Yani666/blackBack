const {Schema, model} = require('mongoose')

const productSchema = new Schema({

    title: String,
    description: String,
    price: String,
    img:{
        type:[String]
    },
    
    category:{type:String, enum:["zapatos", "ropa", "accesorios"]},

    available:{
        type: Boolean,
        default: false}
    },{
        timestamps: true,
        versionKey: false
    
})


module.exports = model('Products', productSchema)