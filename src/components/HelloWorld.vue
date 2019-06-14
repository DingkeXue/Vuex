<template>
  <div class="test">
    <div class="todo-item" v-for="(todo, index) in todos" :key="index">
      <Item :todo="todo" @Remove="Remove"></Item>
    </div>
  </div>
</template>

<script>
  import Item from './Item'
  export default {
      name:'test',
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
          Item
      },
      methods: {
          Remove(id) {
              this.todos = this.todos.filter(todo => todo.id !== id);
          }
      }
  }
</script>

<style scoped>
  .test {
    margin: 10px auto;
    width: 500px;
  }

  .todo-item {
    padding: 5px 0;
  }
</style>
