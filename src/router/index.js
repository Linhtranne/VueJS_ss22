import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '../components/Ex.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ProductList',
      component: ProductList
    },

  ]
})

export default router