import request from '@/utils/request'

//http://console.antman.rr.tv/project/968/interface/api/129549
//板块下架
export function toggleModule(data) {
  return request({
    url: '/home/backend/navigation/toggleModule',
    method: 'post',
    data
  })
}

//http://console.antman.rr.tv/project/968/interface/api/129535
//添加板块
export function addModule(data) {
  return request({
    url: '/home/backend/navigation/addModule',
    method: 'post',
    data
  })
}

//http://console.antman.rr.tv/project/968/interface/api/129537
//板块复制
export function copyModule(data) {
  return request({
    url: `/home/backend/navigation/copyModule`,
    method: 'post',
    data
  })
}

//http://console.antman.rr.tv/project/968/interface/api/129547
//板块排序
export function sortModule(data) {
  return request({
    url: `/home/backend/navigation/sortModule`,
    method: 'post',
    data
  })
}

//http://console.antman.rr.tv/project/968/interface/api/129538
//板块刪除
export function deleteModule(data) {
  return request({
    url: `/home/backend/navigation/deleteModule`,
    method: 'post',
    data
  })
}

//http://console.antman.rr.tv/project/968/interface/api/129582
//板块详情
export function detailModule(data) {
  return request({
    url: `/home/backend/navigation/detailModule?moduleId=${data}`,
    method: 'post'
  })
}

//http://console.antman.rr.tv/project/968/interface/api/129561
//板块模糊查询
export function searchRecommendLike(data) {
  return request({
    url: `/home/backend/recommend/recommendLike?param=${data}`,
    method: 'post'
  })
}

export function saveOrUpdateArticle(data) {
  return request({
    url: '/cms/backend/article/saveOrUpdate',
    method: 'post',
    data
  })
}

export function saveSetting(data) {
  return request({
    url: '/cms/backend/search/setting/save',
    method: 'post',
    data,
    loading: true
  })
}

export function insertRanking(data) {
  return request({
    url: '/cms/backend/top/search/statistics/insertRanking',
    method: 'post',
    data,
    loading: true
  })
}

export function cancelInsert(params) {
  return request({
    url: '/cms/backend/top/search/statistics/insertRanking/cancel?',
    method: 'get',
    params,
    loading: true
  })
}

//http://console.antman.rr.tv/project/968/interface/api/129563
//新增保存板块
export function saveRecommend(data) {
  return request({
    url: '/home/backend/recommend/save',
    method: 'post',
    data,
    loading: true
  })
}

//http://console.antman.rr.tv/project/968/interface/api/129558
//获取板块详情
export function getRecommend(query) {
  return request({
    url: '/home/backend/recommend/getRecommend?id=' + query.id,
    method: 'post'
  })
}

//http://console.antman.rr.tv/project/968/interface/api/129557
//板块内容切换上下架
export function toggleEnableContent(data) {
  return request({
    url: '/home/backend/recommend/content/toggleEnable',
    method: 'post',
    data
  })
}

//http://console.antman.rr.tv/project/968/interface/api/129565
//板块切换上下架
export function toggleEnableRecommend(data) {
  return request({
    url: '/home/backend/recommend/toggleEnable',
    method: 'post',
    data
  })
}

export function getContentPage(data) {
  return request({
    url: '/cms/backend/recommend/content/page',
    method: 'post',
    data
  })
}

//http://console.antman.rr.tv/project/968/interface/api/129552
//板块内容删除
export function deleteContent(data) {
  return request({
    url: '/home/backend/recommend/content/delete',
    method: 'post',
    data
  })
}

//http://console.antman.rr.tv/project/968/interface/api/129556
//新增保存板块内容
export function saveContent(data) {
  return request({
    url: '/home/backend/recommend/content/save',
    method: 'post',
    data
  })
}

//http://console.antman.rr.tv/project/968/interface/api/129553
//板块内容的详情
export function contentDetail(data) {
  return request({
    url: '/home/backend/recommend/content/detail',
    method: 'post',
    data
  })
}

//http://console.antman.rr.tv/project/968/interface/api/129554
//板块内容管理非分页
export function getContent(data) {
  return request({
    url: '/home/backend/recommend/content/get',
    method: 'post',
    data
  })
}

//http://console.antman.rr.tv/project/968/interface/api/129536
//导航栏复制
export function copyNavigation(data) {
  return request({
    url: '/home/backend/navigation/copy',
    method: 'post',
    data
  })
}

//http://console.antman.rr.tv/project/968/interface/api/129564
//板块内容排序
export function sortRecommend(data) {
  return request({
    url: '/home/backend/recommend/sort',
    method: 'post',
    data
  })
}

export function saveFloatingWindow(data) {
  return request({
    url: '/user/behavior/backend/floatingWindow/save',
    method: 'post',
    data
  })
}

export function getFloatingWindowById(params) {
  return request({
    url: '/user/behavior/backend/floatingWindow/getById',
    method: 'get',
    params
  })
}

export function doEnableOrDisable(data) {
  return request({
    url: '/user/behavior/backend/floatingWindow/doEnableOrDisable',
    method: 'post',
    data
  })
}

