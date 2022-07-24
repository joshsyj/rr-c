import Vue from 'vue'
// import Element from 'element-ui'
import App from './App.vue'
import rrUi from '@/packages/'
import axios from 'axios'
// Vue.use(Element, {
//     size: 'small', // set element-ui default size
//     // i18n: (key, value) => i18n.t(key, value)
// })
Vue.use(rrUi)

new Vue({
    render: h => h(App),
}).$mount('#app')