<template>
    <div class="add">
        <form class="form">
            <input type="text" class="form-control title" v-model="title" placeholder="请添加代办事项...">
            <button type="submit" class="btn btn-primary" @click.prevent="add">添加</button>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: ''
            }
        },
        methods: {
            add() {
                if (this.title !== '') {
                    const newTodo = {
                        title: this.title,
                        completed: false
                    };
                    this.$emit('addItem', newTodo);
                    this.title = '';
                }
            }
        }
    }
</script>

<style scoped>
    .add {
        margin: 5px auto;
    }

    .title {
        max-width: 80%;
        margin: 20px 10px 20px 5%;
    }

    .btn,
    .title {
        display: inline-block;
    }

    .btn {
        width: 10%;
        margin-top: -5px;
    }
</style>
