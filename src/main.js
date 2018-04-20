//Core
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

//Componentes e diretivas extras do Bootstrap
import { Collapse } from 'bootstrap-vue/es/components';
Vue.use(Collapse);
import { Navbar } from 'bootstrap-vue/es/components';
Vue.use(Navbar);
import { Breadcrumb } from 'bootstrap-vue/es/components';
Vue.use(Breadcrumb);
import { Carousel } from 'bootstrap-vue/es/components';
Vue.use(Carousel);


//View principal
import App from './App.vue';

Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  render: h => h(App)
});
