<template>
    <div class="serve">
        <ul>
            <router-link to="/myappoint" tag="li">
                <span class="ic iconfont icon-yuyue1"></span>
                我的预约
                <span class="right iconfont icon-zuo"></span>
            </router-link>
            <router-link to="/motorcade" tag="li">
                <span class="ic iconfont icon-huo"></span>
                普通组局
                <span class="right iconfont icon-zuo"></span>
            </router-link>
            <router-link to="/gift" tag="li">
                <span class="ic iconfont icon-youhuiquanquanmian"></span>
                我的优惠券
                <span class="right iconfont icon-zuo"></span>
            </router-link>
            <li>
                <span class="ic iconfont icon-duoren"></span>
                联系我们
                <span class="right iconfont icon-zuo"></span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.serve {
    padding: 20px 40px;
    ul {
        li {
            margin-top: 12px;
            line-height: 28px;
            position: relative;
            text-indent: 2em;
        }
        .ic {
            font-size: 26px;
            color: #6b400d;
            position: absolute;
            left: -34px;
        }
        .right {
            font-weight: bolder;
            margin-left: 20px;
            display: inline-block;
            transform: rotate(180deg);
            color: #7e7e7e;
            float: right;
        }
    }
}
</style>
