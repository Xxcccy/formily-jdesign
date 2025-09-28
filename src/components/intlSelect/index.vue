<template>
  <div>
    <JdSelect v-model="modelValue">
      <template #custom>
        <div style="display: flex; align-items: center; margin-left: 8px">
          <img
            style="width: 20px; height: 20px; border-radius: 50%"
            :src="selectedIcon"
          />
          <div
            style="
              font-size: 14px;
              font-weight: 400;
              margin-left: 8px;
              line-height: 22px;
              font-family: PingFang SC;
            "
          >
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
          <div style="display: flex; align-items: center">
            <img
              style="width: 20px; height: 20px; border-radius: 50%"
              :src="option.icon"
            />
            <div
              style="
                font-size: 14px;
                font-weight: 400;
                margin-left: 8px;
                font-family: PingFang SC;
              "
            >
              {{ option.label }}
            </div>
          </div>
        </div>
      </jd-option>
    </JdSelect>
  </div>
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

const modelValue = defineModel()

const selectedIcon = computed(() => {
  return props.datasource.find((item) => item.value === modelValue.value)?.icon
})

const selectedLabel = computed(() => {
  return props.datasource.find((item) => item.value === modelValue.value)?.label
})

defineExpose({} as ComponentInstance<typeof Select>)
</script>

<style scoped></style>
