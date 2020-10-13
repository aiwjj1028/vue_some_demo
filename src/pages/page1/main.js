import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// 解决在 IE 下，当 url 的 hash change 的时候浏览器没有做出相应
if ('-ms-scroll-limit' in document.documentElement.style &&
  '-ms-ime-align' in document.documentElement.style) { // detect it's IE11
  window.addEventListener('hashchange', function (event) {
    let currentPath = window.location.hash.slice(1)
    router.push(currentPath)
  }, false)
}
