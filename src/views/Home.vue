<template>
  <div class="home">
    <!--输入框-->
      {{count}}
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

export default {
   name: 'home',
   data() {
        return {
            todos: [],
            Todos: []
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
                    this.todos = [...this.Todos, ...response.data];
                }
            })
            .catch(err => {
                console.log(err);
            })
    },
    computed: {
       get() {
           console.log(this.$store.state.todos);
           this.Todos = this.$store.state.todos;
       },
        count() {
           return this.$store.state.count;
        }
    }
}
</script>
