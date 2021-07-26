<template>
  <market-comp />
</template>
<script lang="ts" setup>
import { ref, onMounted, readonly, defineAsyncComponent } from 'vue'
const marketComp = defineAsyncComponent(
  () => import('../components/market')
)

</script>

