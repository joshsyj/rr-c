<template>
  <dy-item-wrap :item="item">
    <el-input-number v-model="item.value" v-bind="item" v-on="$listeners" :style="{ width: item.w + 'px' }" />
  </dy-item-wrap>
</template>

<script>
import DyFormMixin from '../dyformitemMixin'
export default {
  mixins: [DyFormMixin]
}
</script>
