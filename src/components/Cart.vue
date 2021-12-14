<template>
  <div>
    <table border="1" v-show="isShow">
      <caption>购物车</caption>
      <tr>
        <th>编号</th>
        <th>书籍名称</th>
        <th>出版日期</th>
        <th>价格</th>
        <th>购买数量</th>
        <th>操作</th>
      </tr>
      <tr v-for="book in books" :key="book.id">
        <td>{{book.id}}</td>
        <td>{{book.title}}</td>
        <td>{{book.publicDate}}</td>
        <td>{{book.price | doubleZero}}</td>
        <td>
          <button @click="substract(book.id)" :disabled="book.num<=1">-</button>
          {{book.num}}
          <button @click="increase(book.id)">+</button>
        </td>
        <td>
          <button @click="deleterow(book.id)">delete</button>
        </td>
      </tr>
    </table>
    <p>商品的总价格是：{{sum}}</p>
  </div>
</template>

<script>
import {nanoid} from "nanoid"
export default {
  name: "Cart",
  data(){
    return{
      books:[
        {id:nanoid(),title:"算法导论",publicDate:"2006-10",price:149,num:1},
        {id:nanoid(),title:"UNIX编程艺术",publicDate:"2003-1",price:104,num:1},
        {id:nanoid(),title:"编程珠玑",publicDate:"2010-1",price:56,num:1},
        {id:nanoid(),title:"代码大全",publicDate:"2015-1",price:96,num:1},
      ],
    }
  },
  computed:{
    isShow(){
       return this.books.length
    },
    sum(){
      return this.books.reduce((pre,current)=>{
        return pre + current.price*current.num
      },0)
    }
  },
  methods:{
    increase(id){
      this.books.forEach((obj)=>{
        if(obj.id===id){
          obj.num++
        }
      })
    },
    substract(id){
      this.books.forEach((obj)=>{
        if(obj.id===id){
          obj.num--
        }
      })
    },
    deleterow(id){
      //找到这个对象，将其从数组中移除
      this.books.forEach((obj)=>{
        if(obj.id===id){
          this.books.pop()
        }
      })
    },
  },
  filters:{
    doubleZero(price){
      return '¥' + price.toFixed(2)
    }
  }

}
</script>

<style scoped lang="stylus">
p
  font-size x-large
  font-style italic
</style>