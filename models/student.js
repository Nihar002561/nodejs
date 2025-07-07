const mongoose = require("mongoose")

const studentSchema =new mongoose.Schema({
    firstName:{
      type:String,
    },
    lastName:{
      type:String,
    },
    email:{
      type:String,
      required:true,
      unique:true
    },
    contact:{
      type:String,
      required:true,
        unique:true
    },
    password:{
      type:String,
      required:true
    },
    role:{
      type:String,
      require:true
    },
    avatar_url:{
      type:String,
      default:null
    }
  },{timestamps:true})
  
  module.exports = mongoose.model("student",studentSchema)