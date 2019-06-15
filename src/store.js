import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      count: 0,
      todos: [
          {
              title: '早上八点起床',
              completed: false,
              id: 11
          },
          {
              title: '中午要吃饭',
              completed: false,
              id: 12
          },
          {
              title: '晚上多学会儿',
              completed: false,
              id: 13
          }
      ]
  },
    getters: {
        completedTodos: (state) => {
            return state.todos.filter(todo => todo.completed)
        },
        getTodosId: (state) => (id) => {
            return state.todos.find(todo => todo.id === id);
        }
    },
  mutations: {
      increment: (state) => {
          return state.count ++;
      },
      decrement: (state, payload) => {
          return state.count -= payload.mount;
      },
      setTodos: (state, payload) => {
          state.todos = [...payload.todos]
      }
  },
  actions: {
      decrementAsyn: ({ commit }) => {
          setTimeout(() => {
              commit({
                  type: 'decrement',
                  mount: 2
              })
          }, 1000)
      },
      incrementAsyn: ({ commit }) => {
          setTimeout(() => {
              commit('increment')
          }, 2000)
      },
      async fetchTodos ({commit})  {
          const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10');
          const res = response.data.filter(todo => todo.completed);
          commit({
              type: 'setTodos',
              todos: res
          })
      }
  }
})
