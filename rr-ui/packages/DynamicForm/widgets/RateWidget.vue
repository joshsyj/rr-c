<template>
  <dy-item-wrap :item="item">
    <el-rate
      v-bind="$attrs"
      :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
      text-color="#ff9900"
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

