<template>
  <div>
    <h1 @click="receivePass">I am a Practice component</h1>
    <p>下面是vuex的练习对比</p>
    <div class="sum-practice">
      <p>当前求和值为：{{sum}}</p>
      <select v-model.number="n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button @click="add">+</button>
      <button @click="minus">-</button>
      <button @click="odd">当前和为奇数时再加</button>
      <button @click="wait">等一等再加</button>
    </div>
  </div>
</template>

<script>
import pubsub from "pubsub-js"
export default {
  name: "Practice",
  data(){
    return{
      n:1,
      sum:0
    }
  },
  methods:{
    receivePass(){
      // this.$emit("toPass",5,"edward","male")
      pubsub.publish("toPass","sucessfully")
    },
    add(){
      this.sum += this.n
    },
    minus(){
      this.sum -= this.n
    },
    odd(){
      this.sum += this.n
    },
    wait(){
      setTimeout(()=>{
        this.sum += this.n
      },1000)
    }
  },
}
</script>

<style scoped lang="stylus">
p
  font-size x-large
</style>