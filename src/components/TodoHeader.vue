<template>
  <div>
    <input type="text"
           placeholder="please enter your todoitems"
           @keydown.enter = "addTodo"
           v-model="inputTodo"
    >
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
  name: "TodoHeader",
  data(){
    return{
      inputTodo:""
    }
  },
  props:["receiveH","showAgain"],
  methods:{
    addTodo(){
      //将值显示在下方的列表中，两种方法e.target.value(use original DOM,not good)
      // const todo={id:nanoid(),value:e.target.value,done:false}
      // this.receiveH(todo)
      // e.target.value = ""
      const todo={id:nanoid(),value:this.inputTodo,done:false}
      this.receiveH(todo)
      this.inputTodo = ""
      this.showAgain()
    }
  }

}
</script>

<style scoped lang="stylus">
input{
  width 300px
  height 30px
}
</style>