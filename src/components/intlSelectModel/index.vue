<template>
  <div class="select-model">
    <div
      v-for="item in options"
      class="select-model__item"
      :class="{ 'select-model__item--active': item.active }"
      @click="selectModel(item)"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'SelectModel',
})

const modelValue = defineModel<any>()

const options = [
  { name: 'FLEX POP1', active: false },
  { name: 'FLEX POP2', active: false },
  { name: 'FLEX POP3', active: false },
].map((item) => {
  if (item.name === modelValue.value.name) {
    return modelValue.value
  }
  return item
})

const selectModel = (model) => {
  if (!model.active) {
    for (const item of options) {
      item.active = false
    }
    model.active = true
    modelValue.value = model
  }
}

defineExpose({})
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
