<template>
  <ul>
    <TodoItem  v-for="todo in todos" :key = "todo.id"
               :value="todo.value"
               :done="todo.done"
               :id="todo.id"
               :fChecked="gChecked"
               :fDelete="gDelete"
    ></TodoItem>
  </ul>
</template>

<script>
import TodoItem from "@/components/TodoItem";
export default {
  name: "TodoList",
  components:{
    TodoItem,
  },
  props:["todos","gChecked","gDelete"],
}
</script>

<style scoped lang="stylus">
ul
  display flex
  flex-direction  column
  align-items flex-start
  padding-left 0px
</style>