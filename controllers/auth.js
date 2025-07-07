const studentmodel = require("../models/student")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");


async function login (req,res)
    {
        const {email,password} = req.body
    
        const user = await studentmodel.findOne({email})
        if(!user){
            return res.json({status:404, message:"user not found"})
        }

        const isMatched = await bcrypt.compare(password,user.password)
        if(!isMatched){
            return res.json({status:404, message:"invalid credentials"})
        }

        const token = await jwt.sign({
            id: user._id
        }, process.env.JWT_SECRET) 

        res.cookie("auth", token)

        res.redirect("/")
        
        // res.json({
        //     status:200,
        //     message:"login successfully",
        // })
     }

     module.exports = {login}