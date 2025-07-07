const productModel = require("../models/product")


async function addProduct(req,res){
    {
        const payload = req.body
      
        const product = await productModel.create(payload)
        res.json({
          status:201,
          message:"product added successfully",
          data:product
        })
      }
}

async function getAllProduct(req,res){
    {
        const product = await productModel.find();
        res.json({
          status:200,
          data:product
        })
      }
}

async function getSingleProduct(req,res){
    {
          const {id} = req.params
          const product = await productModel.findById(id)
          res.json({
            status:200,
            data:product
          })
        }
}

async function updateproduct(req,res){
    {
        const {id} = req.params
        const payload = req.body
        const product = await productModel.findByIdAndUpdate(id,payload,{new:true})
        res.json({
          status:200,
          message:"product updated successfully",
          data:product
        })
      }
}

async function deleteProduct(req,res){
    {
        const {id} = req.params
        const product = await productModel.findByIdAndDelete(id)
        res.json({
          status:200,
          message:"product deleted successfully",
          data:product
        })
      }
}

module.exports={addProduct,getAllProduct,getSingleProduct,updateproduct,deleteProduct} 

