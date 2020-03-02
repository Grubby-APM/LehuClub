<template>
  <div :style="{background:bgc}" class="public-praise">
    <div class="kbnum clearfix">
      <span class="ikb iconfont icon-shoucang"></span>&nbsp;实时口碑
      <div class="palyor">
        <span>7&nbsp;人想玩</span>
        <span>10&nbsp;人玩过</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            bgc: this.$store.state.selectjb[this.$store.state.hindex].bgc[1]
        }
    },
};
</script>

<style lang="scss" scoped>
.public-praise {
//   background-color: #2c1616;
  width: 100%;
  float: left;
  padding: 10px 20px;
  box-sizing: border-box;
  .kbnum {
    font-size: 14px;
    line-height: 22px;
    color: #fff;
    font-weight: bolder;
    .ikb {
      color: #e1a73b;
      margin-right: 5px;
    }
    .palyor {
      font-weight: 100;
      float: right;
      span {
        margin-right: 10px;
      }
    }
  }
}
</style>
