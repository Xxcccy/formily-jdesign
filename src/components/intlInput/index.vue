<template>
  <div>
    <component :is="h(JdInput, { showWordLimit: true, ...attrs }, slots)" />
  </div>
</template>

<script setup lang="ts">
import { JdInput } from '@jd/jdesign-vue'
import { ComponentInstance, h, useAttrs, useSlots } from 'vue'

defineOptions({
  name: 'Input',
})

const attrs = useAttrs()
const slots = useSlots()

defineExpose({} as ComponentInstance<typeof JdInput>)
</script>
