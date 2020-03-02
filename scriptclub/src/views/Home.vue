<template>
  <div>
    <button @click="datapost">请求数据</button>

    <van-button type="warning">警告按钮</van-button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";
export default {
  name: "Home",
  methods: {
    datapost() {
      axios
        .post("http://127.0.0.1:3000/", {
          firstName: "Fred",
          lastName: "Flintstone"
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
