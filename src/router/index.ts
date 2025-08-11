/**
 * 配置说明:
 *  meta: 
 *      keepAlive: 是否需要缓存当前路由组件  true: 缓存  false: 不缓存
 *      show: 是否需要显示底部tabbar    true: 显示  false: 不显示
 * 
 * 
*/

import {  createRouter, createWebHashHistory } from 'vue-router'

const Router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home'
        },{
            path: '/home',
            name: 'Home',
            component: () => import('../pages/home/index.vue'),
            meta: {
                keepAlive: true,
                show: true
            }
        },{
            path: '/my',
            name: 'My',
            component: () => import('../pages/my/index.vue'),
            meta: {
                keepAlive: true,
                show: true
            }
        },{
            path: '/details/:id',
            name: 'Details',
            component: () => import('../pages/details/index.vue'),
            meta: {
                keepAlive: false,
                show: false
            }
        },
    ]
})

export default Router