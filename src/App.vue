<template>
    <div class="container">
        <router-view v-slot="{ Component }">
            <keep-alive>
                <component :is="Component" :key="route.name" v-if="route.meta.keepAlive"></component>
            </keep-alive>
            <component :is="Component" :key="route.name" v-if="!route.meta.keepAlive"></component>
        </router-view>
    </div>
    <div class="zml-tabbar" v-if="route.meta.show">
        <van-tabbar route placeholder inactive-color="#ccc" active-color="#41B883">
            <van-tabbar-item icon="wap-home" to="/home">首页</van-tabbar-item>
            <van-tabbar-item icon="manager" to="/my">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
const route = useRoute()
</script>

<style lang="scss">
html,body{
    margin: 0; 
    padding: 0;
    font-size: 30px;
}
div,p,span,a,button,input,ul,li,h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
}
</style>