<template>
  <dy-item-wrap :item="item">
    <el-input v-bind="$attrs" clearable :type="item.subtype" :placeholder="item.placeholder" :disabled="item.disabled" @keyup.enter.native="keyEvent" v-on="$listeners" />
  </dy-item-wrap>
</template>
   
<script>
import Emitter from 'element-ui/src/mixins/emitter'
import DyFormMixin from '../dyformitemMixin'
export default {
  mixins: [DyFormMixin, Emitter],
  methods: {
    keyEvent() {
      this.dispatch('dynamic-form', 'keyup-enter', this)
    },
  },
}
</script>
