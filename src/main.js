import './assets/css/base.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
require('./mock/mock')

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
