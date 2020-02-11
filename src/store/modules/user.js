const state = {
    name: '',
    token: null,
    menu: [{
        path: '/user',
        name: '用户信息',
        component: () => import('../../components/User')
    }]
}

//(state, getters, rootState)
const getters = {
    userName: (state) => {
        return state.name
    },
    menu: (state) => {
        return state.menu
    }
}

const actions = {
    login({commit}, name) {
        commit('login', name)
    }
}

const mutations = {
    login(state, name) {
        state.name = name
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}