<template>
    <div class="Dinfo clearfix">
        <div class="img">
            <img :src="$store.state.selectjb[$route.query.i].img" alt />
        </div>
        <div class="info">
            <div class="title mb">
                {{$store.state.selectjb[$route.query.i].name}}&nbsp;
                ({{$store.state.selectjb[$route.query.i].difficulty}})
            </div>
            <div class="num mb">人数:&nbsp;{{$store.state.selectjb[$route.query.i].num}}人</div>
            <div class="price mb">价格:&nbsp;{{$store.state.selectjb[$route.query.i].price}}/位</div>
            <div class="type mb">
                类型:&nbsp;
                <span
                    v-for="(item,l) in $store.state.selectjb[$route.query.i].type"
                    :key="l"
                    :style="{background:bgc}"
                >{{item}}</span>
                <!-- <span>现代</span>
                <span>民国</span>-->
            </div>
            <div class="orplay clearfix">
                <div :style="{background:bgc}" class="wantplay">
                    <span  class="iconfont icon-shoucang"></span>
                    想玩
                </div>
                <div :style="{background:bgc}" class="played">
                    <span  class="iconfont icon-shoucang"></span>
                    玩过
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            bgc: this.$store.state.selectjb[this.$store.state.hindex].bgc[1]
        };
    }
};
</script>

<style lang="scss" scoped>
.Dinfo {
    padding: 20px 10px 10px 10px;
    padding-top: 90px;
    .img {
        float: left;
        width: 136px;
        img {
            width: 100%;
        }
    }
    .info {
        float: left;
        margin-left: 10px;
        color: #fff;
        .type {
            width: 153px;
            span {
                font-size: 14px;
                background-color: #301a1a;
                padding: 2px 5px;
                display: inline-block;
                margin-bottom: 9px;
                margin-right: 1px;
            }
        }
        .orplay {
            width: 100%;
            .wantplay {
                padding: 5px 10px;
                float: left;
                margin-right: 8px;
            }
            .played {
                padding: 5px 10px;
                float: right;
            }
        }
    }
}
.mb {
    margin-bottom: 10px;
}
</style>
