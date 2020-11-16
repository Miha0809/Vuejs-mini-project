import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/Main'
import Specify from '@/views/Specify'
import Write from '@/views/Write'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/specify',
    name: 'Specify',
    component: Specify
  },
  {
    path: '/write',
    name: 'Write',
    component: Write
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
