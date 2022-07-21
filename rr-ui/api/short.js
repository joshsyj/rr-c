import request from '@/utils/request'

export function getVideoType(params = {}) {
  return request({
    url: '/cms/backend/video/getVideoType',
    method: 'get',
    params
  })
}

export function getRefContent(data = {}) {
  return request({
    url: '/cms/backend/video/getRefContent',
    method: 'post',
    data
  })
}

export function toggleEnable(data) {
  return request({
    url: '/cms/backend/video/toggleEnable',
    method: 'post',
    data
  })
}

export function saveVideoType(query) {
  return request({
    url: `/cms/backend/video/saveVideoType?name=${query.name}`,
    method: 'post'
  })
}

export function getVideoDetail(query) {
  return request({
    url: `/cms/backend/video/getVideo?id=${query.id}`,
    method: 'post'
  })
}

export function saveShort(data = {}) {
  return request({
    url: `/cms/backend/video/save`,
    method: 'post',
    data,
    loading: true
  })
}
