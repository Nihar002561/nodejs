const express = require("express")
const router = express.Router()
const { addStudent, getAllStudent, getSingleStudent, deleteStudent, updateStudent } = require("../controllers/student")
const multer = require("multer")


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname)
  }
})
const upload = multer({ storage: storage })

router.post("/", upload.single('profile-pic'), addStudent)

router.get("/",getAllStudent)

router.get("/:id" ,getSingleStudent)
  
router.delete("/:id" , deleteStudent)
  
router.put("/:id" ,updateStudent)


  module.exports = router
