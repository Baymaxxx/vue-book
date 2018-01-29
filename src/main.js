// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'lib-flexible/flexible' // rem
// 轮播图:https://github.com/surmon-china/vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'animate.css/animate.css' // 动画css
import './assets/css/common.scss' // 初始化css
import 'swiper/dist/css/swiper.css' // 轮播图

Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})
