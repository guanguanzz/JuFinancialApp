import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/scss/reset.scss' //reset 样式
//swiper插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */ )

import '@/assets/scss/iconFont/iconfont.css' //阿里云图标

//vant-ui按需引用
import {
  Tabbar,
  TabbarItem,
  Tab,
  Tabs
} from 'vant';
Vue.use(Tabbar).use(TabbarItem).use(Tab).use(Tabs);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')