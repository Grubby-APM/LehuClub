<template>
    <div class="carteam">
        <div @click="join(i)"
        v-for="(item,i) in $store.state.myappoint.myappoint"  
        :key="i"
        v-show="!istrue"
        class="item clearfix">
            <div class="img">
                <img :src="item.img" alt="">
            </div>
            <div class="content">
                <div class="title">《{{item.name}}》</div>
                <div class="type">
                    <span v-for="(item2,k) in item.type" :key="k">{{item2}}</span>
                </div>
                <div class="time">时间:&nbsp;{{year}}-{{item.moon}}-{{item.day}}</div>
                <div class="difficulty">难度:&nbsp;{{item.difficulty}}</div>
                <div class="num">车队人数:&nbsp;{{item.num}}&nbsp;人</div>
                <div class="shpo">门店:&nbsp;东平乐狐剧本社旗舰店</div>
            </div>
        </div>
        <mt-popup class="tell" v-model="popupVisible" position="right">
            <input type="text" placeholder="请填写联系手机号">
            <mt-button @click="affirm" class="affirm" type="primary">确认</mt-button>
            <mt-button @click="close" class="close" type="danger">取消</mt-button>
        </mt-popup>
        <div v-show="istrue" class="tip">暂无车队,赶紧去选剧本发车吧!</div>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui';
    export default {
        data () {
            return {
                year:new Date().getFullYear(),
                popupVisible:false,
                istrue:true  // 是否有车队
            }
        },
        methods:{
            join(i){
                let clickjb = null
                this.$store.state.selectjb.forEach(item => {
                    if (item.name == this.$store.state.myappoint.myappoint[i].name) {
                        clickjb = item
                    }
                });
                if (this.$store.state.myappoint.myappoint[i].num < clickjb.num) {
                    this.popupVisible = true
                }
            },
            close(){
                this.popupVisible = false
            },
            affirm(){
                Toast({
                    message: '预约成功',
                    duration: 5000
                });
                this.popupVisible = false
            }
        },
        created(){
            // 判断是否有车队
            this.$store.state.myappoint.myappoint.length==0 ? this.istrue = true : this.istrue = false
        }
    }
</script>

<style lang="scss" scoped>
    .carteam{
        padding: 10px;
        box-sizing: border-box;
        .item{
            background-color: #2A2A2A;
            padding: 10px;
            border-radius: 5px;
            margin-bottom: 10px;
            .img{
                width: 80px;
                float: left;
                font-size: 0px;
                img{
                    width: 100%;
                }
            }
            .content{
                font-size: 14px;
                box-sizing: border-box;
                padding-left: 10px;
                color: #FFF;
                float: left;
                .title{
                    font-size: 18px;
                    margin: 5px 0px;
                }
                .type{
                    span{
                        font-size: 12px;
                        padding: 0px 5px;
                        background-color: #fff;
                        color: #2A2A2A;
                        border-radius: 5px;
                        margin-right: 5px;
                    }
                }
            }
        }
        .tell{
           height: 100%;
           width: 70%;
           padding-left: 10px;
           input{
               border-radius: 10px;
               border: 1px solid gray;
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
        .tip{
            text-align: center;
            font-size: 20px;
            font-weight: bolder;
        }
    }
</style>