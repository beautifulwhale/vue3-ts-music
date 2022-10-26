<template>
  <div>
    <component :is="icon"></component>
  </div>
</template>

<script setup lang='ts'>
interface IIcon {

}
const props = defineProps<IIcon>()
</script>
<style lang='scss' scoped>
</style>