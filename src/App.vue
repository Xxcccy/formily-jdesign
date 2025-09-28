<template>
  <div style="height: 100%; padding: 0 30%">
    <jd-config-provider :size="size" :z-index="zIndex">
      <IntlStep v-slot="slotProps">
        <IntlForm :config="slotProps.active" :form="form" />
      </IntlStep>
    </jd-config-provider>
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue'
import { createForm } from '@formily/core'
import { JdConfigProvider } from '@jd/jdesign-vue'
import IntlForm from './components/intlForm'
import IntlStep from './components/intlStep'

const size = 'small'
const zIndex = ref(3000)

// 在顶层创建 form 实例并提供给子组件
const form = createForm()
provide('form', form)
</script>
