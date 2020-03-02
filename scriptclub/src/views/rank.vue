<template>
    <div class="rank">
        <Head></Head>
        <div class="div">暂无内容</div>
    </div>
</template>

<script>
    import Head from "@/components/Header"
    export default {
        components:{
            Head
        }
    }
</script>

<style lang="scss" scoped>
    .rank{
        text-align: center;
        position: relative;
        .div{
            margin: 100px auto;
            font-size: 28px;
            font-weight: bolder;
        }
    }
</style>