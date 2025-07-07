const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description: {
      type: String
    },
    price: {
      type: Number,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    stock: {
      type: Number,
      required: true
    },
    ratings: {
      type: Number,
      min: 0,
      max: 5,
      default: 0
    },
  },{timestamps:true});
  
 module.exports = mongoose.model('product', productSchema);