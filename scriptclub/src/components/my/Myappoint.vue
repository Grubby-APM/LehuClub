<template>
    <div>
        <div v-for="(item,i) in $store.state.myappoint.myappoint"  
        :key="i"
        class="item clearfix">
            <div class="img">
                <img :src="item.img" alt />
            </div>
            <div class="content">
                <div class="title">{{item.name}}</div>
                <div class="type">
                    <span v-for="(item2,k) in item.type" :key="k">{{item2}}</span>
                </div>
                <div class="time">时间:&nbsp;{{year}}-{{item.moon}}-{{item.day}}</div>
                <div class="difficulty">难度:&nbsp;{{item.difficulty}}</div>
                <div class="shpo">门店:&nbsp;东平乐狐剧本社旗舰店</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            year:new Date().getFullYear()
        }
    }
};
</script>

<style lang="scss" scoped>
.item {
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
    .img {
        border-radius: 5px;
        width: 80px;
        font-size: 0px;
        float: left;
        overflow: hidden;
        img {
            width: 100%;
        }
    }
    .content {
        font-size: 14px;
        box-sizing: border-box;
        padding-left: 10px;
        float: left;
        .title {
            font-size: 18px;
            font-weight: bolder;
            margin: 5px 0px;
        }
        .type {
            span {
                font-size: 12px;
                padding: 0px 5px;
                background-color: #2A2A2A;
                color: #fff;
                border-radius: 5px;
                margin-right: 5px;
            }
        }
    }
}
</style>