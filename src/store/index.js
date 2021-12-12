import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sum:0,
  },
  mutations: {
    INCREASE(state,value){
      // console.log(state,value);
      state.sum += value
    },
    SUBSTRACT(state,value){
      state.sum -= value
    }
  },
  actions: {
    increase(context,value){
      // console.log(context,value);
      // 为什么要有context，方便做action分身
      context.commit("INCREASE",value)
   },
    substract(context,value){
      context.commit("SUBSTRACT",value)
    },
    increaseOdd(context,value){
      if(context.state.sum%2){
        context.commit("INCREASE",value)
      }
    },
    increaseWait(context,value){
       setTimeout(()=>{
         context.commit("INCREASE",value)
      },1000)
    }
  },
  getters:{
    //相当于组件计算属性
    amplify(state){
      // console.log(state);
      return state.sum + 9
    }
  },
  modules: {
  }
})
