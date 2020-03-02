<template>
    <div>
        <Header></Header>
        <van-tabs class="tab" v-model="active " bind:change="onChange">
            <van-tab title="未使用">
                <div class="none">
                    <img src="../../assets/img/gift.png" alt="">
                    <span>哎呀,什么也没有</span>
                </div>
            </van-tab>
            <van-tab title="已使用">
                <div class="none">
                    <img src="../../assets/img/gift.png" alt="">
                    <span>哎呀,什么也没有</span>
                </div>
            </van-tab>
            <van-tab title="已过期">
                <div class="none">
                    <img src="../../assets/img/gift.png" alt="">
                    <span>哎呀,什么也没有</span>
                </div>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import Header from "@/components/Header";
    export default {
        data () {
            return {
                active:0
            }
        },
        components:{
            Header
        }
    }
</script>

<style lang="scss" scoped>
    .tab{
        width: 100%;
        .none{
            position: fixed;
            width: 100%;
            height: 100%;
            text-align: center;
            line-height: 400px;
            img{
                position: absolute;
                top: 0;
                bottom: 0px;
                left: 0;
                right: 0;
                margin: auto;
                width: 30%;
            }
        }
    }
</style>