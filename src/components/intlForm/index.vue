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
import { FormConsumer, FormProvider, ISchema } from '@formily/vue'
import { JdButton } from '@jd/jdesign-vue'
import {
  businessInformationConfig,
  sellerInformationConfig,
  sellerReviewConfig,
} from '../../config'
import { useCreate, useSchemaFiled } from '../../hooks'

defineOptions({
  name: 'Form',
})

const form = createForm()
// 初始化 form 数据
// form.values = {
//   sellerInformation: {
//     invitationCode: '123',
//   },
// }
const create = useCreate()
const step = create.formStep('void')
const formStep = step.formStepInstance

const schema: ISchema = {
  type: 'object',
  properties: {
    step: {
      ...step.schema,
      properties: {
        sellerInformation: sellerInformationConfig,
        businessInformation: businessInformationConfig,
        sellerReview: sellerReviewConfig,
      },
    },
  },
}

const SchemaField = useSchemaFiled(create.components, create.scope)

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
