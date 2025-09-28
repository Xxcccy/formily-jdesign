<template>
  <FormProvider :form="form">
    <SchemaField :schema="schema" />
  </FormProvider>
</template>

<script setup lang="ts">
import { FormProvider, ISchema } from '@formily/vue'
import { provide, ref, watch } from 'vue'
import {
  businessInformationConfig,
  sellerInformationConfig,
  sellerReviewConfig,
} from '../../config'
import { ConfigEnum } from '../../constants'
import { useCreate, useSchemaFiled } from '../../hooks'

defineOptions({
  name: 'Form',
})

const props = defineProps<{
  config: string | number
  form: any
}>()

// 直接使用 props.form，不需要解构
// 初始化 form 数据
// form.values = {
//   sellerInformation: {
//     invitationCode: '123',
//   },
// }
const create = useCreate()

const schema = ref<ISchema>({
  properties: {
    layout: {
      ...create.formLayout({ componentProps: { layout: 'vertical' } }),
      properties: {
        sellerInformation: sellerInformationConfig,
      },
    },
  },
})

const freshConfig = (config: object) => {
  schema.value.properties['layout'].properties = config
}

watch(
  () => props.config,
  (n) => {
    if (n === ConfigEnum.SELLER_INFORMATION) {
      freshConfig({
        sellerInformation: sellerInformationConfig,
      })
    } else if (n === ConfigEnum.BUSINESS_INFORMATION) {
      freshConfig({
        businessInformation: businessInformationConfig,
      })
    } else {
      freshConfig({
        sellerReview: sellerReviewConfig,
      })
    }
  },
  { immediate: true },
)

const SchemaField = useSchemaFiled()

provide('form', props.form)
</script>
