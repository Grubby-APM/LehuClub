import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import details from "./modules/details";
import appoint from "./modules/appoint";
import file from "./modules/file";
import myappoint from "./modules/myappoint";
export default new Vuex.Store({
  state: {
    pathName: null, // 记录路由名字
    isshow: false, // 底部栏显示状态
    headershow: true,
    headertitle: null,
    winWid: null,
    headertop: -95,
    jbdata: null, //存放剧本的总数据
    selectjb: [], //存放筛选过的剧本
    fleet: [], //  车队[未使用]
    hindex: null, // 记录详情页头部颜色的索引  记录所预约该剧本的索引值(筛选过的)
    hcolor2: null,
    fileindex: 0, // 记录筛选的人数
    loginistrue: true //记录是否登陆过
  },
  mutations: {},
  actions: {},
  modules: {
    details,
    appoint,
    file,
    myappoint
  }
});
