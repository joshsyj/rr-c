<template>
  <iframe class="content" :src="url" frameborder="0" />
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  width: 377px;
  height: 660px;
  overflow: auto;
  border-top: none;
  border-right: 1px solid rgb(247, 247, 247);
  border-bottom: 1px solid rgb(247, 247, 247);
  border-left: 1px solid rgb(247, 247, 247);
  border-image: initial;
  box-shadow: rgb(235 235 235) 0 2px 4px;
}
</style>
