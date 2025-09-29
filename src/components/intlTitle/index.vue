<template>
  <div
    class="title"
    :class="{
      'title--large': size === 'large',
      'title--normal': size === 'normal',
    }"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'Title',
})

defineProps<{
  size: string
}>()
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
