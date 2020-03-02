<template>
    <div class="detailsPage clearfix" >
        <Header></Header>
        <div class="box" :style="{background:bgc2}">
            <Dinfo></Dinfo>
            <PublicPraise></PublicPraise>
            <txt></txt>
            <router-link
                :style="{backgroundColor:$store.state.hcolor2}"
                :to="{path:'appointment',query:this.$route.query}"
                class="btn"
                tag="div"
            >预约该剧本</router-link>
        </div>
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Dinfo from "@/components/details/Dinfo";
import PublicPraise from "@/components/details/PublicPraise";
import txt from "@/components/details/txt";
export default {
    data() {
        return {
            bgc: null
        };
    },
    created() {
        if (this.$route.path == "/details") {
            this.$store.state.headertitle = this.$route.query.name;
            this.$store.state.hindex = this.$route.query.i;
            if (this.$store.state.hindex != null) {
                // 大背景 this.bgc
                this.bgc = this.$store.state.selectjb[
                    this.$store.state.hindex
                ].bgc[0];
                this.bgc2 =
                    "linear-gradient(#fff -20%," + this.bgc + " " + "15%)";
                // 深色的背景 this.$store.state.hcolor2
                this.$store.state.hcolor2 = this.$store.state.selectjb[
                    this.$store.state.hindex
                ].bgc[1];
            } else {
                this.bgc = "#2a2a2a";
            }
        }
    },
    components: {
        Header,
        Dinfo,
        PublicPraise,
        txt
    }
};
</script>

<style lang="scss" scoped>
.detailsPage {
    // background: linear-gradient(#fff -30%, #523f3f 15%);
    .box{
        position: fixed;
        // margin-top: 73px;
        height:100%;
        z-index: -1;
        overflow-y: scroll;
    }
}
.btn {
    width: 100%;
    text-align: center;
    padding: 5px 0px;
    background-color: #2f1919;
    color: #fff;
    float: left;
    margin: 20px 0px;
}
</style>
