// cnpm i express ejs -S
const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const session = require("express-session");
const scdata = require("./models/Data");

const ejs = require('ejs');
app.engine('html', ejs.__express);  //设置html引擎
app.set('view engine', 'html');  //设置视图引擎
// 引入静态文件
app.use(express.static("./public"));

app.all("*", function (req, res, next) {
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin", "*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers", "content-type");
    //跨域允许的请求方式 
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == 'options')
        res.send(200);  //让options尝试请求快速结束
    else
        next();
})

// post配置
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }))
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// session配置
app.use(session({
    secret:"iloveyou",//验证
    resave:false,
    saveUninitialized:false
}))

app.use(express.static("./dist"));    //前后台开发方式

console.log(__dirname);  ///路径
console.log(__filename); // 包括文件名字
app.use("/",require("./routers/index"))
// app.post('/', (req, res) => {
//     scdata.find({}, (err, doc) => {
//         console.log(doc);
//         res.json(doc)
//     })
// })


app.listen(4040, '127.0.0.1', () => {
    console.log('请访问:http://127.0.0.1:4040');
})