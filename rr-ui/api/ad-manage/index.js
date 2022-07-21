import request from '@/utils/request'

export function queryAdConfig(params) {
  return request({
    url: '/config/manage/ad/config/list',
    method: 'get',
    params,
  })
}

export function saveAdConfig(data) {
  return request({
    url: '/config/manage/ad/config/save',
    method: 'post',
    data,
    loading: true,
  })
}
