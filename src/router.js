import { createRouter, createWebHistory } from "vue-router";
import main from "@/pages/main.vue";
import detail from "@/pages/detail.vue";

const routes = 
[
  { path: "/", name: "home", component: main },
  { path: "/contact", name: "contact", component: detail }
];

export default createRouter({
  history: createWebHistory(),
  routes
});