import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/auth/backend/account/login',
    method: 'post',
    data
  })
}

export function getInfo(params) {
  return request({
    url: '/auth/backend/account/info',
    method: 'get',
    params
  })
}

export function logout() {
  return request({
    url: '/auth/backend/account/logout',
    method: 'put',
    loading: true
  })
}

export function allUserLogout() {
  return request({
    url: '/auth/backend/account/all_user_logout',
    method: 'put',
    loading: true
  })
}

export function queryUserDetail(params) {
  return request({
    url: '/user/backend/detail',
    method: 'get',
    params,
    loading: true
  })
}

export function updateUserInfo(data) {
  return request({
    url: '/user/backend/info/edit',
    method: 'post',
    data,
    loading: true
  })
}

export function resetPortrait(data) {
  return request({
    url: '/user/backend/info/resetPortrait',
    method: 'post',
    data,
    loading: true
  })
}

export function getUserPunishByUserId(params) {
  return request({
    url: '/user/behavior/backend/feedback/report/user/getPunishByUserId',
    method: 'put',
    params,
    loading: true
  })
}

export function punishUserReport(data) {
  return request({
    url: '/user/behavior/backend/feedback/report/user/punishByUserPage',
    method: 'put',
    data,
    loading: true
  })
}
