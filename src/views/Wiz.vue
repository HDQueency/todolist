<template>
  <div>
    <h1>练习route</h1>
<!--    两种方法跳转路由界面，一个是name，一个是路径-->
    <router-link :to="{name:'HD'}">hd</router-link> |
    <router-link to="wiz/gh">gh</router-link>
    <router-view></router-view>
    <hr>
    <Cart></Cart>
  </div>
</template>

<script>
import Cart from "@/components/Cart";
export default {
  name: "Wiz",
  components:{
    Cart,
  }
}
</script>

<style scoped>

</style>