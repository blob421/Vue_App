import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   { path: '/',
     name: 'home',
     component: () => import('@/views/main.vue'),
     prop: true
   },

   { path: '/dashboard',
     name: 'dashboard',
     component: () => import('@/views/dashboard.vue'),
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
  ],
})

export default router
