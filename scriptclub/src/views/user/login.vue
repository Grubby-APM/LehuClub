<template>
    <div class="loginpage">
        <span @click="back" class="left iconfont icon-zuo"></span>
        <div class="logo">
            <img src="../../assets/img/logo.png" alt />
        </div>
        <div v-show="true" class="tip">{{text}}</div>
        <div class="form">
            <input @input="inp" v-model="username" type="text" placeholder="请输入用户名  zhangsan" name="username" />
            <input
                @input="inp"
                v-model="password"
                type="password"
                placeholder="请输入密码  123123"
                name="password"
            />
            <button :style="{background:btnBgc}" @click="login" class="loginBtn">登录</button>
            <router-link to="/register" class="register">注册</router-link>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { Toast } from 'mint-ui';
export default {
    data() {
        return {
            username: null,
            password: null,
            btnBgc: "#b0b0b0",
            text: "",
            istrue: false
        };
    },
    methods: {
        inp() {
            let reg = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/; // 账号
            if (this.username != null || this.password != null) {
                if (reg.test(this.username) && this.password != null) {
                    this.text = "登录成功";
                    this.istrue = true;
                    this.text = "";
                    this.btnBgc = "#000"
                } else {
                    this.istrue = false;
                    this.btnBgc = "#b0b0b0"
                }
            } else {
                this.text = "账号密码不能为空";
                this.istrue = false;
                this.btnBgc = "#b0b0b0"
            }
        },
        login() {
            if (this.istrue) {
                axios.post("/login",{
                    params:{
                        username:this.username,
                        password:this.password
                    }
                }).then((res)=>{
                    console.log(res);
                    let token = res.data.result.token
                    localStorage.login = token;
                    if (res.data.code === 200) {
                        Toast({
                            message: '登录成功',
                            duration: 1000
                        });
                        this.$router.push('/my')
                    }else{
                        if (res.data.code === -1) {
                            this.text = res.data.result;
                        }else{this.text = "密码或者账户错误";}
                    }
                }).catch(()=>{
                })
            }
        },
        back() {
            this.$router.push("/");
        }
    }
};
</script>

<style lang="scss" scoped>
.loginpage {
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
    .tip {
        position: absolute;
        left: 0;
        right: 0;
        text-align: center;
        margin: 0 auto;
        color: red;
    }
    .form {
        padding: 5px 50px;
        margin-top: 25px;
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
        .loginBtn {
            width: 204px;
            text-align: center;
            border: 0;
            height: 30px;
            line-height: 30px;
            margin-left: 14px;
            border-radius: 15px;
            background-color: #b0b0b0;
            color: #fff;
        }
        .register {
            color: #fff;
            margin-top: 10px;
            float: right;
        }
    }
}
</style>
