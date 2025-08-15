<template>
    <div class="game">
        <div class="container" v-if="active == 'start'">
            <img class="img_wrap" src="@/assets/game/1.jpg" alt="">
            <h1 class="question">{{question}}</h1>
            <div class="btns">
                <div class="btn1" @click="confirm('ping')">{{btn1}}</div>
                <div class="btn2" @click="confirm('no1')">{{btn2}}</div>

            </div>
        </div>
        <div class="container" v-if="active == 'ping'">
            <h1 class="question">平身</h1>
            <img class="img_wrap" src="@/assets/game/ping.jpg" alt="">
        </div>
        <div class="container" v-if="active == 'no1'">
            <img class="img_wrap" src="@/assets/game/2.jpg" alt="">
            <h1 class="question">{{question}}</h1>
            <div class="btns">
                 <div class="btn2" @click="confirm('no2')">点错了？</div>
                <div class="btn1" @click="confirm('ping')">{{btn1}}</div>
               
            </div>
        </div>
        <div class="container" v-if="active == 'no2'">
            <img class="img_wrap" src="@/assets/game/3.jpg" alt="">
            <h1 class="question">{{question}}</h1>
            <div class="btns">
                 
                <div class="btn1" @click="confirm('ping')">{{btn1}}</div>
               <div class="btn2" @click="confirm('no3')">大胆！</div>

            </div>
        </div>
        <div class="container" v-if="active == 'no3'">
            <img class="img_wrap" src="@/assets/game/4.jpg" alt="">
            <h1 class="question">{{question}}</h1>
            <div class="btns">
                <div class="btn1" @click="confirm('zan')">不跪</div>
                <div class="btn2" @click="confirm('no4')">岂有此理！</div>
            </div>
        </div>
        <div class="container" v-if="active == 'no4'">
            <img class="img_wrap" src="@/assets/game/5.jpg" alt="">
            <h1 class="question">{{question}}</h1>
            <div class="btns">
                <div class="btn1" @click="confirm('zan')">不跪</div>
                <div class="btn2" @click="confirm('no5')">来人！！</div>
            </div>
        </div>
        <div class="container" v-if="active == 'no5'">
            <img class="img_wrap" src="@/assets/game/5.jpg" alt="">
            <h1 class="question">{{question}}</h1>
            <div class="btns">
                <div class="btn1" @click="confirm('zan')">不跪</div>
                <div class="btn2" @click="confirm('no6')">拖出去斩了！！</div>
            </div>
        </div>
        <div class="container" v-if="active == 'no6'">
            <img class="img_wrap" src="@/assets/game/ping.jpg" alt="">
            <h1 class="question">哈哈 不舍得斩</h1>
            
        </div>

         <div class="container" v-if="active == 'zan'">
            <h1 class="question">！！岂有此理 ！！</h1>
            <img class="img_wrap" v-if="isShowDan" src="@/assets/game/dan.jpg" alt="">
            <img class="img_wrap2" v-else src="@/assets/game/ban.jpg" alt="">

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
const question = ref('皇上驾到')
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
    color: #fde460;
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

</style>
