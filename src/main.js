import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import ElementUI from 'element-ui'
import axios from 'axios'
import router from './router'

import 'element-ui/lib/theme-chalk/index.css'
//引入BootstrapVue样式表
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


// Vue.prototype.$http_axios = axios
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(BootstrapVue)

//配置请求的根路径
Vue.prototype.$http = axios


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
