import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/Webshop'


//Import Bootstrap
import { BootstrapVue } from 'bootstrap-vue'
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
Vue.config.productionTip = false

Vue.config.productionTip = false
new Vue({
  store,
  router, //specify the router configuration for use
  render: h => h(App),
}).$mount('#app')
