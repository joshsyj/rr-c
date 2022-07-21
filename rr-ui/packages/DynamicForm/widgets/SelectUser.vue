<template>
  <dy-item-wrap :item="item">
    <select-user v-bind="$attrs" v-on="$listeners"></select-user>
  </dy-item-wrap>
</template>

<script>
import SelectUser from "@/components/SelectUser";
import DyFormMixin from "../dyformitemMixin";
export default {
  mixins: [DyFormMixin],
  components: {
    SelectUser
  },
};
</script>

