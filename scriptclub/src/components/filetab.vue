<template>
    <div class="filetab">
        <div class="tab">
            <ul class="clearfix">
                <li
                    v-for="(item, i) in List"
                    @click="numsel(i)"
                    :class="{ con: $store.state.fileindex == i }"
                    :key="i"
                >{{ item }}</li>
            </ul>
        </div>
        <!-- <router-view></router-view> -->
        <Play></Play>
        <div v-show="noone" class="noone">
            <span>~暂无任何剧本~</span>
        </div>
    </div>
</template>

<script>
import Play from "@/components/file/play.vue";
export default {
    data() {
        return {
            List: ["全部", "4人", "5人", "6人", "7人", "8人", "9人"],
            index: this.$store.state.fileindex,
            noone: false
        };
    },
    methods: {
        numsel(i) {
            this.$store.state.fileindex = i;
            this.$store.commit('numsel')
        }
    },
    components: {
        Play
    },
    created(){
        this.$store.commit('numsel');
        if (this.$store.state.file.noone){
            this.noone = true
            console.log('this.noone'+this.noone);
        }
    }
};
</script>

<style lang="scss" scoped>
.van-tabs__nav {
    background-color: #2a2a2a;
}
.filetab {
    width: 100%;
    margin-top: 73px;
    .tab {
        background-color: #2a2a2a;
        overflow: hidden;
        overflow-x: scroll;
        padding-bottom: 5px;
        width: 100%;
        position: fixed;
        top: 73px;
        z-index: 10000;
    }
    ul {
        text-align: center;
        width: 350px;
        height: 30px;
        line-height: 30px;
        li {
            width: 50px;
            float: left;
            color: #fff;
        }
        .con {
            color: #128eb0;
        }
    }
    .noone{
        margin-top: 130px;
        text-align: center;
    }
}
</style>
