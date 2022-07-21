<template>
  <template-dialog-wraper :title="title" :showSubmit="false">
    <!-- <h4 style="text-indent: 1em;" v-text="title"></h4> -->
    <p v-html="content"></p>
    <div slot="footer">
      <el-button @click="$emit('close')">关 闭</el-button>
    </div>
  </template-dialog-wraper>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  margin: 0;
}
</style>
