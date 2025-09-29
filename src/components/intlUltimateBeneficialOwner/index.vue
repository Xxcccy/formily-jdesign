<template>
  <div>
    <div v-for="item in modelValue">
      <div style="display: flex; justify-content: space-between">
        <JdSelect v-model="item.idType"></JdSelect>
        <IntlSelect v-model="item.country" :datasource="options"></IntlSelect>
      </div>
      <IntlUpload
        v-model:file-list="item.photo"
        action="https://feqd-ftf.jd.com/api/jdesign/upload"
        list-type="picture-card"
      />
      <IntlInput v-model="item.fullName" />
      <IntlInput v-model="item.idNumber" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { JdSelect } from '@jd/jdesign-vue'
import IntlUpload from '../intlUpload'
import IntlInput from '../intlInput'
import IntlSelect from '../intlSelect'

const modelValue = defineModel<Array<Record<string, any>>>()
modelValue.value = [{}]

const options = [
  {
    label: 'China Mainland',
    value: 1,
    icon: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
  },
  {
    label: 'Hong Kong, China',
    value: 2,
    icon: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
  },
  {
    label: 'United Kingdom',
    value: 3,
    icon: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
  },
]
</script>

<style scoped></style>
