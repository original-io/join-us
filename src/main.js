import Vue from 'vue'
import App from './App.vue'
import router from './router'

import "bootstrap"
import "@/scss/custom.scss"
import "@fortawesome/fontawesome"
import "@fortawesome/fontawesome-free-solid/"
import "@fortawesome/fontawesome-free-brands/"
import "@fortawesome/fontawesome-free-regular/"

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
