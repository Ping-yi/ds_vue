import Vue from './core/global_vue'
import PageHeader from "./components/PageHeader.vue";
import Router from './router'
import './core/global_use'


Vue.use(Router)
  .component("PageHeader", PageHeader)
  .mount("#app");
  
