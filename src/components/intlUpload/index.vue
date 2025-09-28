<template>
  <Upload
    class="avatar-uploader"
    v-bind="attrs"
    :on-success="handleSuccess"
    :on-preview="handlePictureCardPreview"
  >
    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
    <div v-else class="avatar-uploader-content">
      <jd-icon class="avatar-uploader-icon">
        <Plus />
      </jd-icon>
      <div class="avatar-uploader-text">upload</div>
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

<style lang="scss">
.avatar-uploader .avatar {
  width: 120px;
  height: 120px;
  display: block;
}

.avatar-uploader .jd-upload {
  border: var(--jd-border-width-1) dashed var(--jd-color-line-200);
  border-radius: var(--jd-radius-m);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: 0.2s;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-uploader-content {
  text-align: center;
  color: var(--jd-color-text-200);
}

.jd-icon.avatar-uploader-icon {
  font-size: 28px;
  text-align: center;
}

.avatar-uploader-text {
  font-size: var(--jd-font-size-14);
  line-height: var(--jd-line-height-14);
}

.avatar-uploader .jd-upload:hover {
  border-color: var(--jd-color-brand-normal);
  color: var(--jd-color-brand-normal);

  .jd-icon.avatar-uploader-icon,
  .avatar-uploader-text {
    color: var(--jd-color-brand-normal);
  }
}

.avatar-uploader .jd-upload.is-disabled {
  background: var(--jd-color-fill-100);
  border: 1px solid var(--jd-color-line-200);
  cursor: not-allowed;

  .jd-icon.avatar-uploader-icon,
  .avatar-uploader-text {
    color: var(--jd-color-text-100);

    &:hover {
      color: var(--jd-color-text-100);
    }
  }
}
</style>
