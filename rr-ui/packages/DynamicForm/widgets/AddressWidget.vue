<template>
  <dy-item-wrap :item="item">
    <address-select v-bind="$attrs" v-on="$listeners"></address-select>
  </dy-item-wrap>
</template>

<script>
import AddressSelect from "@/components/AddressSelect";
import DyFormMixin from "../dyformitemMixin";
export default {
  mixins: [DyFormMixin],
  components: {
    AddressSelect
  },
};
</script>

