<template>
  <div ref="echarts" class="echarts" :style="{height ,width}"></div>
</template>

<script>
export default {
  name: 'rr-echarts',
  props: {
    option: {
      type: Object,
      default: () => {
        return {}
      },
    },
    height: {
      type: String,
      default: '400px',
    },
    width: {
      type: String,
      default: '100%',
    },
  },
  data() {
    return {
      myEcharts: null,
    }
  },
  watch: {
    option: {
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          this.myEcharts.setOption(newVal)
        }
      },
      deep: true,
    },
  },
  mounted() {
    let $echartsDOM = this.$refs.echarts
    this.myEcharts = this.$echarts.init($echartsDOM)
    //myEcharts.setOption(this.option)
  },
}
</script>