import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Iron Man'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
