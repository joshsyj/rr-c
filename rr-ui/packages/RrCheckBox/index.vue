<template>
  <el-checkbox-group v-bind="$attrs" v-on="$listeners">
    <el-checkbox v-for="item of options" :key="item.id" :label="item.id">
      {{ item.name }}
    </el-checkbox>
  </el-checkbox-group>
</template>

<script>
export default {
  name: 'rr-checkbox',
  props: {
    options: {
      type: Array,
      require: true
    }
  },
  data() {
    return {}
  },
  methods: {}
}
</script>
