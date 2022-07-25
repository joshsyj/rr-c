<template>
  <div class="page-table" :class="className">
    <el-table
      ref="elTable"
      v-loading="loading"
      class="st__table"
      stripe
      v-bind="$attrs"
      style="width: 100%"
      :max-height="maxHeight"
      border
      :data="data"
      :row-key="rowKey"
      :header-row-style="{ height: '50px', color: '#606266' }"
      v-on="$listeners"
    >
      <!--多选-->
      <el-table-column v-if="checkBox" :key="'selection'" type="selection" width="55px" v-bind="$attrs" />
      <!--单选-->
      <el-table-column v-if="radioCheck" label="选择" width="55" header-align="center" align="center" :fixed="columns.some((item) => item.fixed)">
        <template slot-scope="scope">
          <el-radio v-model="radio" class="radio" :label="scope.$index"> &nbsp; </el-radio>
        </template>
      </el-table-column>
      <!-- tabIndex -->
      <el-table-column v-if="tabIndex" :key="'index'" align="center" label="序号" :width="columns.length === 0 ? '' : 80" :fixed="columns.some((item) => item.fixed)">
        <template v-slot="scope">
          <slot v-if="tabIndexSlot" name="sort-by-index" :row="scope.row" :$index="scope.$index" />
          <span v-else>{{ scope.$index + 1 }}</span>
        </template>
      </el-table-column>
      <!-- handle -->
      <el-table-column v-if="handle" :key="'handle'" :fixed="handle.fixed" align="center" :label="handle.label" :width="handle.width">
        <template v-slot="scope">
          <template v-for="(item, index) in handle.btns || []">
            <!-- 自定义操作类型 -->
            <slot v-if="item.slot" :name="'bt-' + item.event" :data="{ item, row: scope.row, $index: scope.$index }" />
            <!-- -->
            <slot v-if="item.slot" name="dy-query-btn" :data="{ item, row: scope.row, $index: scope.$index }" />
            <!--  -->

            <el-popconfirm
              v-if="!item.slot && item.popconfirm && (!item.ifRender || item.ifRender(scope.row))"
              class="popconfirm"
              v-permission="item.permission"
              :key="index"
              :icon="item.icon"
              :title="item.popTitle || '确定删除吗？'"
              @confirm="handleClick(item.event, scope.row, scope.$index)"
            >
              <el-button slot="reference" size="mini" :type="item.type" :disabled="item.disabled" :class="item.class">
                {{ item.label }}
              </el-button>
            </el-popconfirm>
            <!--  -->
            <el-button
              v-if="!item.slot && !item.popconfirm && (!item.ifRender || item.ifRender(scope.row))"
              v-permission="item.permission"
              :key="index"
              size="mini"
              :type="item.type"
              :icon="item.icon"
              :disabled="item.disabled"
              :class="item.class"
              @click.stop="handleClick(item.event, scope.row, scope.$index)"
            >
              {{ item.label }}
            </el-button>
          </template>
        </template>
      </el-table-column>
      <el-table-column
        v-for="item in columns.filter((item) => !item.hidden)"
        :key="item.label"
        header-align="center"
        :prop="item.value"
        :label="item.label"
        :fixed="item.fixed"
        :align="item.align || 'center'"
        :width="item.width"
        :min-width="item.minWidth || '100px'"
        :show-overflow-tooltip="item.showOverflowTooltip || false"
        :sortable="item.sortable || false"
      >
        <!-- header 自定义气泡 -->
        <template slot="header">
          <template v-if="item.headerType === 'slot'">
            <slot :name="'header-' + item.value" :item="item" />
            <slot name="dy-query-header" :data="{ item: item }" />
          </template>
          <el-popover v-else-if="item.header_bubble" trigger="hover" placement="top" :width="300">
            <span slot="reference">
              {{ item.label }}
              <i class="el-icon-warning"></i>
            </span>
            <span>{{ item.header_bubble_text }}</span>
          </el-popover>
          <template v-else>{{ item.label }}</template>
        </template>
        <!-- col -->
        <template #default="scope">
          <!-- 父级指定模板 自定义 -->
          <template v-if="item.type === 'slot'">
            <slot :name="'col-' + item.value" :row="scope.row" :item="item" :$index="scope.$index" />
            <slot name="dy-query-col" :data="{ row: scope.row, item: item, $index: scope.$index }" />
          </template>
          <!-- pipe -->
          <span v-else-if="item.type === 'pipe'" :style="calcuRowColor(item.color)">
            {{ $options.filters[item.pipe](scope.row[item.value], item.pipeArg || '') }}
          </span>
          <!-- popover-->
          <el-popover v-else-if="item.type === 'popover'" trigger="hover" placement="top">
            <p class="text-c">{{ scope.row[item.value] }}</p>
            <span slot="reference" class="dy-table-popover">
              {{ scope.row[item.value] }}
            </span>
          </el-popover>
          <!-- image -->
          <el-image
            v-else-if="item.type === 'image' && scope.row[item.value]"
            fit="contain"
            style="width: 60px; height: 60px"
            :src="formatImg(scope.row[item.value])"
            :preview-src-list="[scope.row[item.value]]"
          />
          <!-- tag -->
          <el-tag v-else-if="item.type === 'tag'">
            {{ scope.row[item.value] }}
          </el-tag>
          <!-- link -->
          <el-link v-else-if="item.type === 'link'" type="primary" :href="scope.row[item.value]" target="_blank">
            {{ scope.row[item.value] }}
          </el-link>
          <span v-else-if="item.type === 'id2name'">
            <el-tag v-if="item.subtype === 'tag'" :type="item.tagType || ''">
              {{ scope.row[item.value + '_id2name'] }}
            </el-tag>
            <el-image
              v-else-if="item.subtype === 'image' && scope.row[item.value + '_id2name']"
              fit="contain"
              style="width: 60px; height: 60px"
              :src="scope.row[item.value + '_id2name']"
              :preview-src-list="[scope.row[item.value + '_id2name']]"
            />
            <template v-else>{{ scope.row[item.value + '_id2name'] }}</template>
          </span>
          <!-- time -->
          <span v-else-if="item.type === 'time'">
            {{ scope.row[item.value] | parseTime }}
          </span>
          <!-- boolean -->
          <span v-else-if="item.type === 'boolean'" :style="calcuRowColor(item.color)">
            {{ scope.row[item.value] ? '是' : '否' }}
          </span>
          <!-- doubleClick -->
          <div v-else-if="item.type === 'dbEdit'" @dblclick="handleDbClick(scope.row, item)">
            <el-input v-if="!!scope.row.nameFlag" v-focus v-model="scope.row[item.value]" placeholder="请输入内容" @blur="handleClick(item.value, scope.row, scope.$index)"></el-input>
            <span v-else>{{ scope.row[item.value] }}</span>
          </div>
          <!-- default -->
          <span v-else :style="calcuRowColor(item.color)">
            {{ scope.row[item.value] }}
          </span>
        </template>
      </el-table-column>
    </el-table>
    <!--  -->
    <template v-if="pager">
      <div v-show="data.length" style="margin-top: 20px" :class="['text-c', paginationLeft ? 'pagination-flex' : '']">
        <slot name="pagination-left"></slot>
        <el-pagination
          class="flex"
          :current-page.sync="pagerConfig.query.page"
          :page-size.sync="pagerConfig.query.size"
          layout="total,prev, pager, next, sizes, jumper"
          :total="pagerConfig.totalElements"
          :page-sizes="[10, 20, 50, 100]"
          @current-change="handleCurrentChange"
          @size-change="handleSizeChange"
        />
      </div>
    </template>
  </div>
