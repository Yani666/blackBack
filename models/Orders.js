const {Schema, model} = require('mongoose')

const orderSchema = new Schema({

    _owner:{
        type:Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    price: Number,
    _products:{
        type:[{title: String,
            description: String,
            price: String,
            cant:Number,
            totalXcant:Number}],
        require:true
    }

    },{
        timestamps: true,
        versionKey: false

})


module.exports = model('orderSchema', orderSchema)