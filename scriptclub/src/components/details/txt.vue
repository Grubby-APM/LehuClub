<template>
  <div class="txt">
    <p>简介</p>
    {{$store.state.selectjb[$route.query.i].txt}}
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.txt {
  color: #fff;
  float: left;
//   background-color: #523f3f;
  padding: 0 10px;
  p {
    margin: 10px 0px;
  }
}
</style>
