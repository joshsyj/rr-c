<template>
  <el-form-item class="fi-wrap" :prop="item.key">
    <template slot="label">
      <span v-if="item.popover && item.popover_text">
        {{ item.label }}
        <el-popover trigger="hover" placement="top">
          {{ item.popover_text }}
          <span slot="reference">
            <i class="el-icon-info pointer"></i>
          </span>
        </el-popover>
      </span>
      <span v-else>{{ item.label }}</span>
    </template>
    <slot />
  </el-form-item>
</template>

<script>
export default {
  name: 'dy-item-wrap',
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="sass">
.fi-wrap
  display: inline-flex
  margin-right: 30px
</style>
