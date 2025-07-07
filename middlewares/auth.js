const jwt = require("jsonwebtoken")
const studentmodel = require('../models/student')

async function auth(req,res,next){
    const token = req.cookies.auth
 
    if(!token){
        return res.json({status:401, message:"undifined" })
    }

    try{
        const verifiedToken = await jwt.verify(token,process.env.JWT_SECRET)
        const user = await studentmodel.findById(verifiedToken.id)
        req.user = user
        next();
    }

    catch(error){
        return res.json({status:400, message:"invalid token!" })
    }
    // console.log(token);
    
}

async function isAdmin(req,res,next){
    // console.log(req.user)
    const role = req.user.role

    if(role !== 'Admin' && role !== 'Manager'){
         res.json({
            message:"Access denied",
            status:403
        })
    }
    next();
}

module.exports = {auth,isAdmin}