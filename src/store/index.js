import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters' // 导入响应的模块，*相当于引入了这个组件下所有导出的事例
import * as actions from './actions'
import * as mutations from './mutations'
import user from './modules/user'

Vue.use(Vuex)

const state = {
    count: 0, // 默认值
    todoList: [
        {id: 1, text: '做饭', done: true},
        {id: 2, text: '拖地', done: false},
        {id: 3, text: '看书', done: false}
    ]
}

// 注册上面引入的各大模块
const store = new Vuex.Store({
    modules: {
        user
    },
    state,    // 共同维护的一个状态，state里面可以是很多个全局状态
    getters,  // 获取数据并渲染
    actions,  // 数据的异步操作
    mutations  // 处理数据的唯一途径，state的改变或赋值只能在这里
})

export default store  // 导出store并在 main.js中引用注册。
