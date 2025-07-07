// export function additional(a,b){
//     console.log(a+b);
    
// }

// export function Subtraction(a,b){
//     console.log(a-b);
    
// }

// import { additional,Subtraction } from "./app.js";

// additional(6,2)
// Subtraction(6,2)





// const fs = require("fs")

// console.log("1")

// fs.mkdirSync('demo')

// console.log("2")

// fs.writeFileSync('./demo/test.txt', "This is write fs file opreation")

// fs.appendFileSync('./demo/test.txt','\n This is write file opreation')

// console.log("3")

// fs.unlinkSync("./demo/test.txt")

// fs.rmdirSync("demo")

// console.log("4")

// fs.mkdir("demo", () => {
//     console.log("directory created");
// })

// fs.writeFile("./demo/test.txt","Async process", () => {
//     console.log("Write sucess")
// })

// fs.appendFile("./demo/test.txt","\nAppend Process", () => {
//     console.log("Append Sucess")
// })

// fs.readFile("./demo/test.txt","utf-8",(err,data) => {
//     console.log(data)
// })

// fs.unlink("./demo/test.txt",() => {
//     console.log("Unlink Sucess")
// })

// fs.rmdir("./demo", () => {
//     console.log("Directory remove")
// })





// const http = require("http")

// const myServer = http.createServer((req,res) => {

//     console.log("==========>", req.url,req.method)

//     if(req.url === "/about" && req.method === "GET"){
//         res.end("Hello from the about page");
//     }
//     else if(req.url === "/contact" && req.method === "GET"){
//         res.end("Hello from the contact page");
//     }
//     else {
//         res.end("Hello from the server...");
//     }
// })

// myServer.listen(8080,() => {
//     console.log("Server is running in port 8080")
// });





// const express = require("express")

// const app = express()

// app.get("/",(req,res) => {
//     res.send("Hello from the server...")
// })

// app.get("/about",(req,res) => {
//     res.send("Hello from the about page")
// })

// app.get("/contact",(req,res) => {
//     res.send("Hello from the contact page")
// })

// app.listen(8080,() => {
//     console.log("server is running...")
// })


