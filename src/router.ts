import { createRouter, createWebHistory } from 'vue-router'


import IndexPage from '@/pages/IndexPage.vue'
import Dashboard from '@/pages/DashboardPage.vue'


const routes = [
  {
    path: '/index',
    component: IndexPage,
    meta: {
      title: 'Vite + Vue + TypeScript + Tailwind Starter Template',
    },
  },
  {
    path: '/',
    component: Dashboard,
    meta: {
      title: 'Dahsboard',
      layout:'AppDashboardLayout'
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
