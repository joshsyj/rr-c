import request from '@/utils/request'

export function queryConfig(data) {
  return request({
    url: '/user/behavior/backend/invitation/config',
    method: 'get',
    data
  })
}

export function setConfig(data) {
  return request({
    url: '/user/behavior/backend/invitation/config',
    method: 'put',
    data
  })
}

export function saveExternalPromotion(data) {
  return request({
    url: '/config/manage/externalPromotion/save',
    method: 'post',
    data
  })
}

export function getExternalPromotionById(query) {
  return request({
    url: `/config/manage/externalPromotion/getById?id=${query.id}`,
    method: 'get'
  })
}

export function saveShare(data) {
  return request({
    url: `/cms/backend/share/save`,
    method: 'post',
    data
  })
}

export function queryShareDetail(params) {
  return request({
    url: `/cms/backend/share/detail`,
    method: 'get',
    params
  })
}

export function saveActivity(data) {
  return request({
    url: `/user/behavior/backend/activity/save`,
    method: 'post',
    data
  })
}

export function queryActivityInfo(params) {
  return request({
    url: `/user/behavior/backend/activity/info/${params.id}`,
    method: 'get'
  })
}

export function saveRule(data) {
  return request({
    url: `/user/behavior/backend/activity/rule/save`,
    method: 'post',
    data
  })
}

export function queryRuleInfo(params) {
  return request({
    url: `/user/behavior/backend/activity/rule/info/${params.activityId}`,
    method: 'get'
  })
}

export function updateReward(data) {
  return request({
    url: `/user/behavior/backend/activity/reward/update`,
    method: 'post',
    data
  })
}
