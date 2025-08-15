<template>
    <div class="page1">
        <iframe :src="iframeUrl" frameborder="0"  style="width: 100%; height: 100%; display: block;"></iframe>
        <div class="zhezhao"></div>
        <div class="next" @click="handleClick">不想玩？进入正题</div>
    </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { computed } from "vue";

const router = useRouter()
const handleClick = () => {
    router.push({
        path: '/details'
    })
}

const targetUrl = "http://7.att2.top/891/#1755217753046";
const iframeUrl = computed(() => 
  `/.netlify/functions/proxy?url=${encodeURIComponent(targetUrl)}`
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
    right: 38%;
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