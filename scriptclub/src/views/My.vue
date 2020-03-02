<template>
  <div>
    <userinfo></userinfo>
    <serve></serve>
  </div>
</template>

<script>
import userinfo from "@/components/my/userinfo.vue";
import serve from "@/components/my/serve.vue";
export default {
  data() {
    return {};
  },
  components: {
    userinfo,
    serve
  },
  created(){
  }
};
</script>

<style lang="scss" scoped></style>
