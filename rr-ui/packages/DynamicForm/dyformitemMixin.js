// import request from '@/utils/request'

const DyFormMixin = {
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  created() {
    //for  access 不再缓存state
    const { dependence, requestOptions, strictlyCheck = true } = this.item
    if (!strictlyCheck || (!dependence && requestOptions)) {
      this.query()
    }
  },
  methods: {
    query() {
      const { requestOptions = {}, format = v => v } = this.item
      const { url, method, data = {} } = requestOptions
      url &&
        window.request({ url, method: method.toLowerCase() || 'get', data })
          .then(res => {
            this.$set(this.item, 'options', format(res))
          })
          .catch(err => {
            console.log(err.message)
          })
    }
  }
}

export default DyFormMixin
