/*
 * @Description:
 * @version:
 * @Author:
 * @Date: 2022-11-30 10:31:57
 * @LastEditors: mqr
 * @LastEditTime: 2022-12-01 13:55:52
 */
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
import router from './router'
import '@/assets/style/index.scss' //全局样式
import 'lib-flexible' //与postcss-plugin-px2rem配套使用-设置rem基准值
app.use(router).mount('#app')
