<template>
  <el-form
    ref="dyForm"
    class="dynamic-form"
    :inline="formConfig.inline"
    :model="value"
    :label-position="formConfig.labelPosition"
    :label-width="formConfig.labelWidth"
    :size="formConfig.size"
    :rules="rules"
  >
    <template v-if="formConfig.formItemList && formConfig.formItemList.length > 0">
      <component
        :is="createWidgets(formitem)"
        v-for="(formitem, index) in formConfig.formItemList.filter((item) => !item.hidden)"
        :key="formitem.key + index"
        :item="formitem"
        :value="value[formitem.key]"
        @input="handleInput($event, formitem.key)"
        @change="handleChange($event, formitem.key)"
      />
      <slot name="custom-form"></slot>
    </template>
    <slot />
    <el-row type="flex" justify="end" class="text-c">
      <el-button size="small" @click="resetForm('dyForm')">重置</el-button>
      <el-button size="small" type="primary" @click="submitForm('dyForm')"> 查询 </el-button>
      <slot name="sf-btns" />
    </el-row>
  </el-form>
</template>

<script>
import Emitter from 'element-ui/src/mixins/emitter'
import widgetRegistry from './WidgetRegistry'
export default {
  name: 'dynamic-form',
  componentName: 'dynamic-form',
  mixins: [Emitter],
  props: {
    formConfig: {
      type: Object,
      required: true
    },
    value: {
      type: Object,
      required: true
    }
  },
  computed: {
    conditionLength() {
      return (this.formConfig.formItemList || []).length
    },
    rules() {
      const _rules = {}
      const formItemList = this.formConfig.formItemList || []
      for (const item of formItemList) {
        const prop = item.key
        const rule = item.rules || []
        rule && rule.length && (_rules[prop] = rule)
      }
      return _rules
    }
  },
  watch: {
    conditionLength: {
      handler() {
        this.bindRelation()
      },
      immediate: true
    }
  },
  mounted() {
    this.setDefaultValue()
    this.$on('keyup-enter', () => this.submitForm('dyForm'))
  },
  methods: {
    createWidgets(formItem) {
      const key = `df-${formItem.type}`
      const comp = widgetRegistry.getType(key)
      if (!comp) {
        throw new Error('invalid formItem type')
      }
      return comp
    },
    handleChange(val, key) {
      this.$emit('change', key, Object.assign({}, this.value, { [key]: val }))
    },
    handleInput(val, key) {
      // if (typeof val === 'string') {
      //   val = val.replace(/^\s*|\s*$/g, '')
      // }
      this.$emit('input', { ...this.value, [key]: val })
    },
    //初始值和formItemList的默认值
    setDefaultValue() {
      const formData = { ...this.value } // 设置默认值
      this.formConfig.formItemList?.forEach(({ key, value, defaultValue }) => {
        if (formData[key] === undefined || formData[key] === null) {
          formData[key] = value
        } else if (JSON.stringify(formData[key]) === '[null]') {
          //hack cascader resetFields =>[null]
          formData[key] = []
        }
        if (defaultValue) {
          formData[key] = defaultValue
        }
      })
      this.$emit('input', formData)
      return formData
    },
    //针对关联widget  建立依赖关联
    bindRelation() {
      const formItemList = this.formConfig.formItemList || []
      formItemList.forEach((item) => {
        const { dependence, type } = item
        dependence &&
          this.$watch('value', function (newVal, oldVal) {
            if (newVal[dependence] !== oldVal[dependence]) {
              type === 'select' && this.broadcast('sfSelectWidget', `${dependence}-change`, newVal[dependence])
              type === 'cascader' && this.broadcast('sfCascaderWidget', `${dependence}-change`, newVal[dependence])
            }
          })
      })
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$emit('submit', this.value)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$emit('reset', this.setDefaultValue())
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="sass" scoped>
.dynamic-form
  display: flex
  flex-wrap: wrap
  align-items: flex-start
</style>
