import request from '@/utils/request'

// 一级筛选列表
// /cms/backend/searchScreening/queryByPage
// 一级筛选列表 添加，修改
export function saveOrUpdateFilterPanelItem(data) {
  return request({
    url: '/cms/backend/searchScreening/saveOrUpdate',
    method: 'post',
    data,
  })
}

// 一级筛选列表  启用禁用；影视类型：电影，剧集，动画这些
export function enableOrDisableSome(data) {
  return request({
    url: '/cms/backend/searchScreening/doEnableOrDisable',
    method: 'post',
    data,
  })
}

// 二级筛选 启用禁用 地区，分类，年份这些
export function enableOrDisableFilterPanelItem(data) {
  return request({
    url: '/cms/backend/searchScreening/doEnableOrDisableSearchType',
    method: 'post',
    data,
  })
}

// 二级筛选列表
// /cms/backend/searchScreening/querySearchTypeByPage
// 二级筛选   地区，分类，年份 这些的 多语言设置
export function setOtherLang(data) {
  return request({
    url: '/cms/backend/searchScreening/setOtherLangName',
    method: 'post',
    data,
  })
}

export function batchSetItems(data) {
  return request({
    url: '/cms/backend/searchScreening/batchSetItems',
    method: 'post',
    data,
  })
}

export function searchScreeningSort(data) {
  return request({
    url: `/cms/backend/searchScreening/sort`,
    method: 'post',
    data,
  })
}

export function searchScreeningSortItem(data) {
  return request({
    url: `/cms/backend/searchScreening/sortItem`,
    method: 'post',
    data,
  })
}
