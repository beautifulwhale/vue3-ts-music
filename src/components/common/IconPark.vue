<template>
    <div class="text-skin-icon">
        <component :is="icon" :size="size" :spin="spin" :fill="fill" :strokeLinecap="strokeLinecap"
            :strokeLinejoin="strokeLinejoin" :strokeWidth="strokeWidth"></component>
    </div>
</template>

<script setup lang='ts'>
import { Icon } from "@icon-park/vue-next/lib/runtime";


interface IIcon {
    icon: Icon
    theme?: 'outline' | 'filled' | 'two-tone' | 'multi-color',
    size?: number | string,
    spin?: boolean,
    fill?: string | string[],
    strokeLinecap?: 'butt' | 'round' | 'square',
    strokeLinejoin?: 'miter' | 'round' | 'bevel',
    strokeWidth?: number
}
defineProps<IIcon>()
</script>
<style lang='scss' scoped>

</style>