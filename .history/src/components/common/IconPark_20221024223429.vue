<template>
    <div>
        <component :is="icon"></component>
    </div>
</template>

<script setup lang='ts'>
interface IIcon {
    theme: 'outline' | 'filled' | 'two-tone' | 'multi-color',
    size: number | string,
    spin: boolean,
    fill: string | string[],
    strokeLinecap: 'butt' | 'round' | 'square',
    strokeLinejoin: 'miter' | 'round' | 'bevel',
    strokeWidth: number
}
const props = defineProps<IIcon>()
</script>
<style lang='scss' scoped>

</style>