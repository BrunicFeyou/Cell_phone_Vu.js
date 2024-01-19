import { createRouter, createWebHistory } from 'vue-router'
import ClavierView from '../views/ClavierView.vue'
import AjoutContactView from '../views/AjoutContactView.vue'
import ContactView from '../views/ContactView.vue'
import JournalView from '../views/JournalView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/clavier',
      name: 'clavier',
      component: ClavierView
    },
    {
      path: '/journal',
      name: 'journal',
      
      component: JournalView 
    }, 
    {
      path: '/ajoutcontact',
      name: 'ajoutcontact',
      
      component: AjoutContactView 
    }, 
    {
      path: '/contact',
      name: 'contact',
      
      component: ContactView 
    },

  ]
})

export default router
