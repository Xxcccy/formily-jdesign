<template>
  <div style="height: 100%; padding: 0 10%">
    <jd-config-provider :size="size" :z-index="zIndex">
      <IntlStep v-slot="slotProps">
        <IntlForm :schema="getSchema(slotProps.active)" :form="form" />
      </IntlStep>
    </jd-config-provider>
  </div>
</template>

<script setup lang="ts">
import { createForm } from '@formily/core'
import { ISchema } from '@formily/vue'
import { JdConfigProvider } from '@jd/jdesign-vue'
import { provide, ref } from 'vue'
import IntlForm from './components/intlForm'
import IntlStep from './components/intlStep'
import {
  businessInformationConfig,
  sellerInformationConfig,
  sellerReviewConfig,
} from './config'
import { ConfigEnum } from './constants'
import { useCreate } from './hooks'

const size = 'small'
const zIndex = ref(3000)

const form = createForm()
provide('form', form)

const create = useCreate()

const getSchema = (config: string | number): ISchema => {
  let configProperties = {}

  switch (config) {
    case ConfigEnum.SELLER_INFORMATION:
      configProperties = sellerInformationConfig
      break
    case ConfigEnum.BUSINESS_INFORMATION:
      configProperties = businessInformationConfig
      break
    default:
      configProperties = sellerReviewConfig
      break
  }

  return {
    properties: {
      layout: {
        ...create.formLayout({ componentProps: { layout: 'vertical' } }),
        properties: configProperties,
      },
    },
  }
}
</script>
