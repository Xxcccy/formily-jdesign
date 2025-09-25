<template>
  <div style="height: 100%">
    <jd-config-provider :size="size" :z-index="zIndex">
      <IntlForm />
    </jd-config-provider>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { JdConfigProvider } from '@jd/jdesign-vue'
import IntlForm from './components/intlForm'

const size = 'small'
const zIndex = ref(3000)
</script>
