import request from '@/utils/request'

export function doEnableOrDisable(data = {}) {
  return request({
    url: '/cms/backend/movie/doEnableOrDisable',
    method: 'post',
    data
  })
}

export function movieSaveOrUpdate(data = {}) {
  return request({
    url: '/cms/backend/movie/saveOrUpdate',
    method: 'post',
    data,
    loading: true
  })
}

export function getMovieById(query = {}) {
  return request({
    url: '/cms/backend/movie/getMovie?id=' + query.id,
    method: 'post'
  })
}
