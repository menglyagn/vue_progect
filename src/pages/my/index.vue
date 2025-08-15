<template>
    <div class="my">
        <ThreeScene />
        <div class="btn1" @click="toNext">下一页</div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import ThreeScene from '@/components/ThreeScene.vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const toNext = () => {
    router.push({
        path: '/page1'
    })
}

onMounted(() => {
    console.log("我是my页面,我做了缓存")
})
</script>

<style scoped lang="scss">
.my {
    width: 100%;
    height: 100vh;
    position: relative;
    .btn1 {
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
    }
}
</style>