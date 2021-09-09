const {Schema,model}= require("mongoose")
const PLM = require ('passport-local-mongoose')

const userSchema = new Schema({

    username:{
        type:String,
        unique:true,
        required: true
        
    },
    email:{
        type:String,
        unique:true,
        required: true
        
    },
    password:{
        type:String,
        required: true
        
    },
    role:{
        type:String,
        enum:["ADMIN","USER"],default:"USER"
    },
    
   
    

},{timestamps:true}) 

userSchema.plugin(PLM, {usernameField: 'email'})

module.exports = model("User",userSchema)