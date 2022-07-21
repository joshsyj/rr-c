import request from '@/utils/request'

export function getAuditInfo(params) {
  return request({
    url: `/ugc/backend/audit/info/${params.id}`,
    method: 'get'
  })
}

export function getDefinition(params) {
  return request({
    url: `ugc/backend/video/getDefinition/${params.vid}`,
    method: 'get'
  })
}

export function getPlayInfo(params) {
  return request({
    url: `ugc/backend/video/getPlayInfo/${params.vid}?definition=${params.definition}`,
    method: 'get'
  })
}

export function auditDo(data) {
  return request({
    url: `/ugc/backend/audit/do`,
    method: 'post',
    data
  })
}
