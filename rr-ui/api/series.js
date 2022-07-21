import request from '@/utils/request'

export function queryByPage(data = {}) {
  return request({
    url: '/vue-element-admin/queryByPage',
    method: 'post',
    data
  })
}

export function querySeries(data = {}) {
  return request({
    url: '/cms/backend/series/query',
    method: 'post',
    data
  })
}

export function doEnableOrDisable(data = {}) {
  return request({
    url: '/cms/backend/drama/doEnableOrDisable',
    method: 'post',
    data
  })
}

export function saveOrUpdate(data = {}) {
  return request({
    url: '/cms/backend/drama/saveOrUpdate',
    method: 'post',
    data,
    loading: true
  })
}

export function findById(query = {}) {
  return request({
    url: '/cms/backend/drama/findById?id=' + query.id,
    method: 'get'
  })
}
