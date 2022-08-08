const mongoose = require('mongoose')

const userschema = new mongoose.Schema({
    fname:{type:String,required:true},
    lname:{type:String,required:true},
    phonNO:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}

})

module.exports = mongoose.model("Users",userschema)