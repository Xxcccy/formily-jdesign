<template>
  <div style="height: 100%">
    <JdConfigProvider :size="size" :z-index="zIndex">
      <router-view></router-view>
    </JdConfigProvider>
  </div>
</template>

<script setup lang="ts">
import { JdConfigProvider } from '@jd/jdesign-vue'
import { ref } from 'vue'

const size = 'small'
const zIndex = ref(3000)
</script>
