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
                <div class="border-top" @click="toNext">下一页</div>
                <div class="border-bottom"></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, nextTick } from 'vue'
const getFun = () => {
    let blocks = document.getElementsByClassName("block"),
        block = blocks[0],
        love = document.getElementsByClassName("love")[0],
        timer = null,
        index = 0,  //记录拼接爱心的动画步骤
        clone_block;    //用于克隆方块
    function Next() {
        if (++index >= 24) {
            clearInterval(timer);

            Rise();
            // alert("已经是最后一个了！");
            return;
        }

        block.style.visibility = "visible"; //升空动画前允许可见

        //2.移动方块到指定的位置-即是移动【自身中心】到目标位置
        block.style.left = block_left + 40 * offset_pitn["block" + index][0] + "px";
        block.style.top = block_top - 40 * offset_pitn["block" + index][1] + "px";
        for (let i = 0; i < block.children.length; i++) {
            // block.children[1].innerText = index;    //编号便于调试
            block.children[i].style.left = blk_pitn["block" + index][i][0] * -40 + "px";
            /* -40 是因为逻辑坐标和浏览器的x，y轴方向不一样*/
            block.children[i].style.top = blk_pitn["block" + index][i][1] * -40 + "px";
        }

        //3.克隆方块—保存现在的位置
        /* 一共会克隆23个方块，加上原先的一个方块block，共24个方块，即多出原先的block方块*/
        clone_block = block.cloneNode(true);
        love.appendChild(clone_block);

        if (love.children.length >= 24) {
            blocks[blocks.length - 1].children[2].style.display = "none"; //去掉多余的小方块
            block.style.display = "none";   //隐藏多出的block方块
        }
    }

    function Rise() {
        //4.爱心升高，多出的那个小方块开始掉落
        console.log("开始升空");
        let timer2 = null,
            distance = 0;
        /* 升高时，移动的距离*/
        const target = 120, /* 目标距离*/
            speed = 1;
        /*移动速度*/

        let love_top = parseFloat(window.getComputedStyle(love, null).top.slice(0, -2));  //爱心盒子距离屏幕顶部的距离


        timer2 = setInterval(() => {
            distance += speed;
            // console.log(distance);
            if (distance >= target) {
                clearInterval(timer2);

                console.log("升空完毕");

            }

            love.style.top = (love_top - distance) + "px";

        }, 22);

    }
    setTimeout(() => {

        timer = setInterval(() => {
            Next();
        }, 300);


    }, 12000);
}
onMounted(() => {
    nextTick().then(() => {
      console.log('00000')
      getFun()
    });
})
</script>

<style scoped lang="scss">
.home {
    height: 100vh;
    background-color: #f5f5f5;
}
</style>