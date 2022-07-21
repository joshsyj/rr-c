<template>
  <div>
    <el-tag v-if="type === 'tag'" v-bind="$attrs" v-on="$listeners">{{ displayVal }}</el-tag>
    <template v-else>
      {{ displayVal }}
    </template>
    <slot />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { isEmpty } from '@/utils'

export default {
  name: 'id2-name',
  props: {
    code: {
      type: String,
      require: true
    },
    value: {
      type: [String, Number, Array, Boolean], //Array<Number>
      require: true
    },
    options: {
      type: Array,
      default: () => []
    },
    fetchMethod: {
      type: Function
    },
    format: {
      type: Function,
      default: (v) => v
    },
    //展示方式 tag等 可扩展 accessory附件下载
    type: [String]
  },
  data() {
    return {
      asyncOptions: this.options
    }
  },
  computed: {
    ...mapGetters(['enums']),
    displayVal() {
      const curSet = this.enums[this.code] || this.asyncOptions
      return this.matchValue(curSet) || '--'
    }
  },
  created() {
    this.fetch()
  },
  methods: {
    async fetch() {
      let { format, fetchMethod } = this
      if (isEmpty(fetchMethod)) {
        return false
      }
      try {
        const data = format(await fetchMethod())
        this.asyncOptions = data
      } catch (e) {
        console.log(e)
      }
    },
    matchValue(sets = []) {
      if (Array.isArray(this.value)) {
        const set = sets.filter((item) => this.value.includes(item.id))
        return set.map((item) => item.name).join(',')
      }
      const set = sets.find((item) => item.id == this.value)
      return set && set['name']
    }
  }
}
</script>
