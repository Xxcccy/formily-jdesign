<template>
  <div>
    <Upload
      v-bind="attrs"
      :on-success="handleSuccess"
      :on-preview="handlePictureCardPreview"
    />
  </div>
</template>

<script setup lang="ts">
import { UploadFile, UploadFiles, UploadProps } from '@jd/jdesign-vue'
import { Upload } from '../../formily-dongdesign'
import { useAttrs } from 'vue'

defineOptions({
  name: 'Upload',
})

const attrs = useAttrs()

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
