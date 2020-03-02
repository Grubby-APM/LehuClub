<template>
    <div class="registerpage">
        <span @click="back" class="left iconfont icon-zuo"></span>
        <div class="logo">
            <img src="../../assets/img/logo.png" alt />
        </div>
        <div class="form">
            <p>注册</p>
            <div v-show="true" :style="{color:fontC}" class="tip">{{text}}</div>
            <input @input="inpblur" v-model="username" type="text" placeholder="请输入用户名" name="username"/>
            <input @input="inpblur" v-model="password" type="password" placeholder="请输入密码" name="password" />
            <input @input="inpblur" v-model="password2" type="password" placeholder="确认密码" name="password2" />
            <button @click="register" :style="{background:btnBgc}" class="registerBtn">注册</button>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { Toast } from 'mint-ui';
export default {
    data() {
        return {
            username:null,
            password:null,
            password2:null,
            text:'',
            istrue:false,
            fontC:"red",
            btnBgc:"#b0b0b0",
        }
    },
    methods: {
        back() {
            this.$router.go(-1);
        },
        inpblur(){
            let reg = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/  // 账号
            // let reg2 =/^[a-zA-Z]\w{5,17}$/  //密码
            if (this.username!=null || this.password!=null || this.password2!=null) {
                if (reg.test(this.username)) {
                    if (this.password === this.password2 && this.password!=null && this.password2!=null) {
                        this.text = "正确"
                        this.istrue = true
                        this.fontC = "green"
                        this.btnBgc = "#000"
                    }else{
                        this.text = "密码不一致"
                        this.istrue = false
                        this.fontC = "red"
                        this.btnBgc = "#b0b0b0"
                    }
                }else{
                    this.text = "字母开头,允许5-16字节"
                        this.istrue = false
                        this.fontC = "red"
                        this.btnBgc = "#b0b0b0"
                }
            }else{
                this.text = "不能为空";
                this.istrue = false
                this.fontC = "red"
                this.btnBgc = "#b0b0b0"
            }           
        },
        register(){
            if (this.istrue) {
                Toast({
                    message: '注册成功',
                    duration: 1000
                });
                axios.post("http://127.0.0.1:4040/register",{
                    params:{
                        username:this.username,
                        password:this.password
                    }
                }).then((res)=>{
                    console.log(res);
                    this.$router.push('/login')
                }).catch((err)=>{
                    console.log(err);
                })
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.registerpage {
    background-color: #2a2a2a;
    height: 100%;
    position: fixed;
    z-index: -1;
    .left {
        font-size: 20px;
        color: #fff;
        position: absolute;
        left: 20px;
        top: 20px;
    }
    .logo {
        img {
            width: 100%;
            height: 250px;
        }
    }
    .form {
        .tip{
            position: absolute;
            left: 0;
            right: 0;
            text-align: center;
            margin: -30px auto;
        }
        p {
            margin-bottom: 30px;
            color: #fff;
        }
        padding: 5px 50px;
        text-align: center;
        span {
            color: #fff;
        }
        input {
            width: 200px;
            height: 20px;
            line-height: 20px;
            font-size: 12px;
            text-indent: 2em;
            margin-bottom: 10px;
            border-radius: 15px;
            margin-left: 15px;
        }
        .registerBtn {
            width: 204px;
            text-align: center;
            border: 0;
            height: 30px;
            line-height: 30px;
            margin-left: 14px;
            border-radius: 15px;
            background-color: #b0b0b0;
            color: #fff;
            transition: all .5s;
        }
    }
}
</style>
