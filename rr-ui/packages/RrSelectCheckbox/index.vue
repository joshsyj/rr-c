<template>
  <el-select class="rr-select-checkbox" v-model="checkboxVal" multiple style="width: 90%" @remove-tag="removeTag" @clear="handleClear" clearable>
    <template #prefix v-if="title">
      <div class="prefix">{{ title }}</div>
    </template>
    <template #empty>
      <div class="content">
        <div class="left">
          <div class="top">
            <div class="left-floor">
              <el-input placeholder="应用名称" v-model="appName" @input="handleInput" clearable></el-input>
            </div>
            <div class="flex left-floor">
              <div>
                <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">
                  <span class="text">全选</span>
                </el-checkbox>
              </div>
              <div>
                <slot name="left-action"> </slot>
              </div>
            </div>
          </div>
          <div class="ul">
            <el-checkbox-group v-model="checkboxVal" @change="handleChange">
              <template>
                <div v-for="item in _channelList" :key="item.id">
                  <el-checkbox class="wrap" :label="item.channelName" v-show="!item.hide">{{ item.channelName }}</el-checkbox>
                </div>
              </template>
            </el-checkbox-group>
          </div>
        </div>
        <div class="right">
          <div class="top">
            <div class="flex">
              <div class="text">已选择 {{ checkboxVal.length }}/{{ channelList.length }}</div>
              <div>
                <el-button @click="handleClear">清空</el-button>
              </div>
            </div>
          </div>

          <ul>
            <li v-for="(item, index) in checkboxList" :key="index">
              {{ item.channelName }}
              <i class="el-icon-close" @click="handleClick(index)"></i>
            </li>
          </ul>
        </div>
      </div>
    </template>
  </el-select>
</template>

<script>
export default {
  name: 'RrSelectCheckbox',
  props: {
    fetchList: {
      type: Function,
      default: () => {}
    },
    data: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      channelList: [],
      checkboxVal: [],
      checkAll: false,
      appName: '',
      isIndeterminate: false
    }
  },
  created() {
    this.fetchList().then((res) => {
      console.log(res)
      this.channelList = res || []
      if (this.data) {
        this.checkboxVal = this.data.split(',')
      }
    })
  },
  computed: {
    checkboxList() {
      return this.checkboxVal.map((val) => {
        return this.channelList.find((item) => item.channelName == val)
      })
    },
    _channelList() {
      return this.channelList.filter((item) => !item.hide)
    }
  },
  methods: {
    handleInput(val) {
      this.channelList = this.channelList.map((item) => {
        if (item.channelName.indexOf(val) == -1) {
          item.hide = true
        } else {
          item.hide = false
        }
        return item
      })
      if (!this._channelList.length) {
        this.checkAll = this.isIndeterminate = false
        return
      }
      this.validate()
    },
    validate() {
      let tag = 0
      this._channelList.forEach((item) => {
        if (this.checkboxVal.includes(item.channelName)) {
          tag++
        }
      })
      if (tag === this._channelList.length) {
        this.checkAll = true
        this.isIndeterminate = false
      } else if (tag) {
        this.isIndeterminate = true
        this.checkAll = false
      } else {
        this.isIndeterminate = false
        this.checkAll = false
      }
    },
    handleChange() {
      if (!this._channelList.length) {
        this.isIndeterminate = false
        this.checkAll = false
      } else {
        this.validate()
      }
    },
    handleCheckAllChange(val) {
      if (this.isIndeterminate) {
        this.checkAll = val = true
      }
      if (val) {
        let tag = this._channelList.reduce((pre, cur) => {
          return pre ? pre + ',' + cur.channelName : cur.channelName
        }, '')
        this.checkboxVal = [...new Set([...this.checkboxVal, ...tag.split(',')])]
      } else {
        let vals = []
        let checkboxVal = this.checkboxVal
        this._channelList.forEach((item) => vals.push(item.channelName))
        while (vals.length) {
          checkboxVal = checkboxVal.filter((channelName) => channelName != vals[0])
          vals.shift()
        }
        this.checkboxVal = checkboxVal
      }
      this.isIndeterminate = false
    },
    removeTag() {
      this.handleChange()
    },
    handleClick(i) {
      this.checkboxVal.splice(i, 1)
      this.handleChange(this.checkboxVal)
    },
    handleClear() {
      this.checkboxVal = []
      this.handleChange(this.checkboxVal)
    }
  },
  watch: {
    checkboxVal(nVal) {
      this.$emit('update:data', nVal.join())
    }
  }
}
</script>

<style lang="scss" scoped>
.prefix {
  padding-right: 10px;
  color: #6eb3f9 !important;
}

.rr-select-checkbox ::v-deep {
  .el-select__tags {
    padding-left: 45px;
  }

  .el-input {
    input {
      padding-left: 45px;
    }
  }
}

.content {
  height: 280px;
  display: flex;
  & > div {
    width: 50%;
    &.left {
      border-right: 1px solid #ddd;
      .ul {
        height: 190px;
        overflow-y: auto;
      }
    }
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    height: 228px;
    overflow-y: auto;
    li {
      padding: 10px;
      font-size: 14px;
      display: flex;
      justify-content: space-between;
      &:hover {
        background-color: #f4f8fe;
      }
      i:hover {
        cursor: pointer;
      }
    }
  }
  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .left-floor:not(:last-child) {
    margin-bottom: 10px;
  }

  .top {
    padding: 10px;
    box-sizing: border-box;
    border-bottom: 1px solid #ddd;
  }

  .text {
    font-size: 14px;
    color: #606266;
  }

  .wrap {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    margin: 0;
    &:hover {
      background-color: #f4f8fe;
    }
  }
}
</style>
