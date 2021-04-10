// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'
Vue.use(ElementUI)

Vue.filter('snippet',function(value){
  return value.slice(0,10) + "..."

})

// Vue.use(axios)
Vue.prototype.$http=axios.create({
  baseURL:'http://localhost:8085/api'
})
Vue.prototype.$http.interceptors.request.use(function(confing){
  confing.headers.Authorization='Bearer '  + sessionStorage.token
  return confing
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
