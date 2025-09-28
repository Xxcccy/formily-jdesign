<template>
  <Upload
    class="upload"
    v-bind="attrs"
    :on-success="handleSuccess"
    :on-preview="handlePictureCardPreview"
  >
    <img v-if="imageUrl" :src="imageUrl" class="upload__avatar" />
    <div v-else class="upload__content">
      <jd-icon class="upload__icon">
        <Plus />
      </jd-icon>
      <div class="upload__text">upload</div>
    </div>
  </Upload>
</template>

<script setup lang="ts">
import { JdIcon, UploadFile, UploadFiles, UploadProps } from '@jd/jdesign-vue'
import { Upload } from '../../formily-dongdesign'
import { ref, useAttrs } from 'vue'
import { Plus } from '@jd/jdesign-icons-vue'

defineOptions({
  name: 'Upload',
})

const attrs = useAttrs()
const imageUrl = ref('')

const handleSuccess = (
  response: any,
  uploadFile: UploadFile,
  uploadFiles: UploadFiles,
) => {
  console.log({
    response,
    uploadFile,
    uploadFiles,
  })
}

const handlePictureCardPreview: UploadProps['onPreview'] = (
  uploadFile: UploadFile,
) => {
  console.log(uploadFile)
}
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
