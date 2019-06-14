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
                    title: 'title 1',
                    complete: false,
                    id: 0
                },
                {
                    title: 'title 2',
                    complete: false,
                    id: 1
                },
                {
                    title: 'title 3',
                    complete: false,
                    id: 2
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
            axios.delete(`http://jsonplaceholder.typicode.com/todos/+${id}`)
                .then(res => {
                    this.todos = this.todos.filter(todo => todo.id !== id)
                })
                .catch(err => console.log(err));
        },
        addTodo(todo) {
            const {title, complete} = todo;
            axios.post('http://jsonplaceholder.typicode.com/todos', {
                title,
                complete
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
        axios.get('http://jsonplaceholder.typicode.com/todos?_limit=10')
            .then(response => {
                return response.data;
            })
            .then(res => {
                this.todos = res;
            })
            .catch(err => {
                console.log(err);
            })
    }
}
</script>
