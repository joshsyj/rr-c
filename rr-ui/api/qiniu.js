import request from '@/utils/request'

export function getToken(query) {
  return request({
    url: '/third/qiniu/token', // 假地址 自行替换
    method: 'get',
    params: query
  })
}
