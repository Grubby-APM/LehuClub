<template>
    <div class="index">
        <Header></Header>
        <Banner></Banner>
        <Case></Case>
        <van-notice-bar text="欢迎来到乐狐剧本社!谢绝自带酒水,酒水客服:13018455671" />
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Banner from "@/components/index/Banner.vue";
import Case from "@/components/index/Case.vue";
export default {
    data() {
        return {
            a: 20
        };
    },
    created() {
        this.$store.state.headershow = false;
    },
    beforeMount() {
        // console.log(window);
        this.$store.state.winWid = window.innerWidth;
    },
    mounted() {},
    watch: {
        // "$store.state.winWid": function(newval) {
        //     console.log(newval);
        // }
    },
    components: {
        Header,
        Banner,
        Case
    }
};
</script>

<style lang="scss">
.index {
    width: 100%;
}
</style>
