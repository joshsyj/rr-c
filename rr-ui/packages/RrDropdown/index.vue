<template>
  <el-dropdown class="d-wrap" @command="handleCommand" v-bind="$attrs" v-on="$listeners">
    <span class="el-dropdown-link">
      <id2-name :value="value" :options="options">
        <i class="el-icon-arrow-down el-icon--right"></i>
      </id2-name>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item v-for="item in options" :key="item.id" :command="item.id">{{ item.name }}</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: 'rr-dropdown',
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    value: {
      type: [String, Number],
    },
  },
  methods: {
    handleCommand(event) {
      console.log(event)
      this.$emit('input', event)
      this.$emit('change', event)
    },
  },
}
</script>

<style lang="scss" scoped>
.d-wrap {
  cursor: pointer;
}
</style>