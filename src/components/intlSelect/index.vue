<template>
  <div>
    <component :is="h(Select, { ...attrs }, slots)"></component>
  </div>
</template>

<script setup lang="ts">
import { ComponentInstance, h, useAttrs, useSlots } from 'vue'
import { Select } from '../../formily-dongdesign'

defineOptions({
  name: 'Select',
})

const attrs = useAttrs()
const slots = useSlots()

defineExpose({} as ComponentInstance<typeof Select>)
</script>

<style scoped></style>
