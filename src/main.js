import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import routes from "./routes";
import BootstrapVue, { IconsPlugin } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/index.scss";

Vue.config.productionTip = false;

/**
 * Routes
 */
Vue.use(VueRouter);
const router = new VueRouter({
  base: "/",
  mode: "history",
  routes: routes,
});

/**
 * Bootstrap
 */
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
}).$mount("#app");
