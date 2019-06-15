<template>
  <div class="home">
      <!--mutation测试-->
      <!--<button @click="increment">+</button>-->
      <!--{{count}}-->
      <!--<button @click="decrement({mount: 2})">-</button>-->

      <!--action 测试-->
      <!--<button @click="decrementAsyn">-</button>-->
      <!--{{count}}-->
      <!--<button @click="incrementAsyn">+</button>-->
      {{completedTodos}}
      <button @click="fetchTodos">获取数据</button>
    <!--输入框-->
    <app-AddTodo @addItem="addTodo"></app-AddTodo>
      <!--内容展示-->
    <div class="content">
      <app-content :todos="todos" @deleteItem="deleteItem"></app-content>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import AddTodo from '@/components/AddTodo'
import axios from 'axios'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
   name: 'home',
   data() {
        return {
            todos: []
        }
    },
   components: {
        'app-AddTodo': AddTodo,
        'app-content': HelloWorld
    },
   methods: {
       // 删除单条数据
        deleteItem(id) {
            axios.delete(`https://jsonplaceholder.typicode.com/todos/+${id}`)
                .then(res => {
                    this.todos = this.todos.filter(todo => todo.id !== id)
                })
                .catch(err => console.log(err));
        },
       // 添加新数据
        addTodo(todo) {
            const {title, completed} = todo;
            axios.post('https://jsonplaceholder.typicode.com/todos', {
                title,
                completed
            })
                .then(res => {
                    this.todos = [res.data, ...this.todos]
                })
                .catch(err => {
                    console.log(err);
                })
        },
       // 获取 store 中的数据
       getTodos() {
         return this.$store.state.todos.todos;
       },
       ...mapMutations(['increment', 'decrement']),
       ...mapActions(['decrementAsyn', 'incrementAsyn', 'fetchTodos'])
    },
   created() {
       // DOM 渲染前获取数据
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=3')
            .then(response => {
                if (response.data) {
                    this.todos = [...this.getTodos(), ...response.data];
                }
            })
            .catch(err => {
                console.log(err);
            })
    },
    computed: {
        ...mapState(['count']),
        ...mapGetters(['completedTodos', 'getTodosId'])
    }
}
</script>
