<template>
    <Transition name="up">
        <div class="toasts" v-show="visible">
            {{ text }}
        </div>
    </Transition>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue";
withDefaults(defineProps<{
    text: string
}>(), {
    text: '恭喜发财'
})
const visible = ref(false);
onMounted(() => {
    visible.value = true;
});
</script>
<style scoped lang="scss">
.toasts {
    max-width: 95vw;
    min-width: 280px;
    min-height: 56px;
    position: fixed;
    z-index: 9;
    left: 50%;
    bottom: 16%;
    border: 1px solid #e4e4e4;
    background: rgba(17, 17, 17, 0.7);
    box-shadow: 0px 10px 50px 0px;
    color: #fff;
    border-radius: 18px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-family: HuaweiSans-Regular;
    transform: translateX(-50%) translateY(-50%);
    padding: 8px;
    line-height: 20px;
    white-space: pre;
}

.up-enter-from {
    bottom: 0;
    opacity: 0;
}

.up-enter-active {
    transition: all 0.5s;
}

.up-enter-to {
    opacity: 1;
    bottom: 16%;
}
</style>
  