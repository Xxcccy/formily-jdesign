<template>
  <FormProvider :form="form">
    <SchemaField :schema="schema" />
  </FormProvider>
</template>

<script setup lang="ts">
import { FormProvider, ISchema } from '@formily/vue'
import { provide } from 'vue'
import { useSchemaFiled } from '../../hooks'

defineOptions({
  name: 'Form',
})

const props = defineProps<{
  form: any
  schema: ISchema
}>()

const SchemaField = useSchemaFiled()

provide('form', props.form)
</script>
