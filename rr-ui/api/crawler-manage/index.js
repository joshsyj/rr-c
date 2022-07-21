import request from '@/utils/request'

/**
 * @description 创建明星抓取任务
 */
export function addStarTasks(data) {
  return request({
    baseURL: process.env.VUE_APP_NODE_API,
    withCredentials: false,
    url: '/api/star/tasks',
    method: 'post',
    data
  })
}
/**
 * @description 录入明星主页
 */
export function saveStarHomePage(data) {
  return request({
    url: '/cms/backend/star/spider/save',
    method: 'post',
    data,
    loading: true
  })
}
/**
 * @description 更新明星抓取任务状态
 */
export function updateStarTaskStatus(taskId, data) {
  return request({
    baseURL: process.env.VUE_APP_NODE_API,
    withCredentials: false,
    url: `/api/star/tasks/${taskId}`,
    method: 'put',
    data,
    loading: true
  })
}
/**
 * @description 重试明星抓取任务
 * @params taskId
 * */ 
 export function retryStarTask(id) {
  return request({
    baseURL: process.env.VUE_APP_NODE_API,
    withCredentials: false,
    url: `/api/star/tasks/retry/${id}`,
    method: 'post',
    loading: true
  })
}
/**
 * @description 删除明星抓取任务
 * @params taskId
 * */ 
 export function delStarTask(id) {
  return request({
    baseURL: process.env.VUE_APP_NODE_API,
    withCredentials: false,
    url: `/api/star/tasks/${id}`,
    method: 'delete',
    loading: true
  })
}