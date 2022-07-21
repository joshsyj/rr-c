<template>
  <dy-item-wrap :item="item">
    <el-checkbox-group v-bind="$attrs" v-on="$listeners">
      <component
        :is="item.button?'el-checkbox-button':'el-checkbox'"
        v-for="o in item.options"
        :key="o.value"
        :disabled="o.disabled"
        :label="o.value"
        :border="item.border"
      >{{ o.label }}</component>
    </el-checkbox-group>
  </dy-item-wrap>
</template>

<script>
import DyFormMixin from "../dyformitemMixin";
export default {
  mixins: [DyFormMixin]
};
</script>

