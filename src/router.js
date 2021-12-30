// import VueRouter from 'vue-router'
import { createRouter, createWebHashHistory } from "vue-router";

import Tabbar from "views/tabbar/index.vue";
import PageHeader from "components/PageHeader.vue";
import One from "views/tabbar/One.vue";
import Two from "views/tabbar/Two.vue";
import Mine from "views/tabbar/Mine.vue";
import Person from "views/mine/person";

const routes = [
  {
    path: "/app",
    name: "app",
    component: Tabbar,
    redirect: "/app/one",
    children: [
      {
        path: "one",
        name: "one",
        component: () => One,
        meta: { title: "One" },
      },
      {
        path: "two",
        name: "two",
        component: () => Two,
        meta: { title: "Two" },
      },
      {
        path: "mine",
        name: "mine",
        component: () => Mine
      },
    ],
  },
  {
    path: "/person",
    name: "person",
    component: PageHeader,
    children: [
      {
        path: "",
        name: "Person",
        meta: { title: "个人中心" },
        component: Person,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// export router

export default router;
