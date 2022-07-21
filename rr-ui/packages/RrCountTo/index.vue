<template>
  <div class="c-w">
    <slot>
      &nbsp;
    </slot>
    <template v-if="typeof value == 'number'">
      <count-to v-bind="$attrs" :end-val="value" v-on="$listeners" />
    </template>
    <template v-else>
      {{ value }}
    </template>
  </div>
</template>

<script>
/**
 * 针对 vue-countTo 的二次封装
 */
import CountTo from 'vue-count-to'
export default {
  name: 'rr-count-to',
  components: {
    CountTo,
  },
  props: {
    value: {
      type: [Number, String],
      default: '--',
    },
  },
}
</script>

<style lang="sass" scoped>
.c-w
    display: inline-block
</style>