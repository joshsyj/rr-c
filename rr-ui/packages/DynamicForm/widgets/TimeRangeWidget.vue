<template>
  <dy-item-wrap :item="item">
    <el-time-picker
      :format="item.valueFormat"
      v-bind="$attrs"
      range-separator="至"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
      v-on="$listeners"
    />
  </dy-item-wrap>
</template>

<script>
import DyFormMixin from "../dyformitemMixin";
export default {
  mixins: [DyFormMixin]
};
</script>

