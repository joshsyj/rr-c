import request from '@/utils/request'

export function saveProductSetting(data) {
  return request({
    url: '/commodity/backend/product/setting/saveOrUpdate',
    method: 'post',
    data
  })
}

export function grantVip(data) {
  return request({
    url: '/user/backend/vip/grant',
    method: 'post',
    data
  })
}

export function updateVipType(data) {
  return request({
    url: '/commodity/backend/vip/level/update',
    method: 'post',
    data
  })
}

export function queryConfigDaily(params) {
  return request({
    url: '/usertask/backend/config/daily',
    method: 'get',
    params
  })
}

export function saveDaily(data) {
  return request({
    url: '/usertask/backend/config/save/daily',
    method: 'post',
    data,
    loading: true
  })
}

// 新增VIP Code码组
export function saveVipCodeGroup(data) {
  return request({
    url: '/commodity/backend/vipCode/saveCodeGroup',
    method: 'post',
    data,
    loading: true
  })
}
// 兑换码组恢复、停止兑换
export function saveVipCodeGroupStatus(data) {
  return request({
    url: '/commodity/backend/vipCode/changeGroupStatus',
    method: 'post',
    data,
    loading: true
  })
}
// 查询一码多换code码
export function queryOneToMoreCode(params) {
  return request({
    url: '/commodity/backend/vipCode/queryOneToMoreCode',
    method: 'get',
    params
  })
}
// 兑换码作废、取消作废
export function saveVipCodeStatus(data) {
  return request({
    url: '/commodity/backend/vipCode/changeCodeStatus',
    method: 'post',
    data,
    loading: true
  })
}
// 批量作废code码
export function batchInvalidVipCode(data) {
  return request({
    url: '/commodity/backend/vipCode/batchInvalidCode',
    method: 'post',
    data,
    loading: true
  })
}