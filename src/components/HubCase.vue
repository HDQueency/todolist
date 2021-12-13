<template>
  <div>
    <p>HubCase</p>
    <h1>search github users</h1>
    <input type="text" v-model="keywords">
    <button @click="getHub">search</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HubCase",
  data(){
    return{
      keywords:'',
    }
  },
  methods:{
    getHub(){
      //发送数据请求`https://api.github.com/search/users?q=${this.keywords}`
      axios.get(`https://api.github.com/search/users?q=${this.keywords}`)
        .then(
            response => {
              this.$bus.$emit("userlist",response.data.items)
            }

        )
        .catch(error => console.log(error.message))
    },
  }
}
</script>

<style scoped lang="stylus">
button
  margin-left 5px
</style>