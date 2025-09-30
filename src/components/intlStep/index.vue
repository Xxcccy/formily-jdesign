<template>
  <div class="step">
    <!-- 吸顶的 Steps 组件 -->
    <div class="step__header">
      <JdCard>
        <JdSteps
          :active="active"
          finish-status="success"
          fill-color="var(--jd-color-surface-200)"
        >
          <JdStep
            v-for="(title, index) in titles"
            :key="index"
            :title="title.label"
          />
        </JdSteps>
      </JdCard>
    </div>

    <!-- 可滚动的内容区域 -->
    <div class="step__content">
      <div class="step__content-inner">
        <slot :active="active"></slot>
      </div>
    </div>

    <!-- 吸底的按钮组 -->
    <div class="step__actions">
      <JdButton v-show="active === 1" @click="() => active--">
        Previous
      </JdButton>
      <JdButton type="primary" @click="() => active++">
        {{ active === 0 ? 'Next' : 'Submit' }}
      </JdButton>
      <JdButton @click="submit">Save Draft</JdButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Form } from '@formily/core'
import { JdButton, JdCard, JdStep, JdSteps } from '@jd/jdesign-vue'
import { inject, nextTick, ref } from 'vue'
import { scrollToField, setFieldError } from '../../utils'

defineOptions({
  name: 'Step',
})

const titles = [
  {
    label: 'Seller Information',
  },
  {
    label: 'Business Information ',
  },
  {
    label: 'Seller Review',
  },
]

const active = ref(0)
const form: Form = inject('form')

nextTick(() => {
  // 设置字段错误
  setFieldError(form, 'fullName', 'This field has an error')
})

const submit = async () => {
  try {
    await form.validate()
    console.log(JSON.parse(JSON.stringify(form.values)))
  } catch (e) {
    scrollToField()
  }
}
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
