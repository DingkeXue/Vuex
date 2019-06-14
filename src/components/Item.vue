<template>
    <div class="Item">
        <div class="item" :class="{'completed': todo.completed}">
            <input class="check" type="checkbox" @click="toggle">
            <span class="title">{{todo.title}}</span>
            <button class="remove btn btn-danger btn-sm" @click="$emit('Remove', todo.id)">remove</button>
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
                this.todo.completed = !this.todo.completed;
            }
        }
    }
</script>

<style scoped>
    .item {
        width: 100%;
        margin: 20px 0;
        display: flex;
        justify-content: space-between;
    }

    .check {
        margin: 8px;
    }

    .remove {
        right: 10px;
    }

    .check,
    .title,
    .remove {
        display: inline-block;

    }

    .title {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        white-space: nowrap;
        left: 20px;
        width: 60%;
    }

    .completed .title {
        text-decoration: line-through;
        color: #999;
    }
</style>
