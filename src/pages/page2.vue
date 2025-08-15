<template>
    <div class="page1">
        <div class="btns" @click="next">
            送给可爱的你的礼物
        </div>
    </div>
</template>


<script setup>

import { useRouter } from 'vue-router'
const router = useRouter()
const next = () => {
    console.log(111);
    router.push({
        path: '/home'
    })
}

</script>
<style scoped>
.page1 {
    width: 100%;
    height: 100vh;
    position: relative;
    background: url('@/assets/pg2.jpg') no-repeat;
  background-size: 100% 100%;
}
.btns{
    position: absolute;
    bottom: 8%;
    left: 50%;
    transform: translateX(-50%);
   width: 300px;
    height: 50px;
    color: #fff;
    text-align: center;
    line-height: 50px;
    border-radius: 8px;
    background: #eb8d8d;
    font-size: 20px;

}
</style>