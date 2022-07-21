<!--cropper.vue-->
<template>
  <div>
    <el-dialog :visible.sync="visible" :modal="false" title="图片裁剪" width="800px" :close-on-press-escape="false" :close-on-click-modal="false" :show-close="false">
      <div class="crop-container" v-show="!showPreview">
        <div class="crop-box">
          <vue-cropper ref="cropper" :autoCrop="cropperOption.autoCrop" :autoCropHeight="cropperOption.autoCropHeight" :autoCropWidth="cropperOption.autoCropWidth" :canMove="cropperOption.canMove" :canMoveBox="cropperOption.canMoveBox" :canScale="cropperOption.canScale" :centerBox="cropperOption.centerBox" :enlarge="cropperOption.enlarge" :fixedBox="cropperOption.fixedBox" :fixed="cropperOption.fixed" :full="cropperOption.full" :high="cropperOption.high" :img="cropperOption.img" :info="true" :infoTrue="cropperOption.infoTrue" :limitMinSize="cropperOption.limitMinSize" :maxImgSize="cropperOption.maxImgSize" :mode="cropperOption.mode" :original="cropperOption.original" :outputSize="cropperOption.size" :outputType="cropperOption.outputType" :fixedNumber="cropperOption.fixedNumber" @cropMoving="onCropMoving" @imgLoad="onImgLoad" @realTime="onRealTime" />
        </div>
        <div class="crop-action">
          <el-button @click="onConfirm" type="primary">确 定</el-button>
          <el-button @click="showPreview = true">预 览</el-button>
          <el-button @click="onCancel">取 消</el-button>
        </div>
      </div>
      <div class="crop-container" v-show="showPreview">
        <div :style="previews.div" class="crop-preview">
          <img :src="previews.url" :style="previews.img" alt />
        </div>
        <div class="crop-action">
          <el-button @click="onConfirm" type="primary">确 定</el-button>
          <el-button @click="showPreview = false">取消预览</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { VueCropper } from 'vue-cropper'
export default {
  name: 'cropper-upload',
  props: {
    fixedNumber: {
      type: Array,
      default: () => [1, 1],
    },
  },
  components: {
    VueCropper,
  },
  data() {
    return {
      visible: false,
      previews: {},
      showPreview: false,
      crap: false,
      cropperOption: {
        img: '',
        size: 1, // 输出图片压缩比, 默认 1
        fixedNumber: this.fixedNumber,
        full: true, // 是否输出原图比例的截图
        infoTrue: true, // 截图信息展示是否时真实的输出宽高
        outputType: 'png',
        canScale: false, // 是否开启滚轮缩放大小
        canMove: false, // 能否拖动图片
        canMoveBox: true, // 能否拖动截图框
        fixed: true, // 固定宽高比
        fixedBox: false, // 截图框固定大小
        original: false, // 上传图片时，是否显示原始宽高
        autoCrop: true, // 是否自动生成截图框
        // 只有自动截图开启 宽度高度才生效
        autoCropWidth: 200,
        autoCropHeight: 200,
        centerBox: true, // 截图框是否限制在图片里(只有在自动生成截图框时才生效)
        high: false, // 是否根据 dpr 生成适合屏幕的高清图片
        cropData: {},
        enlarge: 1, // 按照截图框比例输出，默认 1
        mode: 'contain', // 图片的默认渲染方式
        maxImgSize: 2000, // 上传图片时图片最大大小(默认会压缩尺寸到这个大小)
        limitMinSize: [200, 200], // 截图框最小限制
        name: '',
        type: '',
      },
    }
  },
  computed: {
    cropper() {
      return this.$refs.cropper
    },
  },
  methods: {
    show(file) {
      console.log(file)
      this.cropperOption.img = file.url
      this.cropperOption.name = file.name
      this.cropperOption.type = file.raw.type
      this.$nextTick(() => {
        this.visible = true
      })
    },
    hide() {
      this.visible = false
    },
    // 实时预览函数
    // data 中保存了需要预览的样式及 url，直接用就行了
    onRealTime(data) {
      // console.log('onRealTime -> data', data);
      this.previews = data
    },
    onImgLoad(msg) {
      console.log('onImgLoad -> msg', msg)
      // 图片加载完成后，获取图片的真实宽高
      // 以最小的那个值作为裁剪框默认大小
      const { trueWidth, trueHeight } = this.cropper
      const width = Math.min(trueWidth, trueHeight)
      this.cropperOption.autoCropWidth = width
      this.cropperOption.autoCropHeight = width
    },
    onCropMoving(data) {
      this.cropperOption.cropData = data
    },
    onConfirm() {
      // 获取裁剪后的 blob 数据，传递到外部
      this.$refs.cropper.getCropBlob((blob) => {
        console.log('crop onConfirm -> blob', blob)
        this.hide()
        this.$emit('on-finish', blob, this.cropperOption)
      })
    },
    onCancel() {
      this.hide()
      this.$emit('on-cancel', this.cropperOption)
    },
  },
}
</script>

<style lang="scss" scoped>
.crop-container {
  display: flex;
  align-items: center;
}

.crop-box {
  margin: 0 auto;
  width: 700px;
  height: 600px;
}

.crop-preview {
  margin: auto;
  border: 1px dotted #e4e4e4;
  overflow: hidden;
}

.crop-action {
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.el-button {
  width: 98px;
  margin-bottom: 20px;
  margin-left: 10px;
}
</style>