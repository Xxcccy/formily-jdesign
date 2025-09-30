<template>
  <div class="input">
    <JdInput v-model="modelValue" v-bind="attrs" show-word-limit />
  </div>
</template>

<script setup lang="ts">
import { JdInput } from '@jd/jdesign-vue'
import { ComponentInstance, useAttrs } from 'vue'

defineOptions({
  name: 'Input',
})

const attrs = useAttrs()
const modelValue = defineModel<string | number>()

defineExpose({} as ComponentInstance<typeof JdInput>)
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
