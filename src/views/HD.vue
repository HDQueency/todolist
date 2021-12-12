<template>
  <div>
<!--    params传参数-->
<!--    <router-link to="hd/both/2/HD"></router-link>-->
    <router-link :to="{
      name:'BOTH',
      params:{
        id:1,
        title:'HD'
      }
    }">I am HD component</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "HD",
  data(){
    return{
      msg:"HD",
    }
  },
}
</script>

<style scoped>

</style>