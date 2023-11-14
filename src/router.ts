import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/pages/DashboardPage.vue'


const routes = [
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
