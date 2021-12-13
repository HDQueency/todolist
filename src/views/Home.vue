<template>
  <div>
    <TodoHeader :receiveH="receiveH"
                :showAgain="showAgain"
    ></TodoHeader>
    <TodoList :todos="todos"
              :gChecked="gChecked"
              :gDelete="gDelete"
              :class="clean"
    ></TodoList>
    <TodoFooter :todos="todos"
                :chooseAll="chooseAll"
                :clearAll="clearAll"
                :class="clean"
    ></TodoFooter>
    <hr>
    <HubCase></HubCase>
    <HubList></HubList>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoHeader from '@/components/TodoHeader'
import TodoList from '@/components/TodoList'
import TodoFooter from '@/components/TodoFooter'
import HubCase from "@/components/HubCase";
import HubList from "@/components/HubList";
import {nanoid} from 'nanoid'

export default {
  name: 'Home',
  components: {
    TodoHeader,
    TodoList,
    TodoFooter,
    HubCase,
    HubList,
  },
  data(){
    return{
      todos:JSON.parse(localStorage.getItem("todos")) || [],
      clean:"",
    }
  },
  methods:{
    receiveH(a){
      if(a.value.trim()){
        this.todos.unshift(a)
      }
    },
    //数据在哪里，就在哪里操作数据
    gChecked(id){
      this.todos.forEach((t)=>{
        if(t.id===id){
          t.done = !t.done
        }
      })
    },
    gDelete(id){
      if(confirm("are you sure you want to delete this option")){
        this.todos = this.todos.filter(t=>t.id !== id)
      }
    },
    chooseAll(status){
      // 第一种尝试
      // this.todos.forEach((t,current,index)=>{
      //   t.done = true:错误的原因1是forEach()的返回值是undefined,2是无法判断是全选还是全不选
      // })
      // 第二种尝试
      // if(status){
      //   this.todos.forEach((t,current,index)=>{
      //     t.done = true
      //   })
      // }else{
      //   this.todos.forEach((t,current,index)=>{
      //     t.done = false
      //   })
      // }
      // 第二种简化
      this.todos.forEach((t)=>{
        t.done = status
      })
    },
    clearAll(){
      this.clean = "clean"
    },
    showAgain(todo){
      this.clean = ""
    }
  },
  watch:{
    todos:{
      deep:true,
      handler(value){
        localStorage.setItem("todos",JSON.stringify(value))
      }
    }
  }

}
</script>

<style scoped lang="stylus">
.clean
  display none
</style>
