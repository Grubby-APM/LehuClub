<template>
    <div class="file clearfix">
        <div class="header">
            <span v-show="$store.state.headershow" @click="back" class="left iconfont icon-zuo"></span>
            <span class="title">{{ $store.state.headertitle }}</span>
            <img v-show="!$store.state.headershow" src="../assets/img/logo.png" alt />
        </div>
        <!-- <Header></Header> -->
        <filetab></filetab>
    </div>
</template>

<script>
// import Header from '@/components/Header.vue';
import filetab from "@/components/filetab.vue";
export default {
    methods: {
        data() {
            return {};
        },
        back() {
            this.$router.go(-1);
        }
    },
    components: {
        // Header,
        filetab
    }
};
</script>

<style lang="scss" scoped>
.file {
    width: 100%;
    // position: fixed;
    height: 100%;
    top: 0px;
}
.header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10000;
}
</style>
