<template>
  <div class="footertab">
    <van-tabbar v-model="active" bind:change="onChange">
      <van-tabbar-item to="/">
        <span class="ibtn iconfont icon-xianchangpancun"></span>
        <p>案发现场</p>
      </van-tabbar-item>
      <van-tabbar-item to="my">
        <span class="ibtn iconfont icon-geren"></span>
        <p>个人档案室</p>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  }
  // methods: {
  //     onChange(event) {
  //         // event.detail 的值为当前选中项的索引
  //         this.setData({ active: event.detail });
  //     }
  // },
};
</script>

<style lang="scss">
.van-tabbar {
  height: 60px;
  text-align: center;
}
.van-tabbar-item {
  color: #000;
}
.van-tabbar-item--active {
  color: #6b400d;
}
.footertab {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  .ibtn {
    font-size: 40px;
  }
}
</style>
