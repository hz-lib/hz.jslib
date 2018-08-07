<template>
<div>
  <el-upload
    ref="upload"
    action="http://localhost:7777/api/values/upload"
    :file-list="fileList"
    :auto-upload="false"
    :on-change="onChange"
    :before-upload="beforeUpload">
    <el-button
      slot="trigger"
      size="small"
      type="primary">
      选择文件
    </el-button>
    <el-button
      style="margin-left: 10px;"
      size="small"
      type="success"
      @click="sumbit"
      v-if="isComplete">
      上传
    </el-button>
  </el-upload>
  <img :src="imgSrc" />
  <img :src="blobInfo" />
</div>
</template>
<script>

import Vue from 'vue'
import {Upload, Button} from 'element-ui'
import { CompressPicture } from '@/utils/pictureHelper'
Vue.use(Upload)
Vue.use(Button)

export default {
  data () {
    return {
      fileList: [],
      imgSrc: '',
      blobInfo: null,
      isComplete: false
    }
  },
  methods: {
    onChange (file) {
      // this.isComplete = false
      if (file.status !== 'ready') return
      CompressPicture((data64, newBlob) => {
        this.imgSrc = data64
        this.blobInfo = newBlob
        this.isComplete = true
      }, {blob: file.raw})
    },
    sumbit () {
      this.$refs.upload.submit()
    },
    beforeUpload () {
      return Promise.resolve(this.blobInfo)
    }
  }
}
</script>
<style scoped>

</style>
