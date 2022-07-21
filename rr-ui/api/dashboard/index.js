import request from '@/utils/request'

export function queryFeedbackData(params) {
  return request({
    url: '/user/behavior/backend/feedback/data',
    method: 'get',
    params,
  })
}

export function queryDataPending(params) {
  return request({
    url: '/data/analysis/backend/operate/statistic/dataPending',
    method: 'get',
    params,
  })
}

export function queryContentStatistics(params) {
  return request({
    url: '/data/analysis/backend/operate/statistic/contentStatistics',
    method: 'get',
    params,
  })
}

export function queryUserData(params) {
  return request({
    url: '/data/analysis/backend/operate/statistic/user_data',
    method: 'get',
    params,
  })
}

export function queryVideoData(params) {
  return request({
    url: '/data/analysis/backend/operate/statistic/video_data',
    method: 'get',
    loading: true,
    params,
  })
}

export function queryPlateData(params) {
  return request({
    url: '/data/analysis/backend/operate/statistic/plate_data',
    method: 'get',
    loading: true,
    params,
  })
}

export function queryMaxDate(params) {
  return request({
    url: '/data/analysis/backend/operate/statistic/max_date',
    method: 'get',
    params,
  })
}

export function queryShortVideoOverview(params) {
  return request({
    url: '/data/analysis/backend/operate/statistic/short_video/overview',
    method: 'get',
    params,
  })
}

export function queryShortVideoConversionDetail(params) {
  return request({
    url: '/data/analysis/backend/operate/statistic/short_video/conversion_detail',
    method: 'get',
    params,
  })
}

export function queryShortVideoContentConversionDetail(params) {
  return request({
    url: '/data/analysis/backend/operate/statistic/short_video/content_conversion_detail',
    method: 'get',
    params,
  })
}

export function queryVideoTypePlayRatio(params) {
  return request({
    url: '/data/analysis/backend/operate/statistic/video_type_play_ratio',
    method: 'get',
    params,
  })
}

export function queryPlaySourceRatio(params) {
  return request({
    url: '/data/analysis/backend/operate/statistic/play_source_ratio',
    method: 'get',
    params,
  })
}

// export function queryShortVideoOverview(params) {
//   return request({
//     url: '/data/analysis/backend/statistic/short_video/conversion',
//     method: 'get',
//     params,
//   })
// }
