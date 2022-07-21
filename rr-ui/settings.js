const version = require('./package.json').version

module.exports = {
  title: 'Iron Man',

  /**
   * @type {boolean} true | false
   * @description Whether show the settings right-panel
   */
  showSettings: true,

  /**
   * @type {boolean} true | false
   * @description Whether need tagsView
   */
  tagsView: true,

  /**
   * @type {boolean} true | false
   * @description Whether fix the header
   */
  fixedHeader: false,

  /**
   * @type {boolean} true | false
   * @description Whether show the logo in sidebar
   */
  sidebarLogo: true,

  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['production', 'development']
   */
  errorLog: ['production', 'development'],
  /**
   * @type {string}
   */
  //imgUrlOfImg: 'https://img.fqdy.pro/',
  imgUrlOfImg: 'https://img.netpop.app/',
  imgUrlOfFile: 'https://subtitles.netpop.app/',
  /**
   * @type {string}
   * @description 七牛不支持截图文件后缀
   */
  qiniuNotSupportExt: ['webp'],
  /**
   * sentry 配置
   */
  sentryConfig: {
    dsn: 'https://846720149ecf4b618d949cba7a8d161a@sentry.rr.tv/16',
    release: `${process.env.NODE_ENV}-${version}`,
    tracesSampleRate: 1.0,
    environment: process.env.NODE_ENV === 'production' ? 'production' : process.env.NODE_ENV === 'ironTest' ? 'test' : 'local'
  }
}
