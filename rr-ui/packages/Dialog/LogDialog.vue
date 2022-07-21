<template>
  <template-dialog-wraper v-bind="$attrs">
    <dynamic-table :data.sync="tableData" v-bind="$attrs"></dynamic-table>
  </template-dialog-wraper>
</template>

<script>
export default {
  data() {
    return {
      tableData: []
    }
  },
  methods: {}
}
</script>

<style lang="sass" scope></style>
