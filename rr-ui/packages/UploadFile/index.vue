<template>
  <div>
    <el-upload
      ref="elUpload"
      v-loading="loading"
      class="upload-wrap"
      v-bind="$attrs"
      :data="dataObj"
      :action="action"
      :file-list="fileList"
      :before-upload="beforeUpload"
      :on-exceed="handleExceed"
      :on-success="handleImageSuccess"
      :on-error="handleError"
      :auto-upload="!cropper"
      :on-remove="handleRemove"
      :on-preview="handlePictureCardPreview"
      :on-change="handleChange"
      :disabled="onlyShow"
    >
      <div v-if="!onlyIdentify" slot="tip" class="el-upload__tip">
        <slot name="tip">{{ tip }}</slot>
      </div>
      <!-- 自定义图片展示slot  list-type="picture-card"  -->
      <template #file="{ file }">
        <slot name="file" :file="file" />
      </template>
      <!--   -->
      <template slot="default">
        <slot name="default">
          <el-button size="small" type="primary" :disabled="onlyShow">点击上传</el-button>
        </slot>
      </template>
    </el-upload>
    <cropper ref="cropper" v-bind="$attrs" :visible.sync="cropperVisible" @on-cancel="onCropCancel" @on-finish="onCropFinish" />
    <el-dialog :visible.sync="dialogVisible" :modal="false">
      <img width="100%" :src="dialogImageUrl" alt="" />
    </el-dialog>
  </div>
</template>

<script>
import * as SparkMD5 from 'spark-md5'
// import { getToken } from '@/api/qiniu'
import Cropper from './cropper'
import Settings from '@/settings'
import ajax from './ajax'

