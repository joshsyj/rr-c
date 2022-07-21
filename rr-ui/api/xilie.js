import request from '@/utils/request'

export function saveOrUpdateXiLie(data = {}) {
  return request({
    url: '/cms/backend/series/saveOrUpdate',
    method: 'post',
    data
  })
}

// 系列上下架
export function enableOrDisableXiLie(data = {}) {
  return request({
    url: '/cms/backend/series/doEnableOrDisable',
    method: 'post',
    data
  })
}
// 根据系列id,获取系列相关列表
export function getXilieAboutList(id, data) {
  return request({
    url: `/cms/backend/series/findDetailById?id=${id}`,
    method: 'get',
    data
  })
}
// 根据系列id,获取系列相关列表
export function deleteXilieAboutVideo(id) {
  return request({
    url: `/cms/backend/series/deleteDetailById?id=${id}`,
    method: 'delete',
    // data
  })
}
