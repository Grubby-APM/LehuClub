const mongoose = require("mongoose");

let userSchema = mongoose.Schema({
    username:String,
    password:String,
    price:Number,
})

module.exports = mongoose.model("user",userSchema)