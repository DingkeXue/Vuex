<template>
    <div class="filter">
        <label class="title">筛选:</label>
        <select v-model="count" @change="filterItems(count)">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="200">200</option>
        </select>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        data() {
            return {
                count: 10
            }
        },
        methods: {
            ...mapActions(['filterItems'])
        }
    }
</script>

<style scoped>
    .filter {
        text-align: center;
    }

    .title {
        margin-right: 5px;
        display: inline-block;
    }
</style>
