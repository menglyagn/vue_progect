import { createStore } from 'vuex'

export default createStore({
    state: {
        token: localStorage.getItem('token') || '',
        userinfo: ''
    },
    mutations: {
        updataUserinfo(state, info) {
            state.userinfo = info
        }
    },
    actions: {
        updataUserinfo({ commit }) {
            commit('updataUserinfo')
        }
    },
    modules: {}
})