export default {
  name: 'upload-file',
  components: {
    Cropper
  },
  props: {
    size: {
      type: Number,
      default: 1024 * 10
    },
    ratio: {
      type: Number,
      default: 3,
      validator: (val) => val > 0
    },
    ratioTip: {
      type: String,
      default: '宽高3 ：1'
    },
    picWidth: {
      type: Number,
      default: 200,
      validator: (val) => val > 0 && Number.isInteger(val)
    },
    //新增传null
    value: {
      type: [String, Array],
      default: ''
    },
    multiple: {
      type: Boolean,
      default: false
    },
    //是否限制文件格式
    validateSuffix: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'cover'
    },
    //是否支持裁剪
    cropper: {
      type: Boolean,
      default: false
    },
    httpRequest: {
      type: Function,
      default: ajax
    },
    onlyIdentify: {
      type: Boolean,
      default: false
    },
    onlyShow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      TIME: 0,
      dataObj: { token: '', key: '' },
      cropperVisible: false,
      action: 'https://up-as0.qiniup.com',
      dialogVisible: false,
      dialogImageUrl: '',
      loading: false
    }
  },
  computed: {
    tip() {
      return `${this.ratioTip}，大小${this.size / 1024}MB内,格式(JPG,PNG,GIF)`
    },
    fileList() {
      let queryString = '?imageView2/1/w/146/h/146'
      return Array.isArray(this.value)
        ? this.value.map((item) => ({
            url: item.indexOf(queryString) > -1 ? item : item + queryString
          }))
        : this.value
        ? [
            {
              url: this.value.indexOf(queryString) ? this.value : this.value + queryString
            }
          ]
        : []
    }
  },
  methods: {
    beforeUpload(file) {
      /** 是否只识别图片比例 */
      if (this.onlyIdentify) {
        file.url = URL.createObjectURL(file)
        const _self = this
        const newImg = new Image()
        newImg.src = file.url
        newImg.onload = function () {
          let { width: w, height: h } = this
          _self.$emit('identifySuccess', {
            w,
            h
          })
        }
        return false
      }
      //console.log(this.fileList.length > this.limit, 'aaa')
      /** 是否需要校验文件 */
      if (this.validateSuffix) {
        return this.uploadValid(file)
      }
      return this.beginUpload(file)
    },
    uploadValid(file) {
      return new Promise((resolve, reject) => {
        const error = this.$message.error
        const isLimit = file.size / 1024 < this.size
        if (!/(gif|jpg|jpeg|png)$/.test(file.type)) {
          error('上传图片格式不正确!')
          reject()
        }
        if (!isLimit) {
          error(`上传图片大小必须小于${this.size}k`)
          reject()
        }
        file.url = URL.createObjectURL(file)
        const _self = this
        const newImg = new Image()
        newImg.src = file.url
        newImg.onload = function () {
          let { width: w, height: h } = this
          if (parseFloat(w / h).toFixed(1) !== parseFloat(_self.ratio).toFixed(1)) {
            error('图片比例不对，请重新上传')
            reject()
          } else {
            /** resolve 提供开箱操作 */
            resolve(_self.beginUpload(file))
          }
        }
      })
    },
    beginUpload(file) {
      const _self = this
      return new Promise((resolve) => {
        const reader = new FileReader()
        const spark = new SparkMD5.ArrayBuffer()
        const sliceSize = 1024 * 1024
        const end = sliceSize >= file.size ? file.size : sliceSize
        const blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice
        reader.readAsArrayBuffer(blobSlice.call(file, 0, end))
        reader.onload = function (evt) {
          spark.append(evt.target.result)
          const params = {
            type: _self.type,
            originalFilename: spark.end() + file.name
          }
          window.qiniu.getToken(params).then((response) => {
            let { token, fileKey } = response
            _self.dataObj['token'] = token
            _self.dataObj['key'] = fileKey
            resolve(file)
          })
        }
      })
    },
    handleImageSuccess(res) {
      console.log('what', res)
      console.log(Settings.imgUrlOfImg + res.key)
      this.updateProp([...this.value, Settings.imgUrlOfImg + res.key])
    },
    handleExceed() {
      this.$message.warning(`当前限制选择${this.$attrs.limit}个文件，请删除当前图片再上传`)
    },
    handleRemove(file, fileList) {
      console.log('en?', file)
      this.updateProp(fileList.map((item) => item.url))
    },
    handleError(err, file, fileList) {
      console.log(err, file, fileList)
    },
    //更新
    updateProp(urls) {
      if (this.multiple) {
        this.$emit('input', urls)
      } else {
        this.$emit('input', urls.pop() || '')
      }
    },
    onCropCancel(option) {
      console.log(option)
      const uploadFiles = this.$refs.elUpload.uploadFiles
      const index = uploadFiles.findIndex((item) => item.url === option.img)

      index > -1 && uploadFiles.splice(index, 1)
    },
    onCropFinish(blob, option) {
      console.log(blob, option)
      const file = new File([blob], option.name, {
        type: option.type
      })
      console.log(file)
      /** 开始自定义上传，仿照element ui的处理逻辑 */
      const before = this.beforeUpload(file)
      if (before && before.then) {
        before
          .then((file) => {
            this.post(file)
          })
          .finally(() => {
            this.onCropCancel(option)
          })
      }
    },
    handleChange(file) {
      if (this.multiple && this.fileList.length + 1 > this.limit) {
        this.$message.error(`最多上传${this.limit}张图片`)
        return false
      }
      console.log('我来了，哈哈', this.multiple, this.fileList.length)
      if (this.cropper && file.status == 'ready') {
        this.$refs.cropper.show(file)
      }
    },
    /** 自定义上传 */
    post(rawFile) {
      this.loading = true
      const options = {
        file: rawFile,
        data: this.dataObj,
        action: this.action,
        filename: 'file',
        onProgress(e) {
          console.log(e)
        },
        onSuccess: (res) => {
          this.handleImageSuccess(res)
        },
        onError: (err) => {
          this.handleError(err, rawFile)
        },
        onLoadend: () => {
          this.loading = false
        }
      }
      this.httpRequest(options)
    },
    handlePictureCardPreview(file) {
      //console.log(file)
      //debugger
      this.dialogImageUrl = file.url.split('?')[0]
      this.dialogVisible = true
    }
  }
}
</script>

<style lang="scss">
// .v--modal-overlay {
//   z-index: 2006 !important;
// }
</style>
