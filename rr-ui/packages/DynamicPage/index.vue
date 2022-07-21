<template>
  <div class="dynamic-query-container">
    <slot name="dy-query-top" />
    <dynamic-form
      v-if="formSchema.formItemList && formSchema.formItemList.length"
      ref="sf"
      v-model="form"
      :form-config="formSchema"
      @change="handleChange(arguments)"
      @submit="sfSubmit($event)"
      @reset="reset($event)"
    >
      <template slot="sf-btns">
        <slot name="dy-query-sf-btns" />
      </template>

      <!-- 自定义 form 查询选项 -->
      <template slot="custom-form">
        <slot name="dy-query-custom-form"></slot>
      </template>
    </dynamic-form>
    <el-form v-if="$slots['dy-query-middle']">
      <el-form-item>
        <slot name="dy-query-middle" />
      </el-form-item>
    </el-form>
    <dynamic-table
      v-if="tableSchema.columns && tableSchema.columns.length"
      ref="st"
      v-bind="$attrs"
      :columns="tableSchema.columns"
      :expand-columns="tableSchema.expandColumns"
      :expand-handle="tableSchema.expandHandle"
      :check-box="tableSchema.checkBox"
      :record-view="tableSchema.recordView"
      :selected-record-count="checkList.length"
      :record-view-schema="!!recordViewSchema"
      :row-key="tableSchema.rowKey"
      :radio-check="tableSchema.radioCheck"
      :tab-index="tableSchema.tabIndex"
      :data.sync="tableSchema.data"
      :format-data="tableSchema.formatData"
      :handle="tableSchema.handle"
      :pager="tableSchema.pager"
      :request-options="requestOptions"
      :query-params="formatedFormValue"
      :already-checked-list="tableSchema.alreadyCheckedList"
      :initial-form-value="initialFormValue"
      :height="tableSchema.height"
      :limit-max-height="tableSchema.limitMaxHeight"
      :draggable="tableSchema.draggable"
      :export-excel="tableSchema.exportExcel"
      :class="{ mt0: !(formSchema.formItemList && formSchema.formItemList.length) }"
      :span-method="tableSchema.spanMethod"
      :selectable="tableSchema.selectable"
      :init-query="tableSchema.initQuery"
      :pipe="tableSchema.pipe"
      :tab-index-slot="tableSchema.tabIndexSlot"
      :reserve-selection="!!tableSchema.reserveSelection"
      :cacheTotal="tableSchema.cacheTotal"
      :cacheKeys="tableSchema.cacheKeys"
      :paginationLeft="tableSchema.paginationLeft"
      @handleEvent="handleEvent"
      @viewSelectedRows="viewSelectedRows"
      v-on="$listeners"
    >
      <!-- 接受自定义header-xxx -->
      <template #dy-query-header="{ data: scope }">
        <slot :name="'header-' + scope.item.value" :row="scope.item" />
      </template>

      <!-- 接受自定义col-xxx -->
      <template #dy-query-col="{ data: scope }">
        <slot :name="'col-' + scope.item.value" :row="scope.row" :index="scope.$index"/>
      </template>

      <!-- 接受自定义 btns -->
      <template #dy-query-btn="{ data: scope }">
        <slot :name="'bt-' + scope.item.event" :data="scope" />
      </template>

      <!-- 接受自定义 index -->
      <template #sort-by-index="{ row, $index }">
        <slot name="sort-by-index" :row="row" :$index="$index" />
      </template>

      <template #pagination-left>
        <slot name="pagination-left"></slot>
      </template>
    </dynamic-table>
    <el-backtop target=".app-main"></el-backtop>
  </div>
</template>

<script>
// import { isLegalKey } from '@/utils/index'

