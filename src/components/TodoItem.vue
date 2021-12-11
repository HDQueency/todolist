<template>
  <li>
    <label>
      <input type="checkbox" :checked = "done"
             @click="isChecked(id)"
      >
      {{value}}
    </label>
    <button @click="cDelete(id)">delete</button>
  </li>
</template>

<script>
export default {
  name: "TodoItem",
  props:["value","done","id","fChecked","fDelete"],
  methods:{
    isChecked(id){
      //找到是谁点击了事件，并对其done值取反，也可以使用onChange事件
      this.fChecked(id)
    },
    cDelete(id){
      this.fDelete(id)
    }
  }
}
</script>

<style scoped lang="stylus">
li
  width 306px
  display flex
  justify-content space-between
  margin-bottom 10px
  &:hover
    button
      display block
  button
    color  darkred
    display none
</style>