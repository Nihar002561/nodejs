const express = require("express")
const router = express.Router()
const { addProduct, getAllProduct, getSingleProduct, deleteProduct, updateproduct } = require("../controllers/product")



router.post("/",addProduct)

router.get("/",getAllProduct)

router.get("/:id" ,getSingleProduct)
  
router.delete("/:id" , deleteProduct)

router.put("/:id" ,updateproduct)


  module.exports = router