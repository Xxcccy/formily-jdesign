<template>
  <div :class="{ large: size === 'large', normal: size === 'normal' }">
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
.large {
  font-size: 28px;
  font-weight: 600;
  line-height: 36px;
}

.normal {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}
</style>
