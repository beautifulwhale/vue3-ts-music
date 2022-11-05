<template>
    <qrcode-vue :value='value' :size='size' level='H' />
</template>

<script setup lang='ts'>
import QrcodeVue from 'qrcode.vue';
withDefaults(
    defineProps<{
        value: string,
        size?: number
    }>(),
    {
        value: '',
        size: 100
    }
)
</script>
<style lang='scss' scoped>

</style>