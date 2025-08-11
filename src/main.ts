import { createApp } from 'vue'
import App from './App.vue'
import './styles/zml.scss'
const app = createApp(App)

// 使用router
import router from './router'
app.use(router)

// 使用vuex
import store from './store'
app.use(store)

// 使用vant
import Vant from 'vant'
import 'vant/lib/index.css'
app.use(Vant)

// 加载
app.mount('#app')
