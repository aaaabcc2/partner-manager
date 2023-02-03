import { createRouter, createWebHistory } from 'vue-router'
import {useUserStore} from "@/stores/user";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: () => import('../layout/Layout.vue'),
      redirect: '/home',
      children: [
        {
          path: 'home',
          name: 'Home',
          component: () => import('../views/HomeView.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue'),
    }
  ]
})
// 路由守卫
router.beforeEach((to, from, next) => {
  const store = useUserStore()
  const user =  store.managerInfo.user
  const hasUser = user && user.id
  const noPermissionPaths = ['/login']
  if(!hasUser && !noPermissionPaths.includes(to.path)){
      next("/login")
  } else {
    next()
  }
  
})
export default router
