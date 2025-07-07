const mongoose = require("mongoose")

function DBconnetion(){
    mongoose.connect(process.env.DB_CONNECTION_STRING).
    then(() => console.log("DB Connection success")).
    catch((err) => console.log("err"))
}

module.exports = {DBconnetion}