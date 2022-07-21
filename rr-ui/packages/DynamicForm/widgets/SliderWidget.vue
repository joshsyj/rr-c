<template>
  <dy-item-wrap :item="item">
    <el-slider v-bind="$attrs" :range="item.isRange" v-on="$listeners" />
  </dy-item-wrap>
</template>

<script>
import DyFormMixin from "../dyformitemMixin";
export default {
  mixins: [DyFormMixin]
};
</script>

