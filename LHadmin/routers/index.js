const express = require("express");
const router = express.Router();
const scdata = require("../models/Data")
const userdata = require("../models/user")
const {md5} = require("../function/md5")
const jwt = require("jsonwebtoken");

// 密钥
const secret = "grubbyloveyou";

router.get("/", (req, res) => {
    console.log("index");
    res.send("index")
})
// 图片的地址
router.get("/img/*", (req, res) => {
    res.send(__dirname + "/" + req.url)
})
// 注册
router.post("/register",(req,res)=>{  
    let {username,password} = req.body.params
    let jm = md5(password)  // md5加密
    userdata.create({username:username,password:jm,price:0})
    res.json({result:"注册成功",price:0})
})
// 登录
router.post("/login",(req,res)=>{
    console.log(req.body.params);
    let username2 = req.body.params.username
    let password2 = req.body.params.password
    userdata.findOne({username:username2},(err,doc)=>{
        console.log(doc);
        
        if (doc==null) {
            res.json({code:-1,result:"用户不存在"})
        }else{
            if (doc.password === md5(password2)) {
                const payload = {
                    username:username2,
                    password:username2,
                    iat: Math.floor(Date.now() / 1000 )-30
                }
                let token = jwt.sign(payload,secret);
                // console.log(token);
                // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InpoYW5nc2FuIiwicGFzc3dvcmQiOiJ6aGFuZ3NhbiIsImlhdCI6MTU4MjgxMTE1N30.mwZWxmNHhwdTw4Nlp9B5GWj5-7rxVvNN5V8kJYCW4MU
                res.json({result:{token},code:200,
                    img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574436821990&di=092e106718880470999196d2cd896503&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F14%2F20180814170034_QYYjR.jpeg",
                    name:"爱新垣结衣真是太好了",
                    price:doc.price,
                    txt:"登陆成功"
                })
            }else{
                res.json({result:"密码错误",code:0})
            }
        }
    })
})
// 第一次进入向数据库请求剧本数据
router.post("/", (req, res) => {
    scdata.find({}, (err, doc) => {
        res.json(doc)
    })
    // scdata.updateOne({name:"酒大奇迹"},{bgc:["#412C2C","#2C1616"]},(err,doc)=>{
    //     console.log(doc);
    // })
    // scdata.create({
    //     name:"极乐密室",
    //     num:5,
    //     price:78,
    //     difficulty:"烧脑",
    //     type:["民国","盒装"],
    //     img:"http://127.0.0.1:4040/img/501.jpg"
    // })
})
// token
router.use((req,res,next)=>{
    userdata.find({},(err,doc)=>{
        console.log(doc);
        try {
            var tokendata = jwt.verify(req.query.token,secret);
            let passindex = doc.findIndex(value=> value.username == tokendata.username);
            if(passindex != "-1"){
                next(); //跳出路由
            }else{
                res.json({code:201,result:"请求数据失败"})
            }
        } catch(err) {
            res.json({code:201,result:"请求数据失败"})
        }
    })
    
})

router.get("/getdata",(req,res)=>{

    res.json({code:200,result:{
        img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574436821990&di=092e106718880470999196d2cd896503&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F14%2F20180814170034_QYYjR.jpeg",
        name:"爱新垣结衣真是太好了",
        price:0
    }})

})


module.exports = router;