<template>
  <div class="home">
    <!--输入框-->
    <app-AddTodo></app-AddTodo>
      <!--筛选部分-->
    <div class="filter">
        <app-Filter></app-Filter>
    </div>
      <!--内容展示-->
    <div class="content">
        <div class="items">
            <ul class="item-list">
                <li class="item" v-for="(todo, index) in getAllItems" :key="index"
                    :class="{'completed': todo.completed }">
                    <div>
                        <p class="title">{{todo.title}}</p>
                    </div>
                    <div class="done" @click="doneClick(todo.id)">
                        <i class="fas fa-check-square"></i>
                    </div>
                    <div class="remove" @click="removeTodo(todo.id)">
                        <i class="fas fa-trash-alt"></i>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import AddTodo from '../components/AddTodo'
import Filter from '../components/Filter'

export default {
    name: 'item-item',
    components: {
      'app-AddTodo': AddTodo,
        'app-Filter': Filter
    },
    methods: {
        ...mapActions(['fetchData', 'removeTodo']),
        ...mapMutations(['doneClick'])
    },
    computed: {
        ...mapGetters(['getAllItems'])
    },
    created() {
        this.fetchData();
    }
}
</script>

<style scoped>
    .content {
        width: 80%;
        margin: 20px auto;
    }

    .item-list {
        padding: 0;
        list-style: none;
        display: flex;
        justify-content: space-between;
        flex-flow: row wrap;
    }

    .item-list .item {
        width: 40%;
        margin: 10px;
        display: inline-block;
        padding: 20px;
        background: white;
        box-shadow: 2px 3px 3px rgba(0, 0, 0, .2);
    }

    .item .title {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .item .remove,
    .item .done {
        display: inline-block;
        margin-right: 20px;
        font-size: 20px;
    }

    .item.completed {
        text-decoration: line-through;
        background: #007bff1c;
        color: #666;
    }

    .completed .fa-check-square {
        color: #007bff;
    }

    .completed .fa-trash-alt {
        color: tomato;
    }

    /* 筛选框 */
    .filter {
        margin: 10px auto;
    }

</style>
