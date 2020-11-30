import { createRouter, createWebHashHistory, RouteRecordRaw, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/:id",
    name: "detail",
    component: () => import("@/views/Detail.vue")
  },
  {
    path: "/",
    name: "index",
    component: () => import("@/views/Index.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import("../views/About.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
