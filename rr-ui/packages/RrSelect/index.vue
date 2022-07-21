<template>
  <el-row style="width: 100%">
    <el-select
      v-bind="$attrs"
      v-on="$listeners"
      v-loading="loading"
      :clearable="clearable"
      :remote="remote"
      :remote-method="remoteFn"
      :style="{ width: w || width + 'px' }"
      :disabled="$attrs.disabled"
    >
      <el-option v-for="o in curOptions" :key="o.id" :label="o.name" :value="o.id" :disabled="o.disabled" />
    </el-select>
    <el-button class="ml20" @click="tapSelectAll" type="primary" size="mini" :disabled="loading || $attrs.disabled" v-if="showSelectAll && $attrs.multiple">全选</el-button>
    <el-button @click="tapClear" size="mini" :disabled="loading || $attrs.disabled" v-if="$attrs.clear">清空</el-button>
  </el-row>
</template>

<script>
export default {
  name: 'rr-select',
  props: {
    options: {
      type: Array,
      default: () => []
    },
    //fetchMethod 的 filter
    dependence: {
      type: [String, Number, Boolean],
      default: undefined
    },
    //@Promise 单纯从远程fetch options  比如区域依赖于cityId  但 统计类目无依赖
    fetchMethod: {
      type: Function
    },
    format: {
      type: Function,
      default: v => v
    },
    // 异步搜索
    remote: {
      type: Boolean,
      default: false
    },
    // 异步搜索method
    remoteMethod: {
      type: Function
    },
    //
    id2name_code: [String],
    clearable: {
      type: Boolean,
      default: true
    },
    //只要id变化就进行id名称转换
    alwaysIdName: {
      type: Boolean,
      default: false
    },
    large: {
      type: Boolean,
      default: false
    },
    w: {
      type: [Number, String],
      default: 0
    },
    //是否显示全选按钮
    showSelectAll: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      TIME: 0,
      id2name_time: 0,
      asyncOptions: null,
      loading: false
    }
  },
  computed: {
    curOptions() {
      return this.asyncOptions || this.format(this.options) || []
    },
    width() {
      return this.large ? 420 : 168
    },
    //id2name  value
    id() {
      return this.$attrs.value
    }
  },
  watch: {
    //城市dependence  区域    场景
    dependence: {
      immediate: true,
      handler: function(val) {
        if ((val || val === 0) && JSON.stringify(val) !== '[]') {
          clearTimeout(this.timer)
          this.timer = setTimeout(async () => {
            this.loading = true
            this.asyncOptions = []
            this.TIME && this.$emit('input', '')
            try {
              const { fetchMethod, format } = this
              this.asyncOptions = format(await fetchMethod(val))
              this.loading = false
              this.TIME++
            } catch (e) {
              this.loading = false
            }
          }, 300)
        }
      }
    }
    // 支持异步：因为大多数场景是查详情，然后在组件内部id2name
    // id: {
    //   immediate: true,
    //   handler: function (val) {
    //     if (val && (!this.id2name_time || this.alwaysIdName)) {
    //       this.transferIdToName(val)
    //     }
    //   },
    // },
  },
  created() {
    // 没有denpendence 默认查询一次
    if (this.dependence === undefined) {
      this.fetch()
    }
  },
  methods: {
    remoteFn(query) {
      if (typeof this.remoteMethod != 'function') {
        return false
      }
      clearTimeout(this.remoteTimer)
      this.remoteTimer = setTimeout(async () => {
        try {
          const { remoteMethod, format } = this
          this.asyncOptions = format(await remoteMethod(query))
        } catch (e) {
          console.error(e)
        }
      }, 100)
    },
    handleBlur() {
      if (this.remote) {
        setTimeout(() => {
          this.asyncOptions = []
        }, 400)
      }
    },
    tapSelectAll() {
      if (this.$attrs.multiple && this.curOptions) {
        const all = this.curOptions.map(t => t.value)
        all.length && this.$emit('input', all)
      }
    },
    tapClear() {
      if (this.$attrs.clear) {
        this.$emit('input', [])
      }
    },
    //
    async fetch() {
      this.loading = true
      try {
        const { fetchMethod, format } = this
        this.asyncOptions = format(await fetchMethod())
        this.loading = false
      } catch (e) {
        this.loading = false
      }
    }
    //场景 品牌回传一个id 需展示名称
    // transferIdToName(value) {
    //   const { id2name_code } = this
    //   if (!id2name_code) return false
    //   value &&
    //     request({
    //       url: `/id2name/trans/${id2name_code}`,
    //       method: 'POST',
    //       data: [value],
    //     })
    //       .then((data) => {
    //         this.asyncOptions = [{ label: data[value], value: value }]
    //         this.id2name_time++
    //       })
    //       .catch((err) => {})
    // },
  }
}
</script>
