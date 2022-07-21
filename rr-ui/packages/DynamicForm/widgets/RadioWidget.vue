<template>
  <dy-item-wrap :item="item">
    <el-radio-group :disabled="item.disabled" v-bind="$attrs" v-on="$listeners">
      <component
        :is="item.button?'el-radio-button':'el-radio'"
        v-for="o in item.options"
        :key="o.value"
        :label="o.value"
        :disabled="o.disabled"
        :border="item.border"
      >{{ o.label }}</component>
    </el-radio-group>
  </dy-item-wrap>
</template>

<script>
import DyFormMixin from "../dyformitemMixin";
export default {
  mixins: [DyFormMixin]
};
</script>

