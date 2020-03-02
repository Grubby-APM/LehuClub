<template>
    <div
        :class="{
      header: true,
      posiFixed: $store.state.details.headfixed
    }"
        :style="{backgroundColor:bgc}"
    >
        <span v-show="$store.state.headershow" @click="back" class="left iconfont icon-zuo"></span>
        <span class="title">{{ $store.state.headertitle }}</span>
        <img
            :style="{ top: headtop }"
            ref="headimg"
            v-show="!$store.state.headershow"
            src="../assets/img/logo.png"
            alt
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            headtop: "-80px",
            bgc: "#2a2a2a"
        };
    },
    methods: {
        back() {
            this.$router.go(-1);
        }
    },
    created() {
        // 判断是否需要修改头部背景颜色
        // if (this.$route.path == "/details") {
        //   this.$store.state.details.colorChange = true;
        // } else {
        //   this.$store.state.details.colorChange = false;
        // }

        if (this.$route.path == "/appointment" ||
            this.$route.path == "/details"
        ) {
            if (this.$route.path == "/appointment") {
                this.bgc = "#2a2a2a";
            } else {
                this.bgc = this.$store.state.hcolor2;
            }
            this.$store.state.details.headfixed = true;
        } else {
            this.bgc = "#2a2a2a";
            this.$store.state.details.headfixed = false;
        }
    },
    mounted() {
        let Width = window.innerWidth;
        if (this.$route.path == "/index") {
            if (Width >= 375) {
                this.headtop = "-95px";
            }
            if (Width >= 414) {
                this.headtop = "-108px";
            }
        }
    },
    props: ["xqi"]
};
</script>

<style lang="scss">
.header {
    background-color: #2a2a2a;
    height: 73px;
    line-height: 73px;
    color: rgb(255, 255, 255);
    font-weight: bolder;
    text-align: center;
    width: 100%;
    position: relative;
    overflow: hidden;
    .left {
        position: absolute;
        left: 20px;
        top: 0;
        font-size: 20px;
        cursor: pointer;
    }
    .title {
        font-size: 20px;
    }
    img {
        max-width: 640px;
        width: 100%;
        // top: -80px;
        left: 0px;
        position: fixed;
        z-index: 0;
    }
}
.zx {
    //   background-color: #422d2d;
    position: fixed;
    width: 100%;
}
.posiFixed {
    position: fixed;
    width: 100%;
}
</style>
