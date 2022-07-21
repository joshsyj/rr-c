<template>
  <dy-item-wrap :item="item">
    <el-switch v-bind="$attrs" v-on="$listeners" />
  </dy-item-wrap>
</template>

<script>
import DyFormMixin from "../dyformitemMixin";
export default {
  mixins: [DyFormMixin]
};
</script>

