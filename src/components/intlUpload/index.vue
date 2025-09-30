<template>
  <JdUpload
    class="upload"
    v-bind="attrs"
    list-type="picture-card"
    :on-success="handleSuccess"
    :on-preview="handlePictureCardPreview"
  >
    <img v-if="imageUrl" :src="imageUrl" class="upload__avatar" />
    <div v-else class="upload__content">
      <JdIcon class="upload__icon">
        <Plus />
      </JdIcon>
      <div class="upload__text">upload</div>
    </div>
  </JdUpload>
</template>

<script setup lang="ts">
import { Plus } from '@jd/jdesign-icons-vue'
import {
  JdIcon,
  JdUpload,
  UploadFile,
  UploadFiles,
  UploadProps,
} from '@jd/jdesign-vue'
import { ComponentInstance, ref, useAttrs } from 'vue'

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

defineExpose({} as ComponentInstance<typeof JdUpload>)
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
