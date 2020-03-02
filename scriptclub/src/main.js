import Vue from "vue";

// 引入Mint-ui框架
import Mint from "mint-ui";
Vue.use(Mint);
import "mint-ui/lib/style.css";

//引入Vant ui
import Vant from "vant";
import "vant/lib/index.css";
Vue.use(Vant);

//引入swiper 框架
import "swiper/dist/css/swiper.css";

import App from "./App.vue";
import router from "./router";
import store from "./store";
// 数据请求
import axios from "axios";
//统一配置全局路径
axios.defaults.baseURL = "http://127.0.0.1:4040"
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

// axios.defaults.baseURL = '/api'
// Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
