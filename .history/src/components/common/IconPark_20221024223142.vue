<template>
  <div>
    <component :is="icon"></component>
  </div>
</template>

<script setup lang='ts'>
const props = defineProps({
    th
})
</script>
<style lang='scss' scoped>
</style>