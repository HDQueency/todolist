<template>
  <div>
    <!--    query传参数第一种方式：静态数据-->
<!--    <router-link to="hd/both?id=1&title=GH">I am GH component</router-link>-->
    <!--    query传参数第二种方式：动态数据第一种格式-->
<!--    <router-link :to="`hd/both?id=1&title=${msg}`">I am GH component</router-link>-->
    <!--    query传参数第三种方式：动态数据第二种格式-->
    <router-link :to="{
      path:'/hd/both',
      query:{
        id:1,
        title:msg,
      }
    }">I am GH component</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "GH",
  data(){
    return{
      msg:'我是动态数据query传递'
    }
  }
}
</script>

<style scoped>

</style>