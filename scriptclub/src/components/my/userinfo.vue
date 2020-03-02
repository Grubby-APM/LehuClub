<template>
    <div class="userinfo">
        <div class="user-header">
            <div class="user-img">
                <img :src="info.img" alt="">
            </div>
            <div class="userId">
                <!-- <div class="login" v-show="loginistrue">
                    <router-link to="/login">点我登录</router-link>
                </div> -->
                <p>{{info.name}}</p>
            </div>
            <div @click="Signout" class="Signout">退出登录</div>
        </div>
        <div class="user-bottom">
            <div class="item">
                <p>0</p>
                <p>剧本积分</p>
            </div>
            <div class="item">
                <p>0.00</p>
                <p>余额</p>
            </div>
            <div class="item">
                <img src="../../assets/img/ewm.png" alt />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            info:{},
            loginistrue:true,
        }
    },
    created() {
        if (!localStorage.login || localStorage.login == "undefined") {
            this.$router.push("/login");
        }else{
            this.$axios.get("/getdata",{
                params:{
                    token:localStorage.login
                }
            }).then((req) => {
                this.info = req.data.result
                this.$store.state.loginistrue = false
                this.loginistrue = this.$store.state.loginistrue
            });
        }
    },
    methods:{
        Signout(){
            localStorage.removeItem('login');
            this.$router.push("/login");
        }
    }
};
</script>

<style lang="scss" scoped>
.userinfo {
    height: 252px;
    background: url("../../assets/img/loginbg.jpg") no-repeat center center;
    .user-header {
        height: 76px;
        padding: 40px 30px;
        display: flex;
        position: relative;
        .user-img {
            width: 70px;
            height: 70px;
            background-color: #fff;
            border-radius: 50%;
            overflow: hidden;
            img{
                width: 100%;
            }
        }
        .userId {
            margin-left: 20px;
            .login {
                width: 140px;
                height: 40px;
                background-color: #fff;
                border-radius: 20px;
                text-align: center;
                line-height: 40px;
            }
            p {
                width: 80%;
                color: #fff;
                font-size: 20px;
                font-weight: bolder;
                margin-top: 10px;
            }
        }
        .Signout{
            position: absolute;
            right: 30px;
            bottom: 20px;
            color:violet;
        }
    }
    .user-bottom {
        display: flex;
        text-align: center;
        .item {
            flex: 1;
            p {
                margin-top: 5px;
                color: #fff;
                font-weight: bolder;
            }
            img {
                width: 65px;
            }
        }
    }
}
</style>
