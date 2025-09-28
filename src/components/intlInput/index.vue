<template>
  <div>
    <JdInput v-bind="attrs" style="width: 240px" show-word-limit />
  </div>
</template>

<script setup lang="ts">
import { JdInput } from '@jd/jdesign-vue'
import { ComponentInstance, useAttrs } from 'vue'

defineOptions({
  name: 'Input',
})

const attrs = useAttrs()

defineExpose({} as ComponentInstance<typeof JdInput>)
</script>
