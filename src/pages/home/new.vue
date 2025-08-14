<template>
    <div class="home">
        <div class="container" @selectstart.prevent="() => false" style="-moz-user-select:none;">
            <div class="body_left">
                <!-- <img src="../../assets/bui.gif" alt="" @dragstart.prevent="() => false"> -->
                <!-- <img src="@/assets/biu.gif" alt="" @dragstart.prevent="() => false"> -->
            </div>

            <div class="body_center love" ref="loveRef">
                <div class="block" ref="blockRef">
                    <div class="div1"></div>
                    <div class="div2"></div>
                    <div class="div3"></div>
                    <div class="div4"></div>
                </div>
            </div>
        </div>

        <div class="footer">
            <div class="border">
                <div class="border-top">下一页</div>
                <div class="border-bottom"></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, nextTick } from 'vue'

onMounted(() => {
    nextTick().then(() => {
     
    });
})
</script>

<style scoped lang="scss">
.home {
    height: 100vh;
    background-color: #f5f5f5;
}
</style>