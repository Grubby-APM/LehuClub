<template>
    <div>
        <Header></Header>
        <div class="contnt">
            <info></info>
            <day></day>
            <room></room>
            <dz></dz>
        </div>
        <div @click="tell" class="btn">立即预约</div>
        <mt-popup class="tell" v-model="popupVisible" position="right">
            <input type="text" placeholder="请填写预约手机号">
            <mt-button @click="affirm" class="affirm" type="primary">确认</mt-button>
            <mt-button @click="close" class="close" type="danger">取消</mt-button>
        </mt-popup>
    </div>
</template>

<script>
import {Indicator} from 'mint-ui';
import { Toast } from 'mint-ui';
import Header from "@/components/Header";
import info from "@/components/appointment/info";
import day from "@/components/appointment/day";
import room from "@/components/appointment/room";
import dz from "@/components/dz";
export default {
    data() {
        return {
            popupVisible:false,
            newobj:{}
        };
    },
    methods:{
        tell(){
            // 判单是否登录
            if (!localStorage.login || localStorage.login == "undefined") {
                this.$router.push("/login");
            }else{
                // 判断是否预定了时间
                let {day,hour,moon,num} = this.$store.state.appoint.selectDay
                if (day==undefined || hour==undefined || moon==undefined || num==undefined) {
                    Toast({
                        message: '请选择预定时间',
                        duration: 2000
                    });
                }else{
                    this.popupVisible = true
                    this.$store.state.appoint.selectDay.type = this.$store.state.selectjb[this.$route.query.i].type
                    this.$store.state.appoint.selectDay.name = this.$store.state.selectjb[this.$route.query.i].name
                    this.$store.state.appoint.selectDay.difficulty = this.$store.state.selectjb[this.$route.query.i].difficulty
                    this.$store.state.appoint.selectDay.img = this.$store.state.selectjb[this.$route.query.i].img
                }
            }
        },
        close(){
            this.popupVisible = false
        },
        affirm(){
            // 将预约的信息丢人新数组
            this.$store.state.myappoint.myappoint.push(this.$store.state.appoint.selectDay)
            this.$store.state.appoint.selectDay = {}  // 清空预约的数据


            Indicator.open('Loading...');
            this.popupVisible = false
            setTimeout(()=>{
                Indicator.close()
                Toast({
                    message: '预约成功',
                    duration: 5000
                });
            },1500)
            setTimeout(()=>{
                this.$router.push("/")
            },1500)
        },
    },
    components: {
        Header,
        info,
        day,
        room,
        dz
    },
    created(){
    }
};
</script>

<style lang="scss" scoped>
.contnt {
    padding: 86px 10px;
}
.btn {
    width: 100%;
    padding: 20px 0;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #d8a661;
    text-align: center;
    color: #fff;
    font-weight: bolder;
}
.tell{
    width: 100%;
    height: 100%;
    padding: 200px 20px;
    box-sizing: border-box;
    input{
        width: 80%;
        border: 1px solid goldenrod;
        border-radius: 15px;
        text-indent: 1em;
        margin-bottom: 10px;
    }
    .affirm{
        font-size: 16px;
    }
    .close{
        font-size: 16px;
        float: right;
        margin-right: 52px;
    }
}
</style>
