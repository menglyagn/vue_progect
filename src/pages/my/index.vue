<template>
    <div class="my">
        <div class="z-flex-center">
            <img src="../../assets/logo.png" alt="">
        </div>
        <h1 class="z-t-c">This is my page.</h1>
    </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';

onMounted(() => {
    console.log("我是my页面,我做了缓存")
})
</script>

<style scoped lang="scss">

</style>