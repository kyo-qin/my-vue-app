import {INCREMENT} from "@/store/mutation-types";

export function incrementByN({commit}, n) {
    return commit('incrementByN', n)
}

export function decrementByN({commit}, n) {
    return commit('decrementByN', n)
}

export function increment({commit}) {
    return commit(INCREMENT)
}