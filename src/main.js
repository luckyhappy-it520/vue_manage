import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

//富文本编辑器
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme
Vue.use(VueQuillEditor, /* { default global options } */)


//树形组件
import './assets/fonts/iconfont.css'
import './assets/css/global.css'
import TreeTable from 'vue-table-with-tree-grid'
Vue.component('tree-table', TreeTable)

//axios配置
import axios from 'axios'
// 配置请求的跟路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
axios.interceptors.request.use(config => {
  // console.log(config)
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // 在最后必须 return config
  return config
})
Vue.prototype.$http = axios


//开发模式
Vue.config.productionTip = false




//全局时间过滤器，解决时间格式从时间戳变为正常格式
Vue.filter("dateFormat", function (originVal) {
  const dt = new Date(originVal)
  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + "").padStart(2, "0")
  const d = (dt.getDate() + 1 + "").padStart(2, "0")
  const hh = (dt.getHours() + 1 + "").padStart(2, "0")
  const mm = (dt.getMinutes() + 1 + "").padStart(2, "0")
  const ss = (dt.getSeconds() + 1 + "").padStart(2, "0")
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})


//挂载路由
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