export default {
  name: 'dynamic-page',
  props: {
    pageConfig: {
      type: Object,
      default: () => ({})
    },
    isCustomSubmit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      form: {},
      checkList: [], //多选行
      currentRow: [] //单选行
    }
  },
  computed: {
    formSchema() {
      return this.pageConfig.formSchema || { formItemList: [] }
    },
    tableSchema() {
      return this.pageConfig.tableSchema || {}
    },
    requestOptions() {
      return this.pageConfig.requestOptions || {}
    },
    recordViewSchema() {
      return this.pageConfig.recordViewSchema || null
    }
  },
  methods: {
    //hack 第一次 请求带入初始参数
    //场景 模态框query页面 有初始值. sf的初始化value 在st调用query之后
    initialFormValue() {
      const obj = {}
      const { formItemList = [], formatFormValue = v => v } = this.formSchema
      formItemList.forEach(item => {
        const { key, value } = item
        obj[key] = value
      })
      return formatFormValue(obj)
      //return obj
    },
    formatedFormValue() {
      const { formatFormValue = v => v } = this.formSchema
      return formatFormValue(this.form)
    },
    // 表格拖拽排序事件
    // onSort(data) {
    //   // console.log('11', data)
    //   this.$emit('onSort', data)
    // },
    //刷新 供调用(当前pageIndex)
    refresh() {
      this.$refs.st.query()
    },
    //handle sf submit
    sfSubmit(value) {
      console.log(value, 'hi')
      this.$emit('submit', value)
      if (!this.isCustomSubmit) {
        this.$refs.st.reset()
      }
    },

    //handle sf reset
    reset() {
      this.$nextTick(() => {
        this.$refs.st.reset()
      })
    },
    handleChange(value) {
      this.$emit('change', value)
    },
    //st check
    handleEvent(evtName, data, flag) {
      switch (evtName) {
        case 'singleSelectRow':
          this.currentRow = [data]
          break
        case 'tableCheck':
          this.checkList = data
          break
        case 'rowToggle':
          this.handleRowToggle(data)
          break
        case 'allToggleInRecordView':
          this.handleAllToggleInRecordView(data, flag)
          break
        default:
          break
      }
    },
    //recordView模式下，处理某一行选择
    handleRowToggle(row) {
      const rowKey = this.tableSchema.rowKey
      const matchIndex = this.checkList.findIndex(item => item[rowKey] === row[rowKey])
      if (matchIndex === -1) {
        this.checkList.push(row)
      } else {
        this.checkList.splice(matchIndex, 1)
      }
    },
    //recordView模式下，处理某一页全选
    handleAllToggleInRecordView(selection, selected) {
      const rowKey = this.tableSchema.rowKey
      let matchIndex = -1
      selection.forEach(row => {
        matchIndex = this.checkList.findIndex(item => item[rowKey] === row[rowKey])
        if (selected && matchIndex === -1) {
          this.checkList.push(row)
        }
        if (!selected && matchIndex >= 0) {
          this.checkList.splice(matchIndex, 1)
        }
      })
    },
    // tableSchema 跨分页  查看已选项
    viewSelectedRows() {
      const { checkList, recordViewSchema: shema } = this
      if (!shema) {
        return this.$message.error('没有配置可用的recordViewSchema')
      }
      shema.data = checkList.slice()
      this.$createModalViewCheckedRows(shema, {
        remove: this.remove,
        batchRemove: this.batchRemove
      })
    },
    remove(curRow) {
      const rowKey = this.tableSchema.rowKey
      //移除缓存中的curRow
      const _index = this.checkList.findIndex(item => item[rowKey] === curRow[rowKey])
      if (_index >= 0) {
        this.checkList.splice(_index, 1)
        this.changeRowCheckStatus(rowKey, curRow[rowKey])
      }
    },
    batchRemove(selectRows) {
      const list = this.checkList
      const rowKey = this.tableSchema.rowKey

      for (var j = selectRows.length - 1; j >= 0; j--) {
        for (var i = list.length - 1; i >= 0; i--) {
          if (selectRows[j][rowKey] === list[i][rowKey]) {
            this.changeRowCheckStatus(rowKey, selectRows[j][rowKey])
            list.splice(i, 1)
          }
        }
      }
    },
    //当前st的data  匹配curRow行变更其选中状态   st.toggleRowSelection(row, selected)
    //可能第一页curTableData不存在第二页的row.id
    changeRowCheckStatus(rowKey, id) {
      const elTable = this.elTable || this.$refs.st.$children[0]
      const curTableData = elTable.data || []

      const matchItem = curTableData.find(item => item[rowKey] === id)
      matchItem && elTable && elTable.toggleRowSelection(matchItem, false)
    },
    getTotalElements(type) {
      if (type === 'cache') {
        return this.$refs.st.pagerConfig._totalElements
      }
      return this.$refs.st.pagerConfig.totalElements
    }
  }
}
</script>
<style lang="scss" scoped>
.dynamic-query-container {
  padding: 20px;
  height: 100%;
  overflow-y: auto;
}
.page-table .el-table__body-wrapper {
  min-height: 600px;
}
.mt0 {
  margin-top: 0;
}
</style>
