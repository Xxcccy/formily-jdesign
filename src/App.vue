<template>
  <div style="height: 100%; padding: 0 30%">
    <jd-config-provider :size="size" :z-index="zIndex">
      <IntlStep v-slot="slotProps">
        <IntlForm :schema="getSchema(slotProps.active)" :form="form" />
      </IntlStep>
    </jd-config-provider>
  </div>
</template>

<script setup lang="ts">
import { ref, provide, computed } from 'vue'
import { createForm } from '@formily/core'
import { ISchema } from '@formily/vue'
import { JdConfigProvider } from '@jd/jdesign-vue'
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

  if (config === ConfigEnum.SELLER_INFORMATION) {
    configProperties = sellerInformationConfig
  } else if (config === ConfigEnum.BUSINESS_INFORMATION) {
    configProperties = businessInformationConfig
  } else {
    configProperties = sellerReviewConfig
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
