<template>
  <div class="typewriter-container">
    <p class="typewriter-text">{{ displayedText }}</p>
    <button
      v-if="!isComplete && showSkipButton"
      @click="skipTyping"
      class="skip-button"
    >
      {{ skipButtonText }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, defineProps, defineEmits } from 'vue';

// 定义props
const props = defineProps({
  // 要显示的文本内容
  text: {
    type: String,
    required: true
  },
  // 打字速度(毫秒/字)
  speed: {
    type: Number,
    default: 300
  },
  // 是否显示跳过按钮
  showSkipButton: {
    type: Boolean,
    default: true
  },
  // 跳过按钮文本
  skipButtonText: {
    type: String,
    default: '跳过'
  },
  // 是否自动开始打字
  autoStart: {
    type: Boolean,
    default: true
  }
});

// 定义emits
const emit = defineEmits(['complete']);

// 状态管理
const displayedText = ref('');
const isComplete = ref(false);
const isStarted = ref(false);
let timer: ReturnType<typeof setInterval> | null = null;
let currentIndex = ref(0);

// 开始打字动画
const startTyping = () => {
  if (isComplete.value || isStarted.value) return;

  isStarted.value = true;
  currentIndex.value = 0;
  displayedText.value = '';

  timer = setInterval(() => {
    if (currentIndex.value < props.text.length) {
      displayedText.value += props.text[currentIndex.value];
      currentIndex.value++;
    } else {
      completeTyping();
    }
  }, props.speed);
};

// 完成打字动画
const completeTyping = () => {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
  displayedText.value = props.text;
  isComplete.value = true;
  isStarted.value = false;
  emit('complete');
};

// 跳过打字动画
const skipTyping = () => {
  completeTyping();
};

// 生命周期钩子
onMounted(() => {
  if (props.autoStart) {
    startTyping();
  }
});

onUnmounted(() => {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
});

// 暴露方法给父组件
defineExpose({
  startTyping,
  skipTyping
});
</script>

<style scoped>
.typewriter-container {
  position: relative;
  /* display: inline-block; */
  height: 100vh;
  background: url('@/assets/bg.jpg') no-repeat;
  background-size: 100% 100%;
    
}

.typewriter-text {
  margin: 0;
  padding: 20px;
  border-right: 2px solid transparent;
  white-space: pre-wrap;
font-size: 24px;
line-height: 30px;
  overflow: hidden;
  color: #e40474;
  font-weight: bold;
}

.skip-button {
  margin-left: 10px;
  padding: 4px 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.skip-button:hover {
  background-color: #3aa876;
}
</style>