import request from '@/utils/request'

export function saveAlbum(data) {
  return request({
    url: '/cms/backend/album/save',
    method: 'post',
    data,
    loading: true
  })
}

export function doEnableOrDisable(data) {
  return request({
    url: '/cms/backend/album/doEnableOrDisable',
    method: 'post',
    data
  })
}

export function deleteAlbum(params) {
  return request({
    url: '/cms/backend/album/delete',
    method: 'get',
    params
  })
}

export function queryAlbumDetail(params) {
  return request({
    url: '/cms/backend/album/detail',
    method: 'get',
    params
  })
}

export function saveContent(data) {
  return request({
    url: '/cms/backend/album/saveContent',
    method: 'post',
    data
  })
}

export function deleteContent(params) {
  return request({
    url: '/cms/backend/album/deleteContent',
    method: 'get',
    params
  })
}

export function sortContent(data) {
  return request({
    url: '/cms/backend/album/sortContent',
    method: 'post',
    data
  })
}

export function showSetName(params) {
  return request({
    url: '/cms/backend/drama/showSetName',
    method: 'get',
    params
  })
}

export function saveUp(data) {
  return request({
    url: '/cms/backend/up/save',
    method: 'post',
    data
  })
}

export function queryUpDetail(params) {
  return request({
    url: '/cms/backend/up/get',
    method: 'get',
    params,
    loading: true
  })
}

export function toggleEnableUp(data) {
  return request({
    url: '/cms/backend/up/toggleEnable',
    method: 'post',
    data
  })
}

export function pushReminder(params) {
  return request({
    url: '/message/backend/pushReminder',
    method: 'get',
    params
  })
}

export function querySubtitlingQty(params) {
  return request({
    url: '/cms/backend/episode/querySubtitlingQty',
    method: 'get',
    params
  })
}

export function deleteEpisode(data) {
  return request({
    url: `/cms/backend/episode/delete?episodeId=${data.episodeId}`,
    method: 'delete'
  })
}

export function AddContentInfo(data) {
  return request({
    url: `/cms/backend/dataAnalysis/contentInfo`,
    method: 'post',
    data,
    loading: true
  })
}

export function saveStar(data) {
  return request({
    url: `/cms/backend/star/save`,
    method: 'post',
    data,
    loading: true
  })
}

export function queryStarDetail(data) {
  return request({
    url: `/cms/backend/star/detail`,
    method: 'post',
    data,
    headers: {
      'Content-Type': 'application/json'
    },
    loading: true
  })
}

export function starRefreshToCache(data) {
  return request({
    url: `/cms/backend/star/refreshToCache`,
    method: 'post',
    data,
    loading: true
  })
}

export function albumRefreshToCache(data) {
  return request({
    url: `/cms/backend/album/refreshCache`,
    method: 'post',
    data,
    loading: true
  })
}

export function groupSave(data) {
  return request({
    url: `/message/backend/station/group/save`,
    method: 'post',
    data,
    loading: true
  })
}

export function getGroupId(data) {
  return request({
    url: '/message/backend/station/group/list',
    method: 'post',
    data
  })
}

export function saveTemplate(data) {
  return request({
    url: '/message/backend/station/template/save',
    method: 'post',
    data
  })
}

export function updateStatusTemplate(data) {
  return request({
    url: '/message/backend/station/template/updateStatus',
    method: 'post',
    data
  })
}

export function getDetailTemplate(id) {
  return request({
    url: `/message/backend/station/template/detail/${id}`,
    method: 'get'
  })
}

export function saveStationContent(data) {
  return request({
    url: '/message/backend/station/content/save',
    method: 'post',
    data
  })
}

export function getStationDetail(id) {
  return request({
    url: `/message/backend/station/content/detail/${id}`,
    method: 'get'
  })
}

export function updateStatusContent(id) {
  return request({
    url: `/message/backend/station/content/updateStatus/${id}`,
    method: 'post'
  })
}
