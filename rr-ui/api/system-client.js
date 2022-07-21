import request from '@/utils/request'

// 版本管理分页
export function configManageVersionPage(params) {
  return request({
    url: '/config/manage/version/page',
    method: 'get',
    params
  })
}

// 编辑版本信息
export function configManageVersion(data) {
  return request({
    url: '/config/manage/version',
    method: 'post',
    data
  })
}

// 版本-渠道list
export function configManageVersionChannelList(data) {
  return request({
    url: '/config/manage/version/channel/list',
    method: 'post',
    data
  })
}

// 渠道管理分页
export function configManageVersionChannelPage(params) {
  return request({
    url: '/config/manage/version/channel/page',
    method: 'get',
    params
  })
}

// 渠道管理保存
export function configManageChannel(data) {
  return request({
    url: '/config/manage/channel',
    method: 'post',
    data
  })
}

// 渠道管理更新地址
export function configManageChannelEditUrl(data) {
  return request({
    url: '/config/manage/channel/edit/url',
    method: 'post',
    data
  })
}

// 渠道管理详情
export function configManageChannelGet(params) {
  return request({
    url: '/config/manage/channel',
    method: 'get',
    params
  })
}

// 强更管理list
export function configManageVersionForceList(params) {
  return request({
    url: '/config/manage/version/force/list',
    method: 'get',
    params
  })
}

// 强更编辑
export function configManageVersionForce(data) {
  return request({
    url: '/config/manage/version/force',
    method: 'post',
    data
  })
}

// 提示更新list
export function configManageVersionRemindList(params) {
  return request({
    url: '/config/manage/version/remind/list',
    method: 'get',
    params
  })
}

// 提示更新编辑
export function configManageVersionRemind(data) {
  return request({
    url: '/config/manage/version/remind',
    method: 'post',
    data
  })
}

// 渠道分级(版本添加渠道使用)
export function configManageChannelLevel(params) {
  return request({
    url: '/config/manage/channel/level',
    method: 'get',
    params
  })
}

// 版本渠道管理-批量添加渠道
export function configManageVersionChannelBatchAdd(data) {
  return request({
    url: '/config/manage/version/channel/batch/add',
    method: 'post',
    data
  })
}

// 版本渠道管理-编辑版本渠道
export function configManageVersionChannelEdit(data) {
  return request({
    url: '/config/manage/version/channel/edit',
    method: 'post',
    data
  })
}

// 版本渠道管理-批量校验渠道
export function configManageVersionChannelBatchCheck(data) {
  return request({
    url: '/config/manage/version/channel/batch/check',
    method: 'post',
    data
  })
}

// 检查更新管理list
export function configManageVersionCheckList(params) {
  return request({
    url: '/config/manage/version/check/list',
    method: 'get',
    params
  })
}

// 新增/编辑检查更新
export function configManageVersionCheck(data) {
  return request({
    url: '/config/manage/version/check',
    method: 'post',
    data
  })
}
