<template>
    <div class="filter">
        <label class="title">筛选:</label>
        <input class="form-control" type="text" @keyup="filterTitle(title)" v-model="title" placeholder="搜索...">
        <select class="select" v-model="count" @change="filterItems(count)">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="200">200</option>
        </select>
    </div>
</template>

<script>
    import { mapActions, mapMutations } from 'vuex'
    export default {
        data() {
            return {
                count: 10,
                title: ''
            }
        },
        methods: {
            ...mapActions(['filterItems']),
            ...mapMutations(['filterTitle'])
        }
    }
</script>

<style scoped>
    .filter {
        text-align: center;
    }

    .title {
        margin-right: 5px;
    }

    .select {
        padding: 5px;
        border-radius: 4px;
    }

    .title,
    .form-control {
        display: inline-block;
    }

    .form-control {
        margin: 0 20px;
        width: 15%;
    }
</style>
