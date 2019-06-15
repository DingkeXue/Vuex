import Vue from 'vue'
import Vuex from 'vuex'

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
  mutations: {
    increment: (state) => {
      state.count ++;
    }
  },
  actions: {

  }
})
