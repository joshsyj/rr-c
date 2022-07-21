<template>
  <dy-item-wrap :item="item">
    <el-select
      :clearable="typeof item.clearable == 'boolean' ? item.clearable : true"
      v-bind="$attrs"
      v-on="$listeners"
      :multiple="typeof item.multiple == 'boolean' ? item.multiple : false"
      :filterable="item.remote || item.filterable"
      :placeholder="item.placeholder || '请选择'"
      :remote="item.remote"
      :remote-method="remoteMethod"
      :disabled="item.disabled"
      :name="item.name"
    >
      <el-option v-for="o in item.options" :key="o.id" :label="o.name" :value="o.id" :disabled="o.disabled" />
    </el-select>
  </dy-item-wrap>
</template>

<script>
import Emitter from 'element-ui/src/mixins/emitter'
import request from '@/utils/request'
import DyFormMixin from '../dyformitemMixin'
export default {
  componentName: 'sfSelectWidget',
  mixins: [DyFormMixin, Emitter],
  created() {
    this.transferIdToName()
    this.remoteMethod() //默认查询一次
  },
  watch: {
    'item.key': {
      handler() {
        this.bindRelation()
      },
      immediate: true
    }
  },
  methods: {
    bindRelation() {
      const { dependence, requestOptions } = this.item
      requestOptions && dependence && this.$on(`${dependence}-change`, this.handleDependenceChange)
    },
    remoteMethod(query = '') {
      if (typeof this.item.remoteMethod != 'function' || (this.item.cannotEmptySearch && query === '')) {
        return false
      }
      clearTimeout(this.timer)
      this.timer = setTimeout(async () => {
        try {
          const { remoteMethod, format = (v) => v } = this.item
          this.item.options = format(await remoteMethod(query))
          console.log(this.item.options)
        } catch (e) {
          console.log(e)
        }
      }, 100)
    },
    handleBlur() {
      if (this.item.remote) {
        setTimeout(() => {
          this.item.options = []
        }, 400)
      }
    },
    transferIdToName() {
      const { value, id2name_code } = this.item
      if (!value || !id2name_code) return false
      request({
        url: `/id2name/trans/${id2name_code}`,
        method: 'POST',
        data: [value]
      })
        .then((data) => {
          this.item.options = [{ label: data[value], value: value }]
        })
        .catch((err) => {
          console.log(err)
        })
    },
    //
    handleDependenceChange(value) {
      const { requestOptions, format = (v) => v, strictlyCheck = true } = this.item
      if (!requestOptions.url) {
        return new Error('invalid requestOptions.url in current widget config')
      }
      if (strictlyCheck && !(value !== undefined && value !== null && value !== '')) {
        return false
      }
      const url = requestOptions.url + (value || '')
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        request({ url, method: 'GET' })
          .then((res) => {
            this.$set(this.item, 'options', format(res))
          })
          .catch((err) => {
            console.log(err.message)
          })
      }, 300)
    }
  }
}
</script>
