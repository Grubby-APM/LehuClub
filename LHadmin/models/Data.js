const mongoose = require("./mongoose");

let dataSchema = mongoose.Schema({
    name:String,
    num:Number,
    price:Number,
    difficulty:String,
    type:Array,
    img:String,
    bgc:Array,
    txt:String,
})

module.exports = mongoose.model("scdata",dataSchema)