import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import "./assets/main.scss";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.prototype.$eventHub = new Vue({}); // Global event bus

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
