<template>
  <div>
    <div v-for="(item, index) in modelValue">
      <JdDivider v-if="index > 0" />
      <FormLayout layout="vertical">
        <div style="display: flex; justify-content: space-between">
          <IntlFormItem label="123" style="padding: 0">
            <JdSelect v-model="item.idType"></JdSelect>
          </IntlFormItem>
          <IntlFormItem label="456" style="padding: 0">
            <IntlSelect
              v-model="item.country"
              :datasource="options"
            ></IntlSelect>
          </IntlFormItem>
        </div>
        <IntlFormItem label="789" style="padding: 0">
          <IntlUpload
            v-model:file-list="item.photo"
            action="https://feqd-ftf.jd.com/api/jdesign/upload"
            list-type="picture-card"
          />
        </IntlFormItem>
        <IntlFormItem label="xx" style="padding: 0">
          <IntlInput v-model="item.fullName" />
        </IntlFormItem>
        <IntlFormItem label="cc" style="padding: 0">
          <IntlInput v-model="item.idNumber" />
        </IntlFormItem>
      </FormLayout>
    </div>
    <JdButton type="text" @click="modelValue.push({})">Add</JdButton>
  </div>
</template>

<script setup lang="ts">
import { JdButton, JdDivider, JdSelect } from '@jd/jdesign-vue'
import { FormLayout } from '../../formily-dongdesign'
import IntlFormItem from '../intlFormItem'
import IntlInput from '../intlInput'
import IntlSelect from '../intlSelect'
import IntlUpload from '../intlUpload'

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
