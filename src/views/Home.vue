<template>
  <div class="header"></div>
  <div class="home">
    <IntlStep v-slot="slotProps" class="home__step-container">
      <IntlForm :schema="getSchema(slotProps.active)" :form="form" />
    </IntlStep>
    <div class="home__faq-sidebar">
      <div class="home__faq-header">
        <span class="home__faq-title">FAQ</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { createForm } from '@formily/core'
import { ISchema } from '@formily/vue'
import { provide } from 'vue'
import IntlForm from '../components/intlForm'
import IntlStep from '../components/intlStep'
import {
  businessInformationConfig,
  sellerInformationConfig,
  sellerReviewConfig,
} from '../config'
import { ConfigEnum } from '../constants'
import { useCreate } from '../hooks'

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

<style scoped>
@import './index.scss';
</style>
