<template>
    <div class="game">
        <div class="container" v-if="active == 'start'">
            <img class="img_wrap" src="@/assets/game2/heart.gif" alt="">
            <h1 class="question">可以成为我的恋人吗？</h1>
            <div class="btns">
                <div class="btn1" @click="confirm('ping')">可以</div>
                <div class="btn2" @click="confirm('no1')">不要</div>

            </div>
        </div>
        <div class="container" v-if="active == 'ping'">
            <h1 class="question">{{'!!!喜欢你!! ( >᎑<)♡︎ᐝ  '}}</h1>
            <img class="img_wrap" src="@/assets/game2/bao.gif" alt="">
        </div>
        <div class="container" v-if="active == 'no1'">
            <img class="img_wrap" src="@/assets/game2/1.gif" alt="">
            <h1 class="question">{{question}}</h1>
            <div class="btns" style="margin-top: 20px;">
                <div class="btn1 tr2" @click="confirm('ping')">可以</div>
                <div class="btn2 trN2" @click="confirm('no2')">？认真的吗</div>
            </div>
        </div>
        <div class="container" v-if="active == 'no2'">
            <img class="img_wrap" src="@/assets/game2/2.gif" alt="">

            <h1 class="question">{{question}}</h1>
            <div class="btns" style="margin-top: 30px;">
                 
                <div class="btn1 tr3" @click="confirm('ping')">可以</div>
               <div class="btn2 trN3" @click="confirm('no3')">你再想想吧</div>

            </div>
        </div>
        <div class="container" v-if="active == 'no3'">
            <img class="img_wrap" src="@/assets/game2/3.gif" alt="">
            <h1 class="question">{{question}}</h1>
            <div class="btns" style="margin-top: 30px;">
                <div class="btn1 tr4" @click="confirm('zan')">可以</div>
                <div class="btn2 trN4" @click="confirm('no4')">不许选这个！</div>
            </div>
        </div>
        <div class="container" v-if="active == 'no4'">
            <img class="img_wrap" src="@/assets/game2/4.gif" alt="">
            <h1 class="question">{{question}}</h1>
            <div class="btns">
                <div class="btn1" @click="confirm('ping')">可以</div>
                <div class="btn2" @click="confirm('ping')">还是可以</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
const props = defineProps({
    active: {
        type: String,
        default: 'start'
    }
})
watch(() => props.active, (newVal) => {
    active.value = newVal
})

const noText = ref([
    '点错了',
    "大胆",
    "岂有此理",
    '来人！！'
])
const active = ref('start')
const question = ref('可以成为我的恋人吗？')
const btn1 = ref('跪下')
const btn2 = ref('不跪')
const confirm = (type:any) => {
   active.value = type
}

const isShowDan = ref(true)
watch(() => active.value, (newVal) => {
    if (newVal == 'zan') {
        setTimeout(() => {
            isShowDan.value = false
        }, 2000)
    }
})


</script>
<style scoped>
.game {
    width: 100%;
    height: 100vh;
    position: relative;
   background-color: #f1d5da;

}

.btns {
    display: flex;
}
.container{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}
.question {
    font-size: 5vw;
    color: #68495b;
    margin: 20px 0;
}

.img_wrap {
    width: 100%;
    max-width: 300px;
    transition: all 0.3s ease;
}
.img_wrap2 {
    width: 100%;
    max-width: 400px;
    transition: all 0.3s ease;
}
.tr2{
    transform: scale(2.2);
    margin-right: 40px;
}
.trN2{
    transform: scale(0.8);

}
.tr3{
    transform: scale(3);
    margin-right: 60px;
}
.trN3{
    transform: scale(0.5);

}
.tr4{
    transform: scale(4);
    margin-right: 60px;
}
.trN4{
    transform: scale(0.1);

}
</style>