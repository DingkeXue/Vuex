<template>
  <div class="test">
    <div class="todo-item" v-for="(todo, index) in todos" :key="index">
      <Item :todo="todo" @Remove="$emit('deleteItem', todo.id)"></Item>
    </div>
  </div>
</template>

<script>
  import Item from './Item'
  export default {
      name:'test',
      props: {
          todos: {
              type: Array
          }
      },
      components: {
          Item
      }
  }
</script>

<style scoped>
  .test {
    margin: 10px auto;
    width: 60%;
  }

  .todo-item {
    padding: 8px 0;
    margin: 8px 0;
    box-shadow: 2px 3px 3px rgba(0, 0, 0, .2);
    position: relative;
  }
</style>
