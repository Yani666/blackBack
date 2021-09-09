const {Schema, model} = require('mongoose')

const suggestionSchema = new Schema({

    name:String,
    email:{
        type:String,
        unique:true},
    suggestion: String,

    },{
        timestamps: true,
        versionKey: false
    
})


module.exports = model('Suggestion', suggestionSchema)