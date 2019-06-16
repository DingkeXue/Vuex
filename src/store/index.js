import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
   state: {
       todos: []
   } ,
    getters: {
       getAllItems: state => state.todos
    },
    mutations: {
       // 获取数据
       setItems: (state, payload) => state.todos = [...payload.res],
        // 添加新数据
        addItems: (state, payload) => state.todos.unshift(payload.res)
    },
    actions: {
       // 获取数据
       async fetchData({ commit }) {
           const response = await axios.get('http://jsonplaceholder.typicode.com/todos');
           commit({
               type: 'setItems',
               res: response.data
           })
       },
        // 添加新数据
        async addTodo({ commit }, title) {
           const resposne = await axios.post('http://jsonplaceholder.typicode.com/todos',
               {title, completed: false});
           commit({
               type: 'addItems',
               res: resposne.data
           })
        },
        // 删除数据
        async removeTodo({ commit }, id) {
           console.log(id);
           const response = await axios.delete(`http://jsonplaceholder.typicode.com/todos/+${id}`);
           console.log(response);
        }
    }
});
