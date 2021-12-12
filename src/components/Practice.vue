<template>
  <div>
    <h1 @click="receivePass">I am a Practice component</h1>
    <p>下面是vuex的练习对比</p>
    <div class="sum-practice">
      <p>当前求和值为：{{amplify}}</p>
      <select v-model.number="n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button @click="INCREASE(n)">+</button>
      <button @click="SUBSTRACT(n)">-</button>
      <button @click="increaseOdd(n)">当前和为奇数时再加</button>
      <button @click="increaseWait(n)">等一等再加</button>
    </div>
  </div>
</template>

<script>
import pubsub from "pubsub-js"
import {mapGetters,mapMutations,mapActions} from "vuex"
export default {
  name: "Practice",
  data(){
    return{
      n:1,
    }
  },
  computed:{
    // amplify(){
    //   return this.$store.getters.amplify
    // }
    // 使用mapGetters优化代码
    // 第一种写法...mapGetters({amplify:"amplify",.....}),
    // 第二种写法
    ...mapGetters(["amplify"]),
  },
  methods:{
    receivePass(){
      // this.$emit("toPass",5,"edward","male")
      pubsub.publish("toPass","sucessfully")
    },
    // add(){
      // this.$store.dispatch("increase",this.n)
      //如果value值确定，并不需要经过action
      // this.$store.commit("INCREASE",this.n)
    // },
    // 使用mapMutations优化add()
    ...mapMutations(["INCREASE"]),
    // minus(){
      // this.$store.dispatch("substract",this.n)
      // this.$store.commit("SUBSTRACT",this.n)
    // },
    ...mapMutations(["SUBSTRACT"]),
    // odd(){
      // if(this.$store.state.sum%2){
      //   this.$store.dispatch("increase",this.n)
      // }
      // 优化：将逻辑放进actions里
      // this.$store.dispatch("increaseOdd",this.n)
    // },
    ...mapActions(["increaseOdd"]),
    // wait(){
    //   this.$store.dispatch("increaseWait",this.n)
    // },
    ...mapActions(["increaseWait"])
  },
}
</script>

<style scoped lang="stylus">
p
  font-size x-large
</style>