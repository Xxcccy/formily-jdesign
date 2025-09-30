<template>
  <div>
    <div v-for="(item, index) in modelValue">
      <JdDivider v-if="index > 0" />
      <FormLayout layout="vertical">
        <div class="form-container">
          <template
            v-for="(formItem, formIndex) in formItemGroup"
            :key="formIndex"
          >
            <div :class="getFormItemWrapperClass(formItem, formIndex)">
              <IntlFormItem v-bind="formItem">
                <component
                  v-if="formItem?.component !== 'UPLOAD'"
                  v-model="item[formItem?.code]"
                  :is="Components[formItem?.component]"
                  :datasource="formItem?.options"
                  :style="getComponentStyle(formItem)"
                />
                <component
                  v-else-if="formItem?.component === 'UPLOAD'"
                  v-model:file-list="item[formItem?.code]"
                  :is="Components[formItem?.component]"
                  :action="formItem?.action"
                />
              </IntlFormItem>
            </div>
          </template>
        </div>
      </FormLayout>
    </div>
    <div>
      <JdButton
        v-if="modelValue.length < 4"
        text
        type="primary"
        @click="modelValue.push({})"
      >
        Add
      </JdButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { JdButton, JdDivider } from '@jd/jdesign-vue'
import { FormLayout } from '../../formily-dongdesign'
import IntlFormItem from '../intlFormItem'
import IntlInput from '../intlInput'
import IntlSelect from '../intlSelect'
import IntlUpload from '../intlUpload'

const props = defineProps<{
  formItemGroup?: Array<Record<string, any>>
}>()

const modelValue = defineModel<Array<Record<string, any>>>()
if (!modelValue.value || modelValue.value.length === 0) {
  modelValue.value = [{}]
}

const Components = {
  INPUT: IntlInput,
  SELECT: IntlSelect,
  UPLOAD: IntlUpload,
}

// 获取表单项包装器的CSS类
const getFormItemWrapperClass = (
  formItem: Record<string, any>,
  index: number,
): string => {
  if (formItem.component === 'SELECT') {
    const prevItem = props.formItemGroup[index - 1]
    const nextItem = props.formItemGroup[index + 1]

    if (
      (prevItem && prevItem.component === 'SELECT') ||
      (nextItem && nextItem.component === 'SELECT')
    ) {
      return 'select-inline-item'
    }
  }
  return 'form-item-wrapper'
}

const getComponentStyle = (
  formItem: Record<string, any>,
): Record<string, any> => {
  if (formItem.component === 'SELECT') {
    return {
      ...formItem.style,
      width: '100%',
    }
  }
  return formItem.style || {}
}
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
