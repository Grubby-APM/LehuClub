<template>
  <div class="info clearfix">
    <div class="img">
      <img :src="$store.state.selectjb[i].img" alt="" />
    </div>
    <div class="info-details">
      <div class="title">{{$store.state.selectjb[i].name}}</div>
      <div class="num">{{$store.state.selectjb[i].num}}人本</div>
      <div class="price">价格:&nbsp;{{$store.state.selectjb[i].price}}元/位</div>
      <div class="difficulty">难度:&nbsp;{{$store.state.selectjb[i].difficulty}}</div>
      <!-- <div class="day">20月17日</div> -->
    </div>
  </div>
</template>

<script>
export default {
    created(){
        this.i = this.$route.query.i
    }
};
</script>

<style lang="scss" scoped>
.info {
  .img {
    float: left;
    img {
    }
  }
  .info-details {
    margin-left: 10px;
    float: left;
    div {
      font-weight: bolder;
      margin: 15px 0px;
    }
  }
}
</style>
