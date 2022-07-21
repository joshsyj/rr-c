<template>
  <dy-item-wrap :item="item" v-if="!item.hidden">
    <!-- `value` 为 true 或 false -->
    <el-row style="min-width:200px">
      <el-checkbox v-bind="$attrs" v-on="$listeners" :disabled="item.disabled || false"></el-checkbox>
    </el-row>
  </dy-item-wrap>
</template>

<script>
import DyFormMixin from '../dyformitemMixin';
export default {
  mixins: [DyFormMixin]
};
</script>

