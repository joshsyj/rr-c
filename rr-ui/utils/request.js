import axios from 'axios'
import { MessageBox, Message, Loading } from 'element-ui'
// import store from '@/store'
// import { getToken } from '@/utils/auth'
// import { isEmpty } from '@/utils'
// import Qs from 'qs'
import Vue from 'vue'

let LoadingInstance = null

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 65000 // request timeout
})

// request interceptor
service.interceptors.request.use(config => {
  // do something before request is sent
  if (config.loading && LoadingInstance === null) {
    LoadingInstance = Loading.service({
      lock: true,
      text: '正在努力加载中...',
      spinner: 'el-icon-loading',
      // fullscreen: false,
      background: 'rgba(255, 255, 255, 0.1)'
    })
  }
  if (store.getters.token) {
    // let each request carry token
    // ['X-Token'] is a custom headers key
    // please modify it according to the actual situation
    config.headers['token'] = getToken()
  }
  // if (config.method === 'get')
  //   config.params = Qs.stringify(config.params, { arrayFormat: 'comma' })

  return config
})

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    if (LoadingInstance) {
      Vue.nextTick(() => {
        // 以服务的方式调用的 Loading 需要异步关闭
        LoadingInstance.close()
        LoadingInstance = null
      })
    }

    //是否自定义response
    if (response.config.customize) {
      return res
    }

    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== '00000') {
      Message({
        message: res.msg || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === 'A0230') {
        // to re-login
        MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or login again', 'Confirm logout', {
          confirmButtonText: 'Re-Login',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.msg || 'Error'))
    } else {
      return res.data
    }
  },
  error => {
    console.log('err' + error) // for debug
    if (LoadingInstance) {
      Vue.nextTick(() => {
        // 以服务的方式调用的 Loading 需要异步关闭
        LoadingInstance.close()
        LoadingInstance = null
      })
    }
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
