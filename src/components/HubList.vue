<template>
  <div>
    <p>showcase</p>
    <ul>
      <li v-for="user in receiveData" :key="user.id">{{user.login}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HubList",
  data(){
    return{
      receiveData:[],
    }
  },
  mounted() {
    this.$bus.$on("userlist",(data)=>{
      this.receiveData = data
    })
  }
}
</script>

<style scoped>

</style>