import { ref } from 'vue'
import { defineStore } from 'pinia'

export default defineStore(
  'keepAlive',
  () => {
    const keepAlive = ref([]) // 保存组件名称的缓存列表

    // 缓存组件
    function SET_KEEP_ALIVE(str) {
      let index = keepAlive.value.indexOf(str)
      if (index === -1) keepAlive.value.push(str)
    }

    // 清除緩存
    function REMOVE_KEEP_ALIVE(str) {
      let index = keepAlive.value.indexOf(str)
      if (index > -1) keepAlive.value.splice(index, 1)
    }

    return { keepAlive, SET_KEEP_ALIVE, REMOVE_KEEP_ALIVE }
  },
  {
    persist: {
      enabled: true // 开启数据缓存
    }
  }
)
