<template>
    <div class="flex">
        <div class="w-44 h-44">
            <img class="rounded-xl object-cover" :src="coverImgUrl" alt="">
        </div>
        <div class="pl-4 pt-2">
            <div class="text-2xl font-bold">{{ name }}</div>
            <div class="flex pt-2">
                <div class="w-30 h-10 flex items-center rounded-full">
                    <el-avatar :size="30" :src="avatarUrl" />
                    <span class="text-sm ml-2 text-gray-400">{{ nickname }}</span>
                </div>
                <div class="pl-5 flex items-center">
                    <div class="text-sm ml-2 text-gray-400" v-for="item in tags" :key="item">
                        #{{ item }}
                    </div>
                </div>
            </div>
            <div class="mt-2 w-60 text-sm whitespace-nowrap overflow-hidden text-ellipsis">{{ description }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">

defineProps<{
    coverImgUrl: string,
    name: string,
    tags: string[],
    avatarUrl: string,
    nickname: string,
    description: string
}>()
</script>
<style lang="scss" scoped>

</style>
