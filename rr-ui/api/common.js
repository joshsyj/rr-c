import request from '@/utils/request'

export function getAllRegion(params = {}) {
  return request({
    url: '/cms/backend/public/allRegion',
    method: 'get',
    params
  })
}

export function getAllByType(data = {}) {
  return request({
    url: '/cms/backend/tags/allByType',
    method: 'post',
    data
  })
}

export function getEnumAll(params = {}) {
  return request({
    url: '/cms/backend/enum/getAll',
    method: 'get',
    params
  })
}

export function getEnumList(params = {}) {
  return request({
    url: '/cms/backend/enum/list',
    method: 'get',
    params
  })
}

export function getRandom(params = {}) {
  return request({
    url: '/cms/backend/up/getRandom',
    method: 'get',
    params
  })
}

export function doEnableOrDisable(data = {}) {
  return request({
    url: '/cms/backend/episode/doEnableOrDisable',
    method: 'post',
    data
  })
}

export function saveOrUpdateEpisode(data = {}) {
  return request({
    url: '/cms/backend/episode/saveOrUpdate',
    method: 'post',
    data
  })
}

export function querySubtitlingList(data = {}) {
  return request({
    url: `/cms/backend/episode/querySubtitlingList`,
    method: 'post',
    data,
    loading: true
  })
}

export function saveSubtitlingList(data = {}) {
  return request({
    url: '/cms/backend/episode/saveSubtitlingList',
    method: 'post',
    data,
    loading: true
  })
}

export function batchDeleteSubtitling(data = {}) {
  return request({
    url: `/cms/backend/episode/batchDeleteSubtitling`,
    method: 'post',
    data
  })
}

//收费版本
export function batchTranslate(data = {}) {
  return request({
    url: '/third/google/batchTranslate',
    method: 'post',
    data,
    loading: true
  })
}

//免费版本
export function batchTranslateFree(data = {}) {
  return request({
    baseURL: process.env.VUE_APP_NODE_API,
    url: '/api/translate',
    method: 'post',
    data,
    timeout: 180000,
    withCredentials: false
  })
}

//修改密码
export function updatePwd(data = {}) {
  return request({
    url: '/auth/backend/account/updatePwd',
    method: 'post',
    data,
    loading: true
  })
}

//删除字幕
export function delSubtitling(query = {}) {
  return request({
    url: `/cms/backend/episode/delSubtitling?id=${query.id}`,
    method: 'delete',
    loading: true
  })
}
