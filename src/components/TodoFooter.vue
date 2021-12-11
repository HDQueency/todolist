<template>
  <div v-show="allTodo">
    <label>
<!--      <input type="checkbox" :checked="isAll" @click="choose">-->
      <input type="checkbox" v-model="isAll">
      <span>已完成{{finished}}</span>
      <span>全部{{allTodo}}</span>
    </label>
    <button @click="sclearAll">clear all</button>
  </div>
</template>

<script>
export default {
  name: "TodoFooter",
  props:["todos","chooseAll","clearAll"],
  computed:{
    finished(){
      // const newArr= this.todos.filter(t=>t.done===true)
      // return newArr.length
      return this.todos.reduce((acc,current)=>{
        return acc + (current.done ? 1 : 0)
      },0)
    },
    // allTodo(){
    //   return this.todos.length
    // },
    allTodo:{
      get(){
        return this.todos.length
      },
      set(value){
        console.log(value);

      },
    },
    // 第一种方法
    // isAll(){
    //   return this.finished === this.allTodo && this.allTodo > 0
    // }
    // 第二种方法
    isAll:{
      get(){
        //读取isAll的值去更改checkbox的勾选与否
        return this.finished === this.allTodo && this.allTodo > 0
      },
      set(value){
        //checkbox的勾选状态去影响isAll的值
        this.chooseAll(value)
      },
    }
  },
  methods:{
    sclearAll(){
      //老师的原意是清除已完成选项，这里我自己修改为清除所有待办事项
     this.clearAll()
    },
    // choose(e){
    //   this.chooseAll(e.target.checked)
    // }
  }

}
</script>

<style scoped lang="stylus">
div
  width 306px
  display flex
  justify-content space-between
  &:hover
    button
      display block
  button
    color  darkred
    display none
</style>