<template>
  <dy-item-wrap :item="item">
    <el-date-picker
      class="date-separator"
      :type="item.subtype"
      :format="item.viewFormat || item.valueFormat"
      v-bind="$attrs"
      range-separator="至"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
      :default-time="['00:00:00', '23:59:59']"
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
