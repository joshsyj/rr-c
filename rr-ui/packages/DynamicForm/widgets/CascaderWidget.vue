<template>
  <dy-item-wrap :item="item" ref="formItemWrap">
    <el-cascader v-bind="$attrs" v-on="$listeners" :disabled="item.disabled || false" :options="item.options" filterable clearable :props="{expandTrigger:'hover', multiple: !!item.isMultiple ,emitPath :!item.single, checkStrictly: !!item.checkStrictly}"></el-cascader>
  </dy-item-wrap>
</template>

<script>
// import request from '@/utils/request'
import DyFormMixin from '../dyformitemMixin'
export default {
  componentName: 'sfCascaderWidget',
  mixins: [DyFormMixin],
  watch: {
    'item.key': {
      handler() {
        this.bindRelation()
      },
      immediate: true,
    },
  },
  methods: {
    bindRelation() {
      const { dependence, requestOptions } = this.item
      requestOptions &&
        dependence &&
        this.$on(`${dependence}-change`, this.handleDependenceChange)
    },
    handleDependenceChange(value) {
      const { requestOptions, format = (v) => v } = this.item
      if (!requestOptions.url) {
        return new Error('invalid requestOptions.url in current widget config')
      }
      if (!(value !== undefined && value !== null && value !== '')) {
        return false
      }
      const url = requestOptions.url + (value || '')
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        window.request({ url, method: 'GET' })
          .then((res) => {
            this.$set(this.item, 'options', format(res))
            const formItem = this.$refs.formItemWrap.$children[0]
            formItem && formItem.resetField()
          })
          .catch((err) => {
            console.log(err.message)
          })
      }, 300)
    },
  },
}
</script>

