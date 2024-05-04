import { createMemoryHistory, createRouter } from 'vue-router'


import HomePage from '../pages/HomePage.vue'
import HubPage from '../pages/HubPage.vue'
import ContactPage from '../pages/ContactPage.vue'

// import AboutView from './AboutView.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/hub', component: HubPage },
  { path: '/contact', component: ContactPage },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;