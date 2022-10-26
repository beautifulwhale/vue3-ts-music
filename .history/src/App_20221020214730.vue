<template>
  <div>
    <KeepAlive>
      <!-- <router-view></router-view> -->
      <router-view v-slot="{ Component }">
            <transition name="router-fade" mode="out-in">
                <keep-alive>
                    <component :is="Component"/>
                </keep-alive>
            </transition>
        </router-view>

    </KeepAlive>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
})

</script>
<style lang='scss' scoped>

</style>