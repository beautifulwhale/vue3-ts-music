<template>
  <div class="text-xl py-3 mt-2 flex items-center text-skin-primary">
    <div>
      {{title}}
    </div>
    <IconPark :icon="Right"></IconPark>
  </div>
</template>

<script setup lang="ts">
import { Right } from '@icon-park/vue-next';
import IconPark from './IconPark.vue';
defineProps<{
  title:string
}>()
</script>

<style scoped lang="scss">

</style>
