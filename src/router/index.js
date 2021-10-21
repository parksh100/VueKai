import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    path: '/application',
    name: 'Application',
    component: () => import('../views/Application.vue')
  },
  {
    path: '/applicationlist',
    name: 'ApplicationList',
    component: () => import('../views/ApplicationList.vue')
  },
  {
    path: '/cr',
    name: 'ContractReview',
    component: () => import('../views/ContractReview.vue')
  },
  {
    path: '/audit-report',
    name: 'AuditReport',
    component: () => import('../views/AuditReport.vue')
  },
  {
    path: '/audit-md',
    name: 'AuditMD',
    component: () => import('../views/AuditMD.vue')
  },
  {
    path: '/layout',
    name: 'Layout',
    component: () => import('../views/Layout.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
