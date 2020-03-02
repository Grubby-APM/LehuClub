import Vue from "vue";
import VueRouter from "vue-router";
import index from "../views/index.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "index" },
  { path: "/index", component: index },
  { path: "/my", name: "my", component: () => import("../views/My.vue") },
  { path: "/login", component: () => import("../views/user/login.vue") },
  { path: "/register", component: () => import("../views/user/register.vue") },
  { path: "/file", component: () => import("../views/file.vue") },
  { path: "/details", component: () => import("../views/details.vue") },
  { path: "/appointment", component: () => import("../views/appointment.vue") },
  { path: "/motorcade", component: () => import("../views/motorcade.vue") },
  { path: "/myappoint", component: () => import("../views/My/Myappoint") },
  { path: "/gift", component: () => import("../views/My/gift") },
  { path: "/rank", component: () => import("../views/rank") }
];

const router = new VueRouter({
  //   mode: "history",
  //跳转路由默认滚动条在顶部
  scrollBehavior(to, from, saveTop) {
    if (saveTop) {
      return saveTop;
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes
});

export default router;
