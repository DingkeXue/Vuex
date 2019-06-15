<template>
  <div class="home">
    <!--输入框-->
    <app-AddTodo @addItem="addTodo"></app-AddTodo>
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

export default {
    name: 'home',
   data() {
        return {
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
        }
    },
   components: {
        'app-AddTodo': AddTodo,
        'app-content': HelloWorld
    },
   methods: {
        deleteItem(id) {
            axios.delete(`https://jsonplaceholder.typicode.com/todos/+${id}`)
                .then(res => {
                    this.todos = this.todos.filter(todo => todo.id !== id)
                })
                .catch(err => console.log(err));
        },
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


        }
    },
   created() {
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=3')
            .then(response => {
                if (response.data) {
                    this.todos = [...this.todos, ...response.data];
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
}
</script>
