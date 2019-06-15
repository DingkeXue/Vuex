import axios from 'axios'

const state = {
    todos: []
};

const getters = {
    getAllTodos: state => {
        return state.todos;
    }
};

const mutations = {
    setTodos: (state, payload) => {
        state.todos = [...payload.todos]
    },
    removeItem: (state, payload) => {
        state.todos = state.todos.filter(todo => todo.id !== payload.id)
    }
};

const actions = {
    async fetchTodos ({commit})  {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        const res = response.data.filter(todo => todo.completed);
        commit({
            type: 'setTodos',
            todos: res
        })
    }
};

export default {
    state, getters, mutations, actions
}
