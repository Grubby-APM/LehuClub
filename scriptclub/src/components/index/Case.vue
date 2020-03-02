<template>
    <div class="case">
        <div class="bgc"></div>
        <div class="content">
            <router-link to="file" class="item t1">
                <p>
                    <span class="go">去破案</span>
                    <span class="right iconfont icon-zuo"></span>
                </p>
                <span class="tip">点击立即开始一段奇妙征程</span>
                <div class="detective">
                    <img src="../../assets/img/detective.png" alt />
                </div>
            </router-link>
            <div class="item">
                <router-link tag="div" class="tap" to="motorcade">
                    <p>
                        <span class="go">发车啦</span>
                        <span class="right iconfont icon-zuo"></span>
                    </p>
                    <span class="tip">快来加入缺人的车队</span>
                    <span class="catteam iconfont icon-duoren"></span>
                </router-link>
                <router-link tag="div" to="/rank" class="bottom">
                    <p>
                        <span class="go">排行榜单</span>
                        <span class="right iconfont icon-zuo"></span>
                    </p>
                    <span class="tip">快来看看你的排名吧</span>
                    <span class="cup iconfont icon-jiangbei"></span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    }
};
</script>

<style lang="scss" scoped>
.case {
    position: relative;
    height: 234px;
    padding-top: 20px;
    box-sizing: border-box;
    .bgc {
        height: 117px;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        background-color: #2a2a2a;
        z-index: -1;
    }
    .content {
        display: flex;
        width: 90%;
        height: 100%;
        margin: 0 auto;
        .t1 {
            margin-right: 10px;
        }
        .item {
            width: 50%;
            background-color: #fff;
            height: 100%;
            padding: 20px 20px 0 20px;
            p {
                line-height: 24px;
            }
            .go {
                font-weight: bolder;
                font-size: 18px;
            }
            .right {
                font-weight: bolder;
                margin-left: 20px;
                display: inline-block;
                transform: rotate(180deg);
            }
            .tip {
                color: #b0b0b0;
                font-size: 12px;
            }
            .detective {
                text-align: center;
                .D-icon {
                    font-size: 80px;
                }
            }
            .tap {
                position: relative;
                height: 40%;
                margin-bottom: 10px;
                .right {
                    display: inline-block;
                    margin-left: 5px;
                }
            }
            .catteam {
                position: absolute;
                font-size: 50px;
                top: 40px;
                right: -8px;
            }
            .bottom {
                height: 45%;
                position: relative;
                .right {
                    margin-left: 0;
                }
                .cup {
                    position: absolute;
                    font-size: 45px;
                    top: 48px;
                    right: -6px;
                }
            }
        }
    }
}
</style>
