<template>
    <div class="home">
        <div class="z-flex-center">
            <img src="../../assets/logo.png" alt="">
        </div>
        <h1 class="z-t-c">This is home page.</h1>
        <h3 class="z-t-c">
            <router-link to="/details/1">去详情页</router-link>
        </h3>
    </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';

onMounted(() => {
    console.log("我是home页面,我做了缓存")
})
</script> 

<style scoped lang="scss">

</style>