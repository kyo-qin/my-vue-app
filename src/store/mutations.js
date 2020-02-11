export const incrementByN = (state, n) => {
    state.count += n
}

export const decrementByN = (state, n) => {
    state.count -= n
}

export const increment = (state) => {
    state.count += 1
}