</template>

<script>
import { debounce, deepClone } from '@/utils/index'
import Sortable from 'sortablejs'
import async from 'async'
// import request from '@/utils/request'
import { insertNodeAt, removeNode } from '@/utils/helper'
// import Settings from '@/settings'
import Qs from 'qs'

export default {
  name: 'dynamic-table',
  props: {
    // 自定义类名
    className: {
      type: String,
      default: ''
    },
    // 表格字段配置
    columns: {
      type: Array,
      default: () => []
    },
    // 列表数据
    data: {
      type: Array,
      default: () => []
    },
    // 是否显示序号
    tabIndex: {
      type: Boolean,
      default: false
    },
    // 是否有选择框
    checkBox: {
      type: Boolean,
      default: false
    },
    //是否单选radio
    radioCheck: {
      type: Boolean,
      default: false
    },
    // 操作栏配置
    handle: {
      type: Object,
      default: null
    },
    /** *分页 */
    pager: {
      type: Boolean,
      default: false
    },
    //格式化data
    formatData: {
      type: Function,
      default: (v) => v
    },
    //行数据的 Key，用来优化 Table 的渲染；显示树形数据时，该属性是必填的。
    rowKey: {
      type: String,
      default: 'id'
    },
    // 是否支持拖拽
    draggable: {
      type: Boolean,
      default: false
    },
    // 限制表格高度
    limitMaxHeight: {
      type: Boolean,
      default: true
    },
    pagination: {
      type: Object,
      default: () => ({})
    },
    // 默认init查询 当有校验条件时 必填等 默认查询
    initQuery: {
      type: Boolean,
      default: true
    },
    requestOptions: {
      type: Object,
      default: null
    },
    initialFormValue: {
      type: Function,
      default: (v) => v
    },
    queryParams: {
      type: Function,
      default: (v) => v
    },
    tabIndexSlot: {
      type: Boolean,
      default: false
    },
    //该表格数据是否是数据字典格式
    dataIsDicType: {
      type: Boolean,
      default: false
    },
    //缓存未筛选情况下totalElements总条数，在某种场景下，当有筛选情况时需要用到未筛选总条数
    cacheTotal: {
      type: Boolean,
      default: false
    },
    //配合cacheTotal
    cacheKeys: {
      type: Array,
      default: () => []
    },
    //是否开启左边分页插槽
    paginationLeft: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      loading: false,
      TIMES: 0,
      radio: null,
      maxHeight: null,
      pagerConfig: {
        _totalElements: 0, //未筛选情况下的总条数，需要做缓存
        totalElements: 0, // 总条数
        //pageSizes: [10, 20, 50, 100], // 分页数量列表
        query: {
          // 查询条件
          page: 1, // 当前页
          size: 10 // 每页条数
        }
      }
    }
  },
  computed: {
    data_length() {
      return this.data.length
    }
  },
  watch: {
    // 'data.length': {
    //   handler(newVal, oldVal) {
    // if (this.draggable && newVal !== oldVal) {
    // if (this.draggable) {
    //   this.$nextTick(() => {
    //     this.setSort()
    //   })
    // }
    // if (newVal) {
    //   const _data = this.formatData(this.data)
    //   this.batchId2nameForTableData(_data, this.columns, false, (data) => {
    //     this.afterUpdateTableData()
    //   })
    //   this.$refs.elTable && this.$refs.elTable.doLayout()
    // }
    //   },
    //   immediate: true,
    //   deep: false,
    // },
    // draggable(value) {
    //   if (!value) {
    //     return this.sortable.destroy()
    //   }
    //   return value && this.data.length && this.setSort()
    // },
  },
  mounted() {
    if (this.limitMaxHeight) {
      this.calculateMaxHeight()
      this.__resizeHandler = debounce(this.calculateMaxHeight, 100)
      window.addEventListener('resize', this.__resizeHandler)
    }
    this.initQuery && this.query()
    this.draggable && this.setSort()
  },
  beforeDestroy() {
    this.$emit('update:data', [])
    this.limitMaxHeight && window.removeEventListener('resize', this.__resizeHandler)
  },
  updated() {
    this.batchId2nameForTableData(this.data, this.columns, false)
  },
  methods: {
    handleSizeChange(val) {
      this.pagerConfig.query.size = val // 每页条数
      this.pagerConfig.query.page = 1 // 每页条数切换，重置当前页
      this.query()
    },
    reset() {
      this.pagerConfig.query.page = 1
      this.query()
    },
    query() {
      if (!this.requestOptions) {
        return false
      }
      this.loading = true
      let { url, method, params = {}, baseURL,withCredentials=true } = this.requestOptions
      const { page, size } = this.pagerConfig.query
      const reqParams = this.handleParams(this.initialFormValue())
      // debugger
      const reqData = Object.assign({}, reqParams, {
        ...params
      })
      if (this.pager) {
        reqData['page'] = page - 1
        reqData['size'] = size
      }
      const dataKey = method && method.toLowerCase() == 'get' ? 'params' : 'data'
      window.request({
        baseURL,
        url,
        method,
        withCredentials,
        [dataKey]: reqData,
        paramsSerializer: function (params) {
          return Qs.stringify(params, {
            arrayFormat: 'indices',
            allowDots: true
          })
        }
      })
        .then((data) => {
          let { content, totalElements } = this.dataIsDicType
            ? {
                content: data,
                totalElements: 0
              }
            : data

          if (this.cacheTotal) {
            let status = this.cacheKeys.every((item) => reqData[item.key] == item.init)
            if (status) {
              this.pagerConfig._totalElements = totalElements
            }
          }

          this.$emit('update:data', this.formatData(content))

          if (this.pager && totalElements > 0) {
            this.pagerConfig.totalElements = totalElements
            //this.pagerConfig.query.page++
          }
        })
        .finally(() => {
          this.loading = false
        })
    },
    calculateMaxHeight() {
      this.maxHeight = (document.body.clientHeight || document.documentElement.clientHeight) - 80 - 52 - 50
      this.$nextTick(() => {
        this.$refs.elTable && this.$refs.elTable.doLayout()
      })
    },
    // 派发按钮点击事件
    handleClick(event, row, $index) {
      let name = ''
      if (row.nameFlag) {
        name = row.nameFlag
        row.nameFlag = ''
        if (name == row.name) return false
      }
      this.$emit('handleClick', event, row, $index)
    },
    // 跳转某一页
    handleCurrentChange(val) {
      this.pagerConfig.query.page = val // 当前页
      this.query()
    },
    // 为default-row添加色值
    calcuRowColor(colorType) {
      const colrMap = {
        success: '#67C23A',
        warning: '#E6A23C',
        danger: '#F56C6C',
        theme: '#FF4240'
      }
      return { color: colrMap[colorType] || 'inherit' }
    },
    // draggable
    setSort() {
      const _self = this
      const el = this.$refs.elTable.$el.querySelectorAll('.el-table__body-wrapper > table > tbody')[0]
      this.sortable = Sortable.create(el, {
        ghostClass: 'sortable-ghost',
        sort: true,
        setData: function (dataTransfer) {
          //console.log(dataTransfer)
          dataTransfer.setData('Text', '')
        },
        onUpdate: function (/**Event*/ evt) {
          // same properties as onEnd
          console.log(evt)
          removeNode(evt.item)
          insertNodeAt(evt.from, evt.item, evt.oldIndex)
          const updatePosition = (list) => list.splice(evt.newIndex, 0, list.splice(evt.oldIndex, 1)[0])
          const newList = [..._self.data]
          const oldRow = newList[evt.oldIndex]
          const targetRow = newList[evt.newIndex]
          updatePosition(newList)
          console.log(newList)
          _self.$emit('update:data', newList)
          _self.$emit('onSort', oldRow, targetRow)
        },
        onEnd: (evt) => {
          console.log(evt)
          // if (this.tabIndexSlot) {
          //   console.log(evt)
          //   //this.$emit('onSort', evt.oldIndex, evt.newIndex)
          // } else {
          //   const temp = this.data.slice()
          //   const targetRow = temp.splice(evt.oldIndex, 1)[0]
          //   temp.splice(evt.newIndex, 0, targetRow)
          //   this.$emit('onSort', temp)
          // }
          // this.$nextTick(() => {
          //   //this.$set(this.data, 0, targetRow)
          //   this.$emit('update:data', temp)
          // })
          //this.$set(this.data,evt.newIndex, )
          // const targetRow = this.data.splice(evt.oldIndex, 1)[0]
          // this.data.splice(evt.newIndex, 0, targetRow)
          // const temp = JSON.parse(JSON.stringify(this.data))
          // const targetRow = temp.splice(evt.oldIndex, 1)[0]
          // temp.splice(evt.newIndex, 0, targetRow)
          // this.$emit('onSort', temp)
          //const targetRow = this.data.splice(evt.oldIndex, 1)[0]
          //this.data.splice(evt.newIndex, 0, targetRow)
          //this.$refs.elTable.doLayout()
          // const temp = this.data.slice()
          // const targetRow = temp.splice(evt.oldIndex, 1)[0]
          // temp.splice(evt.newIndex, 0, targetRow)
          // this.$emit('onSort', temp)
        }
      })
    },
    etVmIndex(domIndex) {
      const indexes = this.visibleIndexes
      const numberIndexes = indexes.length
      return domIndex > numberIndexes - 1 ? numberIndexes : indexes[domIndex]
    },
    batchId2nameForTableData(tableData, columns, forExcel, cb) {
      const _tableData = forExcel ? deepClone(tableData) : tableData // 导出的 直接赋值
      const id2name_items = columns
        .map((item) => {
          if (item.type === 'id2name') {
            return {
              rowKey: item.value,
              id2name_code: item.id2name_code,
              instance: item.instance
            }
          }
          return null
        })
        .filter(Boolean)
      const tasks = []
      id2name_items.forEach((obj) => {
        const { rowKey, id2name_code, instance } = obj
        const options = instance ? this[id2name_code] : this.$store.getters.enums[id2name_code]
        if (options && Array.isArray(options)) {
          for (const rows of _tableData) {
            const row = rows[rowKey]
            if (Array.isArray(row)) {
              const arr = row.filter((v) => {
                const obj = options.find((o) => o.id === v)
                return obj && obj.name
              })
              arr.length > 0 && this.$set(rows, rowKey + '_id2name', arr.join(','))
            } else {
              const obj = options.find((o) => {
                return o.id === row
              })
              obj && this.$set(rows, rowKey + '_id2name', obj.name)
            }
          }
        }
        typeof cb === 'function' && cb(null)
      })
      async.parallel(tasks, () => {
        //console.log(err)
        typeof cb === 'function' && cb(_tableData)
      })
    },
    afterUpdateTableData() {
      //hack  alreadyCheckedList
      console.log('afterUpdateTableData')
      this.draggable &&
        this.$nextTick(() => {
          this.setSort()
        })
    },
    handleParams(initialVal) {
      return Object.assign({}, initialVal, this.queryParams())
    },
    handleDbClick(row, item) {
      if (item.permission && !this.$hasPermission(item.permission)) return false
      if (!item.ifEdit || item.ifEdit(row)) {
        this.$set(row, 'nameFlag', item.value)
      }
    },
    formatImg(url) {
      let index = url.lastIndexOf('.')
      let ext = url.substr(index + 1)
      return window.Settings.qiniuNotSupportExt.includes(ext) ? url : url + '?imageView2/1/w/60/h/60'
    }
  }
}
</script>

<style lang="scss">
.page-table {
  margin-top: 10px;

  .popconfirm + .popconfirm {
    margin-left: 10px;
  }
  .el-button + .popconfirm {
    margin-left: 10px;
  }
  .popconfirm + .el-button {
    margin-left: 10px;
  }
}

.st__table .el-table__expanded-cell {
  padding: 10px 50px;
}
.dy-table-popover {
  display: block;
  margin: auto;
  width: 120px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.pagination-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
