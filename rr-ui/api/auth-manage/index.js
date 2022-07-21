import request from '@/utils/request'

export function getAuthorizeResource(params) {
  return request({
    url: '/auth/backend/account/authorize_resource',
    method: 'get',
    params
  })
}

export function getRoleAll(params) {
  return request({
    url: '/auth/backend/role/all',
    method: 'get',
    params
  })
}

export function saveAccount(data) {
  return request({
    url: '/auth/backend/account/save',
    method: 'post',
    data
  })
}

export function addOrEditMenu(data) {
  return request({
    url: '/auth/backend/menu/addOrEdit',
    method: 'post',
    data
  })
}

export function queryMenuTree(params) {
  return request({
    url: '/auth/backend/menu/tree',
    method: 'get',
    params,
    loading: true
  })
}

export function deleteMenu(query) {
  return request({
    url: `/auth/backend/menu/delMenu?parentId=${query.parentId}`,
    method: 'delete'
  })
}

export function getMenuById(query) {
  return request({
    url: `/auth/backend/menu/detail?menuId=${query.menuId}`,
    method: 'get',
    loading: true
  })
}

export function addOrEditComp(data) {
  return request({
    url: `/auth/backend/menu/element/addOrEdit`,
    method: 'post',
    data
  })
}

export function addOrEditRole(data) {
  return request({
    url: `/auth/backend/role/addOrEditRole`,
    method: 'post',
    data
  })
}

export function deleteRole(data) {
  return request({
    url: `/auth/backend/role/delRole`,
    method: 'post',
    data
  })
}

export function queryRoleMenu(params) {
  return request({
    url: `/auth/backend/role/menu`,
    method: 'get',
    params
  })
}

export function deleteElement(query) {
  return request({
    url: `/auth/backend/menu/element/del?elementId=${query.elementId}`,
    method: 'delete'
  })
}

export function addRoleMenuAndComp(data) {
  return request({
    url: `/auth/backend/role/addRoleMenu`,
    method: 'post',
    data
  })
}

export function addOrEditAccountRole(data) {
  return request({
    url: `/auth/backend/account/addOrEditRole`,
    method: 'post',
    data
  })
}

export function updateAccountStatus(data) {
  return request({
    url: `/auth/backend/account/updateStatus`,
    method: 'post',
    loading: true,
    data
  })
}

export function resetPwd(data) {
  return request({
    url: `/auth/backend/account/resetPwd`,
    method: 'post',
    loading: true,
    data
  })
}
