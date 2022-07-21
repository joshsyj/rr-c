<template>
  <div style="height: 100%;" class="el-dialog--center">
    <div class="el-dialog__header">
      <slot name="title">
        <span class="el-dialog__title">{{ title }}</span>
      </slot>
      <button type="button" class="el-dialog__headerbtn" @click="$parent.$emit('close')">
        <i class="el-dialog__close el-icon el-icon-close"></i>
      </button>
    </div>
    <div class="the-height el-dialog__body">
      <slot></slot>
    </div>
    <div class="el-dialog__footer">
      <slot name="footer">
        <el-button @click="$parent.$emit('close')">取 消</el-button>
        <el-button type="primary" @click="$emit('submit')" :disabled="disabled">确 定</el-button>
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'template-dialog-wraper',
  props: {
    title: {
      type: String,
      default: '提示',
    },
    disabled: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {}
  },
  created() { },
  methods: {},
}
</script>
<style lang="scss">
.the-height {
  height: calc(100% - 120px);
  position: relative;
  overflow: auto;
}
</style>
