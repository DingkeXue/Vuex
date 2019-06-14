<template>
    <div class="todo-item">
        <div class="item" :class="{'completed': todo.complete}">
            <input type="checkbox" @click="toggle">
            <span>{{todo.title}}</span>
            <button class="remove" @click="$emit('Remove', todo.id)">remove</button>
        </div>
    </div>
</template>

<script>
    export  default {
        props: {
            todo: {
                type: Object
            }
        },
        methods: {
            toggle() {
                this.todo.complete = !this.todo.complete;
            }
        }
    }
</script>

<style scoped>
    .item {
        width: 100%;
        border-bottom: 1px solid #ccc;
    }

    .remove {
        background: tomato;
        color: #fff;
        border-radius: 3px;
        float: right;
    }

    .completed {
        text-decoration: line-through;
        color: #999;
    }
</style>
