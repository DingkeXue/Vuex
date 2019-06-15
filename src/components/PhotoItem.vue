<template>
    <div class="PhotoItem">
        <ul>
            <li class="item" >{{getAllItems}}</li>
        </ul>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        name: 'photo-item',
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

<style>

</style>
