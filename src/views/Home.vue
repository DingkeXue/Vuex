<template>
  <div class="home">
    <!--输入框-->
    <app-AddTodo></app-AddTodo>
      <!--内容展示-->
    <div class="content">
        <div class="photos">
            <ul class="photo-list">
                <li class="photo" v-for="(photo, index) in getAllItems" :key="index">
                    <p class="title"><strong>Title: </strong>{{photo.title}}</p>
                    <p class="img">
                        <img :src="photo.thumbnailUrl">
                    </p>
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
        ...mapActions(['fetchData'])
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
        text-align: center;
        box-shadow: 2px 3px 3px rgba(0, 0, 0, .2);
    }

    .photo .title {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

</style>
