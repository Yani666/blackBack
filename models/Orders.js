const {Schema, model} = require('mongoose')

const orderSchema = new Schema({

    _owner:{
        type:Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    price: Number,
    _products:{
        type:[Schema.Types.ObjectId],
        ref: "Products",
        require:true
    }

    },{
        timestamps: true,
        versionKey: false

})


module.exports = model('orderSchema', orderSchema)