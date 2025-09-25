<template>
  <div style="padding: 0 50px">
    <component :is="h(FormItem, { ...attrs, ...props }, slots)" />
  </div>
</template>

<script setup lang="ts">
import { ComponentInstance, h, useAttrs, useSlots } from 'vue'
import { FormItem, FormItemProps } from '../../formily-dongdesign'

defineOptions({
  name: 'FormItem',
})

const attrs = useAttrs()
const slots = useSlots()

const props: FormItemProps = {
  labelWrap: true,
  labelAlign: 'right',
}

defineExpose({} as ComponentInstance<typeof FormItem>)
</script>
