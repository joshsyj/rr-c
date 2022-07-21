import request from '@/utils/request'

export function getAllGroup() {
  return request({
    url: '/message/backend/group/allTree',
    method: 'get'
  })
}

export function saveGroup(data) {
  return request({
    url: '/message/backend/group/save',
    method: 'post',
    data
  })
}

export function saveByGroup(data) {
  return request({
    url: '/message/backend/group/saveByGroup',
    method: 'post',
    data
  })
}

export function deleteGroup(params) {
  return request({
    url: '/message/backend/group/delete',
    method: 'get',
    params
  })
}

export function childrenTree(params) {
  return request({
    url: '/message/backend/group/childrenTree',
    method: 'get',
    params
  })
}

export function doEnableOrDisable(data) {
  return request({
    url: '/message/backend/group/doEnableOrDisable',
    method: 'post',
    data
  })
}

export function doEnableOrDisableUser(data) {
  return request({
    url: '/message/backend/group/doEnableOrDisableUser',
    method: 'post',
    data
  })
}
