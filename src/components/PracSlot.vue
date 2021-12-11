<template>
  <div>
    <h3>{{title}}-list</h3>
    <ul>
      <li v-for="(item,index) in lists" :key="index">{{item}}</li>
    </ul>
    <slot name="middle">default</slot>
    <slot name="bottom">default two</slot>
    <slot :human="humans">I am a scope slot</slot>
  </div>
</template>

<script>
export default {
  name: "PracSlot",
  props:["lists","title"],
  data(){
    return{
      humans:["man","woman","female","male"],
    }
  },
}
</script>

<style scoped lang="stylus">
div
  width 150px
  height 200px
  h3
    text-align center
  img
    width 100%
</style>