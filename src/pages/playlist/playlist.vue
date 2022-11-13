<template>
    <div>
        playlist...
    </div>
</template>

<script setup lang='ts'>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

console.log(route.params);


</script>
<style lang='scss' scoped>

</style>