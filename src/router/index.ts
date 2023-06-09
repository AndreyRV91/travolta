import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HotelListView from '../views/HotelListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/hotels',
      name: 'hotels',
      props: (route) => ({ query: route.query }),
      component: HotelListView
    }
  ]
})

export default router
