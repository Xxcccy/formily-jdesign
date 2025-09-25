<template>
  <div style="display: flex; flex-direction: column; height: 100%">
    <div style="padding: 0 20%">
      <FormProvider :form="form">
        <SchemaField :schema="schema" />
      </FormProvider>
    </div>
    <div
      style="
        display: flex;
        justify-content: center;
        margin-top: auto;
        box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
        padding: 16px 0;
        background: white;
        border-top: 1px solid #f0f0f0;
      "
    >
      <FormConsumer>
        <template #default>
          <JdButton :disabled="!formStep.allowBack" @click="back">
            上一步
          </JdButton>
          <JdButton
            :disabled="!formStep.allowNext"
            type="primary"
            @click="next"
          >
            下一步
          </JdButton>
          <JdButton @click="submit" type="primary">提交</JdButton>
        </template>
      </FormConsumer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { createForm } from '@formily/core'
import { createSchemaField, FormConsumer, FormProvider } from '@formily/vue'
import { JdButton } from '@jd/jdesign-vue'
import {
  businessInformationConfig,
  sellerInformationConfig,
  sellerReviewConfig,
} from '../../config'
import { FormStep } from '../../formily-dongdesign'

defineOptions({
  name: 'Form',
})

const form = createForm()
const formStep = FormStep.createFormStep()

const schema = {
  type: 'object',
  properties: {
    step: {
      type: 'void',
      'x-component': 'FormStep',
      'x-component-props': {
        formStep: '{{formStep}}',
        'finish-status': 'success',
      },
      properties: {
        sellerInformation: sellerInformationConfig.config,
        businessInformation: businessInformationConfig.config,
        sellerReview: sellerReviewConfig.config,
      },
    },
  },
}

const { SchemaField } = createSchemaField({
  // 注册 Schema 中可能会用到的组件
  components: {
    ...sellerInformationConfig.components,
    ...businessInformationConfig.components,
    ...sellerReviewConfig.components,
  },
  // 注册 Schema 中可能会用到的函数、变量等
  scope: {
    formStep,
    ...sellerInformationConfig.scopes,
    ...businessInformationConfig.scopes,
    ...sellerReviewConfig.scopes,
  },
})

const back = () => {
  formStep.back()
}

const next = () => {
  formStep.next()
}

const submit = () => {
  form.validate()
  console.log(JSON.parse(JSON.stringify(form.values)))
}
</script>
