import { createRouter, createWebHistory } from 'vue-router'
import { loadData, isTokenReady } from '@/views/useAuth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

   { path: '/',
     name: 'home',
     component: () => import('@/views/main.vue'),
     prop: true
   },


   { path: '/dashboard/home',
     name: 'dashboard_home',
     component: () => import('@/views/dashboard/dashboard_home.vue'),
     prop: true,
     async beforeEnter(to, from, next) {
     await loadData()
     if (!isTokenReady.value) {

        return next('/login/sign-in')
      }
      next()
    }
   },

    { path: '/dashboard/data',
     name: 'dashboard_data',
     component: () => import('@/views/dashboard/dashboard_data.vue'),
     prop: true
   },

   { path: '/login/sign-in',
     name: 'sign-in',
     component: () => import('@/views/login_page.vue'),
     prop: true
   },

   { path: '/login/register',
     name: 'register',
     component: () => import('@/views/register.vue'),
     prop: true
   },
   
    { path: '/update_password',
     name: 'update_password',
     component: () => import('@/views/update/update_pass.vue'),
     prop: true
   },
  ],
})

export default router
