const state = {
    count: 0
};

const getters = {

};

const mutations = {
    increment: (state) => {
        return state.count ++;
    },
    decrement: (state, payload) => {
        return state.count -= payload.mount;
    }
};

const actions = {
    decrementAsyn: ({ commit }) => {
        setTimeout(() => {
            commit({
                type: 'decrement',
                mount: 2
            })
        }, 1000)
    }
};

export default {
    state, getters, mutations, actions
}
