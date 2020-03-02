const mongoose = require("mongoose");

// 创建连接
mongoose.connect("mongodb://127.0.0.1:27017/admin",{useNewUrlParser: true,useUnifiedTopology:true},function(err){
    if(err){
        throw Error("数据库连接失败"); //控制台报错
    }else{
        console.log("数据库连接成功");
    }
})

module.exports = mongoose;