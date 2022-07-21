import request from '@/utils/request'

export function saveConstant(data) {
  return request({
    url: '/cms/backend/constant/save',
    method: 'post',
    data,
  })
}

export function findConstantById(params) {
  return request({
    url: '/cms/backend/constant/findById',
    method: 'get',
    params,
  })
}

export function deleteConstant(params) {
  return request({
    url: '/cms/backend/constant/delete',
    method: 'get',
    params,
  })
}

export function queryAreaConfigList(data) {
  return request({
    url: '/config/manage/area/config/list',
    method: 'post',
    data,
  })
}

export function saveAreaConfig(data) {
  return request({
    url: '/config/manage/area/config/save',
    method: 'post',
    data,
  })
}

export function queryConfigDetail(query) {
  return request({
    url: `/config/manage/area/config/detail?id=${query.id}`,
    method: 'get',
  })
}

export function delAreaConfig(query) {
  return request({
    url: `/config/manage/area/config/del?id=${query.id}`,
    method: 'get',
  })
}
