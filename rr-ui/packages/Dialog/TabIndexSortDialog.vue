<template>
  <template-dialog-wraper title="排序" @submit="handleSubmit">
    <label class="el-form-item__label">序号：</label>
    <div class="el-form-item__content">
      <el-select v-model="target">
        <el-option v-for="item in total" :key="item" :label="'第' + item + '顺位'" :value="item" />
      </el-select>
    </div>
  </template-dialog-wraper>
</template>

<script>
export default {
  props: {
    curIndex: {
      type: Number,
      default: undefined,
    },
    total: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      target: this.curIndex,
    }
  },
  methods: {
    handleSubmit() {
      this.$parent.$emit('submit', this.target)
      this.$emit('close')
      // this.$refs.ef.validate((valid) => {
      //   console.log(valid)
      //   if (valid) {
      //     saveVideoType({
      //       name: this.form.typeName,
      //     }).then(() => {
      //       this.$parent.$emit('submit')
      //       this.$emit('close')
      //     })
      //   }
      // })
    },
  },
}
</script>

<style lang="sass" scope>
// .r-dialog-wrap
// .text
//     font-size: 14px
//     .item
//         margin-top: 12px
//     &:first-child
//         margin-top: 0
//     .clearfix:before,
//     .clearfix:after
//         display: table
//         content: ""
//     .clearfix:after
//         clear: both
//     .r-c-w
//         display: flex
//         flex-direction: column
</style>
