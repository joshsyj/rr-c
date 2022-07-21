import request from '@/utils/request'

export function saveFeedbackStatus(data) {
  return request({
    url: '/user/behavior/backend/feedback/status',
    method: 'put',
    data
  })
}

export function saveOrUpdateCategory(data) {
  return request({
    url: '/cms/backend/issues/category/saveOrUpdate',
    method: 'post',
    data,
    loading: true
  })
}

export function saveOrUpdateIssues(data) {
  return request({
    url: '/cms/backend/issues/saveOrUpdate',
    method: 'post',
    data,
    loading: true
  })
}

export function enableIssues(query = {}) {
  return request({
    url: `/cms/backend/issues/enable?enable=${query.enable}&id=${query.id}`,
    method: 'put',
    loading: true
  })
}

export function delCategory(params = {}) {
  return request({
    url: `/cms/backend/issues/category/del/${params.id}`,
    method: 'delete',
    loading: true
  })
}

export function subtitleStatus(data = {}) {
  return request({
    url: `/user/behavior/backend/feedback/subtitle/status`,
    method: 'put',
    data,
    loading: true
  })
}

export function saveMessage(data = {}) {
  return request({
    url: `/message/backend/save`,
    method: 'post',
    data,
    loading: true
  })
}

export function revokeMessage(params = {}) {
  return request({
    url: `/message/backend/revoke`,
    method: 'get',
    params,
    loading: true
  })
}

export function queryMessageDetail(params = {}) {
  return request({
    url: `/message/backend/detail`,
    method: 'get',
    params
  })
}

export function queryMessageDetail2(params = {}) {
  return request({
    url: `/message/backend/getById`,
    method: 'get',
    params
  })
}

export function saveReportVideoStatus(data = {}) {
  return request({
    url: `/user/behavior/backend/feedback/report/video/status`,
    method: 'put',
    data
  })
}

export function saveUserReportStatus(data = {}) {
  return request({
    url: `/user/behavior/backend/feedback/report/user/status`,
    method: 'put',
    data
  })
}

export function getReportPunishById(params = {}) {
  return request({
    url: `/user/behavior/backend/feedback/report/user/getPunishById`,
    method: 'get',
    params
  })
}

export function saveReportPunishByReport(data = {}) {
  return request({
    url: `/user/behavior/backend/feedback/report/user/punishByReport`,
    method: 'put',
    data,
    loading: true
  })
}

export function doPushMessage(id){
  return request({
    url: `/message/backend/doPushMessage/${id}`,
    method: 'post',
  })
}

export function delMessage(id){
  return request({
    url: `/message/backend/del/${id}`,
    method: 'post',
  })
}

// export function exportMessage(params = {}) {
//   return request({
//     url: `/message/backend/export`,
//     method: 'get',
//     customize: true,
//     params
//   })
// }


// 查看反馈详情
export function getDetailByFeedback(id) {
  return request({
    url: `/user/behavior/backend/feedback/v2/detail/${id}`,
    method: 'get',
  })
}

// 回复消息详情
export function getReplyByFeedback(id) {
  return request({
    url: `/user/behavior/backend/feedback/v2/queryReply/${id}`,
    method: 'get'
  })
}

// 修改反馈类型
export function updateFeedbackType(data = {}) {
  return request({
    url: `/user/behavior/backend/feedback/v2/updateType`,
    method: 'put',
    data,
  })
}

// 修改反馈状态
export function updateFeedbackStatus(data = {}) {
  return request({
    url: `/user/behavior/backend/feedback/v2/updateStatus`,
    method: 'put',
    data,
  })
}

// 消息模板列表
export function getMessageTemplate() {
  return request({
    url: `/message/backend/station/template/list`,
    method: 'get'
  })
}

// 消息组列表
export function getMessageGroup() {
  return request({
    url: `/message/backend/station/group/list`,
    method: 'post',
  })
}

// 反馈消息回复
export function replyFeedbackMessage(data = {}) {
  return request({
    url: `/user/behavior/backend/feedback/v2/reply`,
    method: 'put',
    data,
  })
}

// 反馈类型列表
export function getFeedbackTypes() {
  return request({
    url: '/cms/backend/issues/type/list',
    method: 'get',
  })
}
