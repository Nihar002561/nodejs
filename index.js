require('dotenv').config()
const express = require("express")
const fs = require("fs")
const path = require("path")
const { stringify } = require("querystring")
const studentrouter = require('./routes/student')
const productrouter = require("./routes/product")
const authrouter = require("./routes/auth")
const { DBconnetion } = require('./configs/db')
const cookieparser = require("cookie-parser")
const { auth, isAdmin } = require('./middlewares/auth')
const studentmodel = require('./models/student')



const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieparser())
app.use("/student",studentrouter)
app.use("/product",productrouter)
app.use("/auth",authrouter)
app.use(express.static(path.join(__dirname,'/uploads')))


app.set('view engine', 'ejs')

DBconnetion();

app.get("/", async (req,res) => {
    const student = await studentmodel.find()
    res.render("index", {student})
})

app.get("/register",auth, isAdmin, (req,res) => {
    res.render("register")
})

app.get("/login", (req,res) => {
    res.render("login")
})

app.listen(process.env.PORT,() => {
    console.log("server is running")
})