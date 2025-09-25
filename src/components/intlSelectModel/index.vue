<template>
  <div class="container">
    <div
      v-for="item in options"
      class="model"
      :class="{ active: item.active }"
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

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-between;
  padding: 0 50px;

  .model {
    width: 150px;
    height: 80px;
    border: 2px solid gray;
    border-radius: 4px;
    text-align: center;
    align-content: center;

    &:hover {
      cursor: pointer;
    }
  }

  .active {
    border: 2px solid blue;
  }
}
</style>
