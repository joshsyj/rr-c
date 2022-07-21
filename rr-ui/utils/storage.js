const TAB_KEY = 'grootTabKey'

export function setCurrentTab(moduleName, tabName) {
  let tabStateMap = localStorage.getItem(TAB_KEY)
  tabStateMap = tabStateMap ? JSON.parse(tabStateMap) : {}
  tabStateMap[moduleName] = tabName
  localStorage.setItem(TAB_KEY, JSON.stringify(tabStateMap))
}

export function getCurrentTab(moduleName) {
  const tabStateStr = localStorage.getItem(TAB_KEY)
  const tabStateMap = (tabStateStr && JSON.parse(tabStateStr)) || {}
  return tabStateMap[moduleName]
}
