export const countNow = state => state.count

export const todoList = state => state.todoList

export const doneTodos = state => state.todoList.filter(todo => todo.done)

//将getter作为参数传入
export const doneTodoCount = (state, getters) => {
    return getters.doneTodos.length
}

//可以让getter返回一个函数，来实现给getter传参
export const getTodoById = (state) => (id) => {
    return state.todoList.find(todo => todo.id === id)
}