<template>
  <div class="space">
    <ul>
      <li
        class="star"
        v-for="(item, index) in state.starCount"
        :key="item.id"
        :style="{
          top: item.top + 'px',
          left: item.left + 'px',
          animationDelay: item.delay + 's',
        }"
      ></li>
    </ul>
  </div>
</template>
<script lang="ts">
import { onMounted, reactive, defineComponent, onBeforeMount } from "vue";
export default defineComponent({
  setup: () => {
    const state = reactive({
      starCount: Object.create(null),
    });

    const setnum = async () => {
      for (let i = 0; i < 50; i++) {
        // i < 星星个数
        let star = {
          id: i,
          top: parseInt((Math.random() * 1000).toString()) || "",
          left: parseInt((Math.random() * 1500).toString()) || "",
          delay: parseInt((Math.random() * 10).toString()) || "",
        };

        state.starCount.push(star);
      }
    };
    onBeforeMount(() => {
      setnum();
    });
    onMounted(() => {});
    return { state };
  },
});
</script>
<style>
.space {
  position: fixed;
}
.star {
  width: 0;
  height: 0;
  position: relative;
  opacity: 0;
  background-color: #f9c7d6;
  animation: star-fall 3s linear infinite;
  z-index: -1;
}
.star::after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  /* 这里用边框写了个长三角形作为流星的尾巴 */
  border: 3px solid transparent;
  border-left-width: 200px;
  border-left-color: rgba(255, 255, 255, 0.7);
  /* 变形,旋转-45° 拉伸 */
  transform: rotate(-45deg) translate3d(1px, 3px, 0);
  /* 设置原点 */
  transform-origin: 0% 100%;
}

.container h1 {
  padding-top: 100px;
  color: pink;
}

/* 流星滑落动画 */
@keyframes star-fall {
  0% {
    opacity: 0;
    transform: scale(0.5) translate3d(0, 0, 0);
    /* 兼容一些浏览器 */
    -webkit-transform: scale(0.5) translate3d(0, 0, 0);
    -moz-transform: scale(0.5) translate3d(0, 0, 0);
  }
  50% {
    opacity: 1;
    transform: translate3d(-200px, 200px, 0);
    -webkit-transform: translate3d(-200px, 200px, 0);
    -moz-transform: translate3d(-200px, 200px, 0);
  }
  100% {
    opacity: 0;
    transform: scale(1.2) translate3d(-300px, 300px, 0);
    -webkit-transform: scale(1.2) translate3d(-300px, 300px, 0);
    -moz-transform: scale(1.2) translate3d(-300px, 300px, 0);
  }
}
</style>