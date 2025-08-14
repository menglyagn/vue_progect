import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

// 明确定义路由记录数组类型为 RouteRecordRaw[]
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/pages/home/index.vue'),
    meta: {
      keepAlive: true,
      show: true
    }
  },
  {
    path: '/details',
    name: 'details',
    component: () => import('@/pages/details/index.vue'),
    meta: {
      keepAlive: false,
      show: false
    }
  },
  {
    path: '/my',
    name: 'my',
    component: () => import('@/pages/my/index.vue'),
    meta: {
      keepAlive: false,
      show: false
    }
  },
  // 确保没有额外的逗号或 undefined 值
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;