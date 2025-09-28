<template>
  <div class="form-item">
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
  labelAlign: 'left',
  colon: false,
}

defineExpose({} as ComponentInstance<typeof FormItem>)
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
