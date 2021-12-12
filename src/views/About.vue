<template>
  <div class="about">
    <Practice ref="toPass"></Practice>
    <hr>
    <Share></Share>
    <hr>
    <div class="display">
      <PracSlot :lists="foods" title="foods">
        <img src="../assets/food.webp" alt="food" slot="middle">
        <template scope="{human}">
          <p>也可以写成slot-scope="{human}"</p>
          <p>传过来的名字就是收到的对象的key值，传过来的实际值就是value值</p>
          <p>作用域插槽其实就是数据在插槽组件哪里，那么使用者可以用这种方法灵活展示不在自己身上的数据，区别于父子组件传递</p>
          <ol>
            <li v-for="p in human">{{p}}</li>
          </ol>
        </template>
      </PracSlot>
      <PracSlot :lists="games" title="games">
        <img src="../assets/game.jpeg" alt="food" slot="bottom">
        <p slot="middle">test full name slot </p>
      </PracSlot>
      <PracSlot :lists="colors" title="colors">
        <template v-slot:bottom>
          <p>v-slot:bottom----only for template integration</p>
          <img src="../assets/movie.jpeg" alt="">
        </template>
      </PracSlot>
    </div>
  </div>
</template>

<script>
import Practice from "@/components/Practice";
import PracSlot from "@/components/PracSlot";
import Share from "@/components/Share";
import pubsub from "pubsub-js"

export default {
  name:"About",
  data(){
    return{
      foods:["chicken","pork","beef","fish"],
      games:["poker","tabletennis","pingpang","chess"],
      colors:["red","pink",'yellow','green']
    }
  },
  components:{
    Practice,
    PracSlot,
    Share,
  },
  mounted() {
    // this.$refs.toPass.$on("toPass",this.diyEvent)
    // this.$refs.toPass.$once("toPass",this.diyEvent)
    pubsub.subscribe("toPass",function (name,value){
      console.log(value)
    })
  },
  beforeDestroy() {
    pubsub.unsubscribe("toPass")
  },
  methods:{
    // diyEvent(age,name,gender){
    //   console.log(age,name,gender);
    // }
    // diyEvent(age,...params){
    //   console.log(age,params);
    // },
  }
}
</script>

<style scoped lang="stylus">
.display
  width 500px
  display flex
  flex-flow row nowrap
  justify-content space-around
</style>