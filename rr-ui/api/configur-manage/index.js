import request from '@/utils/request'

export function getWebConfigAll(params) {
  return request({
    url: '/cms/backend/web/config/getAll',
    method: 'get',
    params
  })
}

export function saveDownloadConfig(data) {
  return request({
    url: '/cms/backend/web/config/putDownloadConfig',
    method: 'post',
    data,
    loading: true
  })
}

export function saveNoLoginPlayTimeLimit(params) {
  return request({
    url: '/cms/backend/web/config/putNoLoginPlayTimeLimit',
    method: 'get',
    params,
    loading: true
  })
}

export function sortWebBanner(data) {
  return request({
    url: '/cms/backend/web/banner/move',
    method: 'post',
    data,
    loading: true
  })
}

export function saveBanner(data) {
  return request({
    url: '/cms/backend/web/banner/save',
    method: 'post',
    data,
    loading: true
  })
}

export function setWebBanner(params) {
  return request({
    url: '/cms/backend/web/banner/setDown',
    method: 'get',
    params,
    loading: true
  })
}

export function deleteBanner(params) {
  return request({
    url: '/cms/backend/web/banner/delete',
    method: 'get',
    params,
    loading: true
  })
}

export function savePcNews(data) {
  return request({
    url: '/cms/backend/news/save',
    method: 'post',
    data,
    loading: true
  })
}

export function queryNewsDetail(params) {
  return request({
    url: '/cms/backend/news/detail',
    method: 'get',
    params
  })
}

export function moveNews(data) {
  return request({
    url: '/cms/backend/news/move',
    method: 'post',
    data
  })
}

export function setNewTop(data) {
  return request({
    url: '/cms/backend/news/setTop',
    method: 'post',
    data
  })
}

export function deleteNews(data) {
  return request({
    url: '/cms/backend/news/delete',
    method: 'post',
    data
  })
}
