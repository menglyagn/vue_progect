/*
 * @Author: pujun 1176205845@qq.com
 * @Date: 2022-11-30 09:04:22
 * @LastEditors: pujun 1176205845@qq.com
 * @LastEditTime: 2022-12-05 10:33:43
 * @FilePath: \awanbao-member-mobile-master\src\router\index.js
 * @Description:
 *
 * Copyright (c) 2022 by pujun 1176205845@qq.com, All Rights Reserved.
 */
import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import(/* webpackChunkName: "sign" */ '@/views/home/index.vue')

// 静态路由
const staticRoutes = [
  {
    path: '/',
    redirect: '/home',
    meta: {
      title: '首页'
    }
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes: staticRoutes
})
// 全局路由守卫，动态改变tille
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title || '爱玩宝'
  next()
})
export default router
