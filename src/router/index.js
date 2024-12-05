import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [ 
    {
      path: '/',
      name: 'default',
      component: () =>import('@/layout/AppLayout.vue'),
      children: [
        {
          path:'/shop',
          name:'shop',
          component: () => import('@/views/Shop.vue')
        },
        {
          path:'/form',
          name:'form',
          component: () => import('@/views/Form.vue')
        }
      ]
    }
  ]
})

export default router
