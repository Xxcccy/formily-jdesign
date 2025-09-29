<template>
  <JdSelect v-model="modelValue" class="select">
    <template #custom>
      <div class="select__custom-wrapper">
        <img class="select__custom-icon" :src="selectedIcon" />
        <div class="select__custom">
          {{ selectedLabel }}
        </div>
      </div>
    </template>
    <jd-option
      v-for="option in datasource"
      :key="option.value"
      :label="option.label"
      :value="option.value"
    >
      <div>
        <div class="select__option">
          <img class="select__option-icon" :src="option.icon" />
          <div class="select__option-label">
            {{ option.label }}
          </div>
        </div>
      </div>
    </jd-option>
  </JdSelect>
</template>

<script setup lang="ts">
import { JdOption, JdSelect } from '@jd/jdesign-vue'
import { ComponentInstance, computed } from 'vue'
import { Select } from '../../formily-dongdesign'

defineOptions({
  name: 'Select',
})

interface Props {
  datasource?: Array<{
    label: string
    value: any
    icon: string
    [key: string]: any
  }>
}

const props = withDefaults(defineProps<Props>(), {
  datasource: () => [],
})

const modelValue = defineModel<any>()

const selectedIcon = computed(() => {
  return props.datasource.find((item) => item.value === modelValue.value)?.icon
})

const selectedLabel = computed(() => {
  return props.datasource.find((item) => item.value === modelValue.value)?.label
})

defineExpose({} as ComponentInstance<typeof JdSelect>)
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
