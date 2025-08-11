<template>
  <div class="tree_main">
    <div class="tree_Editor">
      <pre>
        <code class="language-xml line-numbers"   v-html=" state.html"></code>
      </pre>
    </div>

    <div class="tree_rapper">
      <div class="heart"></div>
      <div class="heart bounce"></div>
    </div>

    <div class="tree_rapper_pannl" v-if="state.show">
      {{ state.html2 }}
    </div>
    <backdrop v-if="state.show" />
  </div>
</template>

<script lang="ts">
import backdrop from "./backdrop.vue";
import { onMounted, reactive, defineComponent } from "vue";

import Prism from "prismjs";
export default defineComponent({
  name: "HelloWorld",
  components: {
    backdrop,
  },
  setup: () => {
    const state = reactive({
      show: false,
      fullStyle: [
        `
        
/*
* Hi！
* 这么久了, 但一直没展示展示技术功底！
* 前端工程师，俗称用户体验工程师。
* 如果用户没有体验，就没有后续可言。
* 所以来试试体验感吧。
* 。
*/
   
/* 首先给所有元素加上过渡效果 */
*{
  -webkit-transition: all .5s;
  transition: all .5s;
}
/* 白色背景太单调了。来点背景 */
.tree_main {
  color: #fff!important;
  text-align: left!important;
  background-color: #f9c7d6;
}

/* 文字太近了 */
.tree_Editor {
  overflow: auto;
  width: 48vw!important;
  height: 96vh;
  border: 1px solid;
  font-size: 14px;
  line-height: 1.5;
  padding: 10px;
}



/* 加个 3D 效果 */
.tree_main{
  perspective: 1000px;
  -webkit-perspective: 1000px;
}

.tree_Editor {
  transform: rotateY(10deg) translateZ(-100px) ;
  -webkit-transform: rotateY(10deg) translateZ(-100px); 
}

/*
* 宝贝，今天教你写代码。
* 用代码画一个爱心。
*/

/* 首先，来一个画板 */
.tree_rapper {
  width: 48vw;
  height: 96vh;
  position: relative;
  border: 1px solid;
  background-color: white;
  transform: rotateY(-10deg) translateZ(-100px);
  -webkit-transform: rotateY(-10deg) translateZ(-100px);
}

/* 画一个方块，当左心室和右心室 */
.heart {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -50px 0 0 -50px;
  border-radius: 20px;
  background: #E88D8D;
  transform: rotate(45deg);
}

/* 画上左心房 */
.heart::before {
  content: '';
  background: #E88D8D;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  position: absolute;
  left: -38px;
  top: 1px;
}

/* 再画上右心房 */
.heart::after {
  content: '';
  background: #E88D8D;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  position: absolute;
  right: -1px;
  top: -38px;
}

/* 太单调了，让心跳动起来 */
@keyframes throb {
  0% {
    transform: scale(1) rotate(45deg);
    opacity: 1;
  }

  100% {
    transform: scale(1.65) rotate(45deg);
    opacity: 0
  }
}

.bounce {
  opacity: 0.2;
  animation: throb 1s infinite linear;
}
/*
* Ok，完成！
* 七夕快乐！
*/
        
        `,
      ],
      fullStyle2: [
        `纤云弄巧，飞星传恨， 银汉迢迢暗渡。 金风玉露一相逢，便胜却人间无数。
      柔情似水，佳期如梦， 忍顾鹊桥归路！ 两情若是长久时，又岂在朝朝暮暮 `,
      ],
      html: "",
      html2: "",
      html_style: "",
    });

    const ShowStyle = (style2: HTMLStyleElement) => {
      const fullStyle = state.fullStyle;
      const style = style2;
      const showStyle = (i: number) =>
        new Promise<void>((resolve) => {
          const char = fullStyle[0][i];
          if (!fullStyle[0] || !char) {
            resolve();
            return;
          }
          // @ts-ignore
          state.html += Prism.highlight(char, Prism.languages.css);
          state.html_style += char;
          style2.innerHTML = state.html_style;
          document.getElementsByTagName("head")[0].appendChild(style);
          setTimeout(() => {
            resolve(showStyle(i + 1));
          }, 30);
        });
      return showStyle(0);
    };
    const loding = async () => {
      await ShowStyle(document.createElement("style"));
      state.show = true;
      const fullStyle = state.fullStyle2;
      console.log(fullStyle[0][0]);
      const showStyl = (i: number) =>
        new Promise<void>((resolve) => {
          const char = fullStyle[0][i];

          if (!fullStyle[0] || !char) {
            resolve();
            return;
          }
          state.html2 += char;
          setTimeout(() => {
            resolve(showStyl(i + 1));
          }, 300);
        });

      return showStyl(0);
    };
    onMounted(() => {
      loding();
    });
    return { state };
  },
});
</script>

<style scoped>
.tree_main {
  color: black;
  width: 100%;
  display: flex;
  padding-top: 1px;
  text-align: center;
  justify-content: space-between;
}
.tree_Editor {
  width: 100%;
}
.tree_rapper_pannl {
  position: fixed;
  width: 250px;
  border-radius: 12px;
  height: 80px;
  top: calc(50% - 200px);
  left: calc(50% - 125px);
  box-shadow: inset 0 0 10px #ccc;
  background-color: #fff;
  padding: 20px;
  color: #e88d8d;
}
</style>
