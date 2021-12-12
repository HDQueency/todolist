<template>
  <div>
    <p>通过传递参数，复用此插件</p>
    <p>我是{{title}}点击的</p>
    <p>我是{{$route.query.title}}点击的</p>
  </div>
</template>

<script>
export default {
  name: "BOTH",
  mounted() {
    console.log(this.$route)
  },
  props:["id","title"]
}
</script>

<style scoped>

</style>