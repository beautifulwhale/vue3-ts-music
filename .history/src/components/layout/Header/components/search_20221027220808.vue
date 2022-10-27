<template>
    <el-autocomplete
    v-model="state"
    :fetch-suggestions="querySearchAsync"
    placeholder="Please input"
    @select="handleSelect"
  />
</template>

<script setup lang='ts'>

</script>
<style lang='scss' scoped>
</style>