// const StudentModel = require("../models/student")


// async function addStudent(req,res){
//     {
//         const payload = req.body
      
//         const student = await StudentModel.create(payload)
//         res.json({
//           status:201,
//           message:"student created successfully",
//           data:student
//         })
//       }
// }

// async function getAllStudent(req,res){
//     {
//         const student = await StudentModel.find();
//         res.json({
//           status:200,
//           data:student
//         })
//       }
// }

// async function getSingleStudent(req,res){
//     {
//           const {id} = req.params
//           const student = await StudentModel.findById(id)
//           res.json({
//             status:200,
//             data:student
//           })
//         }
// }

// async function updateStudent(req,res){
//     {
//         const {id} = req.params
//         const payload = req.body
//         const student = await StudentModel.findByIdAndUpdate(id,payload,{new:true})
//         res.json({
//           status:200,
//           message:"student updated successfully",
//           data:student
//         })
//       }
// }

// async function deleteStudent(req,res){
//     {
//         const {id} = req.params
//         const student = await StudentModel.findByIdAndDelete(id)
//         res.json({
//           status:200,
//           message:"student deleted successfully",
//           data:student
//         })
//       }
// }

// module.exports={addStudent,getAllStudent,getSingleStudent,updateStudent,deleteStudent} 






const studentmodel = require("../models/student");
const bcrypt = require("bcryptjs")


async function addStudent (req,res) {
  
    const {password, ...studentData} = req.body
    const hashedpassword = await bcrypt.hash(password,10)
    const student = await studentmodel.create({
      ...studentData, 
      password:hashedpassword,
      avatar_url:req.file.path})

    res.json({
      status:201,
      message:"Student created successfully",
      data:student
    })
  }

async function getAllStudent (req,res) {
    
    const student = await studentmodel.find()
    res.json({
      status:200,
      message:"Student find successfully",
      data:student
    })
  }

async function getSingleStudent (req,res) 
{
    const {id} = req.params
    const student = await studentmodel.findById(id)
  
    res.json({
      status:200,
      data:student
    })
  }

async function updateStudent (req,res) 
{
    const payload = req.body
    const {id} = req.params
  
  
    const updatedStudent = await studentmodel.findByIdAndUpdate(id, payload , {new:true} )
  
    res.json({
      status:200,
      message:"student updated successfully",
      data:updatedStudent
    })
  
  }

async function deleteStudent (req,res) 
{
    const {id} = req.params
  
    const dstudent = await studentmodel.findByIdAndDelete(id)
  
    res.json({
      status:200,
      message:"student deleted successfully",
      data:dstudent
    })
  
  }

  module.exports = {addStudent,getAllStudent,getSingleStudent,updateStudent,deleteStudent}