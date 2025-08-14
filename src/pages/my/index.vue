<template>
    <div class="my">
        <ThreeScene />
        <div @click="toNext">下一页</div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import ThreeScene from '@/components/ThreeScene.vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const toNext = () => {
    router.push({
        path: '/details'
    })
}

onMounted(() => {
    console.log("我是my页面,我做了缓存")
})
</script>

<style scoped lang="scss">

</style>