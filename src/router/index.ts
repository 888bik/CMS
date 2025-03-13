import { createRouter, createWebHashHistory } from "vue-router";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/login",
      component: () => import("../views/login/Login.vue"),
    },
    {
      path: "/home",
      component: () => import("../views/home/Home.vue"),
    },
  ],
});
