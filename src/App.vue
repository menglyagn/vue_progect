<template>
    <div class="container">
        <router-view />
    </div>
    <!-- <div class="zml-tabbar" v-if="route.meta.show">
        <van-tabbar route placeholder inactive-color="#ccc" active-color="#41B883">
            <van-tabbar-item icon="wap-home" to="/home">首页111</van-tabbar-item>
            <van-tabbar-item icon="manager" to="/my">我的</van-tabbar-item>
        </van-tabbar>
    </div> -->
</template>

<script lang="ts" setup>

</script>

<style >
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
.container{
    height: 100vh;
    width: 100vw;
}
.btn1{
    font-size: 4vw;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 10px;
    transition: all 0.3s ease;
    background-color: #d4818e;
    color: white;
}
.btn2{
    font-size: 4vw;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 10px;
    transition: all 0.3s ease;
    background-color: #6784b1;
    color: white;
}
</style>