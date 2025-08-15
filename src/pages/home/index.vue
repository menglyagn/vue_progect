<template>
    <div class="page1">
        <!-- <iframe :src="targetUrl" frameborder="0"  style="width: 100%; height: 100%; display: block;"></iframe>
        <div class="zhezhao"></div> -->
        <Game :active="active" v-if="isShow" />
        <div class="next" @click="handleClick">不想玩？进入正题</div>
        <div class="next2 " @click="reset">重来</div>
    </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { computed } from "vue";
import  Game from '@/components/garme.vue'
const router = useRouter()
const handleClick = () => {
    router.push({
        path: '/details'
    })
}
const active = ref("start")
const isShow = ref(true)
const reset = () => {
    active.value = 'start'
    isShow.value = false
    setTimeout(() => {
        isShow.value = true
    }, 100);
}

const targetUrl = "http://accct.top/891";
const iframeUrl = computed(() => 
  `/.netlify/functions/proxy`
);
</script>
<style scoped>
.page1 {
    width: 100%;
    height: 100vh;
    position: relative;
}
.zhezhao{
    position: absolute;
    bottom: 0;
    right: 20px;
    width: 150px;
    height: 30%;
    background-color: #fff;

}
.next{
    position: absolute;
    bottom: 20px;
    left: 10%;
    width: 200px;
    height: 50px;
    color: #fff;
    text-align: center;
    line-height: 50px;
    border-radius: 8px;
    background: #eb8d8d;
    font-size: 20px;
}
.next2{
     position: absolute;
    bottom: 20px;
    right: 10%;
    width: 200px;
    height: 50px;
    color: #fff;
    text-align: center;
    line-height: 50px;
    border-radius: 8px;
    background: #eb8d8d;
    font-size: 20px;
}
</style>