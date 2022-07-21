<template>
  <section class="todoapp">
    <!-- header -->
    <header class="header">
      <input class="new-todo" autocomplete="off" placeholder="Todo List" value="翻译为" readonly>
    </header>
    <!-- main section -->
    <section v-show="todos.length" class="main">
      <input id="toggle-all" :checked="allChecked" class="toggle-all" type="checkbox" @change="toggleAll({ done: !allChecked })">
      <label for="toggle-all" />
      <ul class="todo-list">
        <li v-for="todo in todos" :key="todo.id" class="todo" @change="toggleTodo(todo)">
          <div class="view">
            <input :checked="todo.done" class="toggle" type="checkbox">
            <label v-text="todo.name" />
          </div>
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
const defalutList = [
  { text: 'star this repository', done: false },
  { text: 'fork this repository', done: false },
  { text: 'follow author', done: false },
  { text: 'vue-element-admin', done: true },
  { text: 'vue', done: true },
  { text: 'element-ui', done: true },
  { text: 'axios', done: true },
  { text: 'webpack', done: true },
]
export default {
  name: 'rr-card',
  props: {
    todos: {
      type: Array,
      default: () => defalutList,
    },
  },
  data() {
    return {}
  },
  computed: {
    allChecked() {
      return this.todos.every((todo) => todo.done)
    },
  },
  methods: {
    toggleTodo(val) {
      val.done = !val.done
      //this.$emit('update:todos': )
    },
    toggleAll({ done }) {
      this.$emit(
        'update:todos',
        this.todos.map((todo) => {
          todo.done = done
          return todo
        })
      )
    },
  },
}
</script>

<style lang="scss">
@import './index.scss';
</style>