export function deleteFloatingWindow(query) {
  return request({
    url: `/user/behavior/backend/floatingWindow/del?id=${query.id}`,
    method: 'delete'
  })
}

//http://console.antman.rr.tv/project/968/interface/api/129551
//修改banner比例
export function setBannerProportion(data) {
  return request({
    url: `/home/backend/recommend/content/bannerProportion`,
    method: 'post',
    data
  })
}

//http://console.antman.rr.tv/project/968/interface/api/129560
//板块删除
export function recommendDelete(data) {
  return request({
    url: `/home/backend/recommend/recommendDelete`,
    method: 'post',
    data
  })
}

//http://console.antman.rr.tv/project/968/interface/api/129545
//新增保存导航栏
export function navigationSave(data) {
  return request({
    url: `/home/backend/navigation/save`,
    method: 'post',
    data,
    loading: true
  })
}

export function getNavigation(query) {
  return request({
    url: `/cms/backend/navigation/getNavigation?id=${query.id}`,
    method: 'post'
  })
}

//http://console.antman.rr.tv/project/968/interface/api/129548
//导航栏切换上下架
export function navigationToggleEnable(data) {
  return request({
    url: `/home/backend/navigation/toggleEnable`,
    method: 'post',
    data
  })
}

//http://console.antman.rr.tv/project/968/interface/api/129543
//导航栏删除
export function navigationDelete(query) {
  return request({
    url: `/home/backend/navigation/recommendDelete?id=${query.id}`,
    method: 'post'
  })
}

//http://console.antman.rr.tv/project/968/interface/api/129546
//导航栏排序
export function navigationSort(data) {
  return request({
    url: `/home/backend/navigation/sort`,
    method: 'post',
    data
  })
}

//http://console.antman.rr.tv/project/968/interface/api/129550
//导航栏修改地址
export function updateNavigationURL(data) {
  return request({
    url: `/home/backend/navigation/updateURL`,
    method: 'post',
    data
  })
}

export function saveReserve(data) {
  return request({
    url: `/home/backend/reserve/save`,
    method: 'post',
    data,
    loading: true
  })
}

export function setHomePageShow(query) {
  return request({
    url: `/home/backend/reserve/home_page_show?onOff=${query.onOff}&reserveId=${query.reserveId}`,
    method: 'post'
  })
}

export function deleteReserve(query) {
  return request({
    url: `/home/backend/reserve/delete?reserveId=${query.reserveId}`,
    method: 'post'
  })
}

export function getWebsiteArticleList(data) {
  return request({
    url: '/cms/backend/news/page',
    method: 'post',
    data,
    loading: true
  })
}

export function saveMenuBar(data) {
  return request({
    url: '/cms/backend/menuBar/save',
    method: 'post',
    data,
    loading: true
  })
}

export function toggleMenuBarEnable(data) {
  return request({
    url: '/cms/backend/menuBar/toggleEnable',
    method: 'post',
    data,
    loading: true
  })
}

export function sortMenuBar(data) {
  return request({
    url: '/cms/backend/menuBar/sort',
    method: 'post',
    data
  })
}

export function queryCdnConfigList(params) {
  return request({
    url: '/cms/backend/cdn/config/list',
    method: 'get',
    params
  })
}

export function updateCdnConfig(data) {
  return request({
    url: '/cms/backend/cdn/config/update',
    method: 'post',
    data
  })
}

export function queryChannelList(params) {
  return request({
    url: '/config/manage/channel/List',
    method: 'get',
    params
  })
}

export function queryMenuBarDetail(params) {
  return request({
    url: `/cms/backend/menuBar/detail?id=${params.id}`,
    method: 'post'
  })
}

export function savePublishCopyright(data) {
  return request({
    url: `/config/manage/publishCopyright/config/save`,
    method: 'post',
    data
  })
}

//http://console.antman.rr.tv/project/968/interface/api/129544
//刷新缓存
export function refreshNavigationCacheByArea(data) {
  return request({
    url: `/home/backend/navigation/refreshCacheByArea`,
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    data
  })
}

export function saveEmoticon(data) {
  return request({
    url: `/emoticon/backend/save`,
    method: 'post',
    data,
    loading: true
  })
}

export function sortEmoticon(data) {
  return request({
    url: `/emoticon/backend/sort`,
    method: 'post',
    data
  })
}

export function queryAudienceList(query) {
  return request({
    url: `/room/backend/audienceList?roomId=${query.roomId}`,
    method: 'get',
    loading: true
  })
}

export function dissolveRoom(params) {
  return request({
    url: `/room/backend/dissolve`,
    method: 'get',
    params,
    loading: true
  })
}

//http://console.antman.rr.tv/project/888/interface/api/129732
//创建语音白名单
export function saveWhiteList(data) {
  return request({
    url: `/room/backend/voice/whiteList/save`,
    method: 'post',
    data
  })
}

//http://console.antman.rr.tv/project/888/interface/api/129730
//移除语音白名单
export function delWhiteList(id) {
  return request({
    url: `/room/backend/voice/whiteList/delete?id=${id}`,
    method: 'post'
  })
}
