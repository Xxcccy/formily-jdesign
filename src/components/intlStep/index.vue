<template>
  <div class="step">
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

    <slot :active="active"></slot>

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
import { inject, ref } from 'vue'

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

const submit = () => {
  console.log(JSON.parse(JSON.stringify(form.values)))
}
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
