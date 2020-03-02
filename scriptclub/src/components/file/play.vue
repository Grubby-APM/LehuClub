<template>
    <div class="play">
        <div class="hui"></div>
        <div v-for="(item,i) in $store.state.selectjb" :key="i" class="item">
            <div class="bgc" :style="{background:'url('+item.img+')'}"></div>
            <div class="difficulty">
                难度:&nbsp;
                <span>{{item.difficulty}}</span>
            </div>
            <router-link :to="{path:'details',query:{name:item.name,i:i}}" class="info" tag="div">
                <div class="content">
                    <div>{{item.num}}人</div>
                    <div v-for="(item2,k) in item.type" :key="k" class="age">{{item2}}</div>
                </div>
                <img class="tuce" src="../../assets/img/tuce.jpg" alt />
                <img class="jbimp" :src="item.img" alt />
            </router-link>
            <!-- <div to="details" class="info">
            </div>-->
            <div class="title">{{item.name}}</div>
            <div class="price">
                价格:&nbsp;
                <span>{{item.price}}</span>/位
            </div>
            <div class="yuyue">预约</div>
        </div>
        <div v-show="$store.state.selectjb.length == 0" class="noscript">~门店尚未添加任何剧本~</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            redcol: "red",
            bgc:null
        };
    },
    methods: {
        add() {
            console.log("AAA");
        }
    }
};
</script>

<style lang="scss" scoped>
.play {
    padding-top: 30px;
    background-color: #6d6d6d;
    width: 100%;
    height: 100%;
    position: relative;
    overflow-y: auto;
    .hui{
        background-color: #6d6d6d;
        position: fixed;
        height: 100%;
        width: 100%;
        z-index: -1;
    }
    .item {
        margin: 10px 50px;
        padding: 15px 10px;
        border-radius: 10px;
        overflow: hidden;
        color: #fff;
        position: relative;
        z-index: 1000;
        .bgc {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: -1;
            top: 0;
            left: 0;
            //   background: url("../../assets/img/0401.jpg") no-repeat center center;
            background-size: cover;
            -webkit-filter: blur(15px);
            -moz-filter: blur(15px);
            -o-filter: blur(15px);
            -ms-filter: blur(15px);
            filter: blur(15px);
        }
        .difficulty {
            margin-left: 5px;
        }
        .info {
            width: 200px;
            margin: 0 auto;
            display: flex;
            margin-top: 10px;
            .content {
                padding: 10px 10px;
                text-align: center;
                background-color: #6c6b6f;
                border-top-left-radius: 10px;
                border-bottom-left-radius: 10px;
                color: #fff;
                div {
                    margin-bottom: 10px;
                }
            }
        }
        .title {
            font-size: 20px;
            text-align: center;
            margin: 10px 0px;
        }
        .yuyue {
            font-size: 14px;
            position: absolute;
            right: 20px;
            bottom: 10px;
            padding: 5px 10px;
            border-radius: 5px;
            background-color: #636363;
            text-align: center;
        }
    }
    .noscript{
        color: #fff;
        font-size: 14px;
        text-align: center;
        margin-top: 40px;
    }
}
</style>
