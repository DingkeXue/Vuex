<template>
  <div class="home">
    <!--输入框-->
    <app-AddTodo></app-AddTodo>
      <!--内容展示-->
    <div class="content">
        <div class="photos">
            <ul class="photo-list">
                <li class="photo" v-for="(todo, index) in getAllItems" :key="index">
                    <div class="title">
                        <p>{{todo.title}}</p>
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
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import AddTodo from '../components/AddTodo'

export default {
    name: 'photo-item',
    components: {
      'app-AddTodo': AddTodo
    },
    methods: {
        ...mapActions(['fetchData', 'removeTodo'])
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

    .photo-list {
        padding: 0;
        list-style: none;
        display: flex;
        justify-content: space-between;
        flex-flow: row wrap;
    }

    .photo-list .photo {
        width: 40%;
        margin: 10px;
        display: inline-block;
        padding: 20px;
        background: white;
        box-shadow: 2px 3px 3px rgba(0, 0, 0, .2);
    }

    .photo .title {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

</style>
