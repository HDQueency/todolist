import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{isAuth:false,title:'homepage'}
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/wiz',
    name: 'Wiz',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Wiz.vue'),
    children:[
      {
        path:"hd",
        name:"HD",
        children:[
          {
            path:"both/:id/:title",
            name:"BOTH",
            component:()=>import("../views/BOTH"),
            // props($route){
            //   return {id:$route.query.id,title:$route.query.title}
            // }
            // 1：静态数据
            // props:{id:1,title:'test'}
            // 2:params参数打包放进props
            // props:true
            // props($route){
            //   return {id:$route.query.id,title:$route.query.title}
            // }
            props({params:{id,title}}){
              return {id,title}
            }
          },
        ],
        component:()=>import("../views/HD")
      },
      {
        path:"gh",
        name:"GH",
        component:()=>import("../views/GH")
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
//全局前置路由守卫：初始化调用，每一次切换路由会调用
router.beforeEach((to,from,next)=>{
  //to:要去的路由 from:从哪里跳转
  if(to.meta.isAuth){
    //执行过滤逻辑，什么情况下可以跳转
    next()
  }
  next()
})
router.afterEach((to,from)=>{
  document.title=to.meta.title || "homepage"
})

export default router
