<template>
    <div class="mt-3">
        <div v-if="isShowCollaspe">
            <div class="text-sm">
                <span v-if="!isCollapse">{{ description.substring(0, endLength) }}...</span>
                <span v-else>{{ description }}</span>
                <span @click="handleCollapse" class="ml-2 text-sm cursor-pointer text-gray-400">{{ !isCollapse ? '展开' :
                        '收起'
                }}</span>
            </div>
        </div>
        <div v-else class="text-sm">
            {{ description }}
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';

const prop = defineProps<{
    description: string,
    endLength: number,
    isShowCollaspe: boolean
}>();

const isCollapse = ref(false);

const handleCollapse = () => {
    isCollapse.value = !isCollapse.value;
}

</script>
<style lang='scss' scoped>

</style>