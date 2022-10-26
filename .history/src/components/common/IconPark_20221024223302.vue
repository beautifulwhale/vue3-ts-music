<template>
  <div>
    <component :is="icon"></component>
  </div>
</template>

<script setup lang='ts'>
interface IIcon {
    theme:'outline' | 'filled' | 'two-tone' | 'multi-color',
    
}
const props = defineProps<IIcon>()
</script>
<style lang='scss' scoped>
</style>