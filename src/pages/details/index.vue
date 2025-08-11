<template>
    <div class="details">
        <van-nav-bar title="Details" left-text="返回" left-arrow @click-left="router.back()" />
        <div class="z-flex-center z-p-50 z-font-40">this is details page.</div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter()
onMounted(() => {
    console.log("我是details页面，我没有缓存")
})
</script>

<style lang="scss" scoped>
    
</style>