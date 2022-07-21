<template>
  <el-radio-group class="rg-wrap" v-bind="$attrs" v-on="$listeners">
    <div class="radio-wrap" v-for="(item, index) in watchOptions" :key="index">
      <el-image class="radio-img" v-if="item.imgUrl" :src="item.imgUrl"></el-image>
      <el-radio :label="item.id" :disabled="item.disabled" v-bind="$attrs">
        {{ item.name }}
      </el-radio>
    </div>
  </el-radio-group>
</template>

<script>
export default {
  name: 'rr-checkradio',
  props: {
    options: {
      type: Array,
      require: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  computed: {
    watchOptions() {
      return this.disabled
        ? this.options.map((option) => {
            option.disabled = true
            return option
          })
        : this.options.map((option) => {
            // eslint-disable-next-line
            if (option.hasOwnProperty('disabled')) {
              delete option.disabled
            }
            return option
          })
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.rg-wrap {
  line-height: 36px;
  font-size: 14px;
  .radio-wrap {
    display: inline-block;
    margin-right: 40px;
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
