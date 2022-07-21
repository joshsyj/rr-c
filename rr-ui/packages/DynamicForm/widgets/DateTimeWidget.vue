<template>
  <dy-item-wrap :item="item">
    <el-date-picker
      class="date-separator"
      :type="item.subtype"
      :format="item.viewFormat"
      :value-format="item.valueFormat"
      :clearable="item.clearable"
      v-bind="$attrs"
      :placeholder="item.placeholder || '选择日期时间'"
      :picker-options="item.pickerOptions"
      default-time="00:00:00"
      v-on="$listeners"
    />
  </dy-item-wrap>
</template>

<script>
import DyFormMixin from '../dyformitemMixin'
export default {
  mixins: [DyFormMixin]
}
</script>
<style lang="scss" scoped>
.date-separator ::v-deep .el-range-separator {
  width: 18px;
}
</style>
