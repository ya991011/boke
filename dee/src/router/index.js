import Vue from 'vue'
import Router from 'vue-router'
import Register from '../views/Register'
import Login from '../views/Login'
import Aritical from '../views/Aritical'
import EditiAritical from '../views/EditiAritical'
import Home from '../views/Home'
import Life from '../views/Life'
import Code from '../views/Code'
import User from '../views/user/User'
import UserList from '../views/user/UserList'
import UserImg from '../views/user/UserImg'



Vue.use(Router)

const router = new Router({
  mode:'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path:'/user',
      name:'user',
      component:User,
      redirect:'/user_list',
      children:[
        {
          path:'/user_list',
          name:'user_list',
          component:UserList,
        },
        {
          path:'/user_img',
          name:'user_imgh',
          component:UserImg,
        }
      ]
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path:'/editiaritical',
      name:'editiaritical',
      component:EditiAritical
    },
    {
      path: '/',
      name: 'home',
      component:Home,
      redirect:'/code',
      children:[
        {
          path:'/life',
          name:'life',
          component:Life
        },
        {
          path:'/code',
          name:'code',
          component:Code
        },
        {
          path:'/code/:id',
          name:'code1',
          component:Aritical
        },

      ]

    },
  ]
})
router.beforeEach((to,from,next)=>{
  if(to.path==='/login'){

    return next()
  }
  const tokenStr = window.sessionStorage.getItem('token')
  if(!tokenStr) return next('/login')
  next()

})
export default router
