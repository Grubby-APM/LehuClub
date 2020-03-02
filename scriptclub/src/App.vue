<template>
    <div id="app">
        <router-view></router-view>
        <FootTab v-show="istrue"></FootTab>
    </div>
</template>

<script>
import axios from "axios";
// 引入字体图标
import "./assets/font/iconfont.css";
import "./assets/base.css";
import FootTab from "@/components/FootTab.vue";
export default {
    data() {
        return {
            istrue: true
        };
    },
    watch: {
        "$route.path": function(newval) {
            // 判断底部栏是否隐藏
            if (
                newval == "/login" ||
                newval == "/register" ||
                newval == "/file" ||
                newval == "/file/" ||
                newval == "/details" ||
                newval == "/appointment" ||
                newval == "/motorcade" ||
                newval == "/myappoint" ||
                newval == "/gift" ||
                newval == "/rank"
            ) {
                this.istrue = false;
            } else {
                this.istrue = true;
            }
            // 判断头部返回是否隐藏 与header标题
            if (newval == "/index") {
                this.$store.state.headershow = false;
                this.$store.state.headertitle = "乐狐剧本社";
            } else {
                this.$store.state.headershow = true;
                if (newval == "/file") {
                    this.$store.state.headertitle = "案发卷宗";
                }
                if (newval == "/appointment") {
                    this.$store.state.headertitle = "发起预约";
                }
                if (newval == "/motorcade") {
                    this.$store.state.headertitle = "剧情推理小分队";
                }
                if (newval == "/myappoint") {
                    this.$store.state.headertitle = "我的预约";
                }
                if (newval == "/gift") {
                    this.$store.state.headertitle = "我的优惠券";
                }
            }
        }
    },
    components: {
        FootTab
    },
    created() {
        let _this = this
        axios
            .post("/")
            .then(function(response) {
                // console.log(response);
                _this.$store.state.jbdata = response.data
            })
            .catch(function() {
                console.log("请求失败");
                _this.$store.state.file.noone = true
            });
    }
};
</script>

<style lang="scss">
#app {
    max-width: 640px;
    min-width: 320px;
    width: 100%;
    height: 100%;
    // margin-bottom: 60px;
    overflow: hidden;
}
</style>
