import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomeView.vue'
import Profile from '../views/ProfileView.vue'
import Search from '../views/SearchView.vue'
import Login from '../views/LoginView.vue'
import Register from '../views/RegisterView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile/:id',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/search/',
    name: 'Search',
    component: Search
  },
  {
    path: '/login/',
    name: 'Login',
    component: Login
  },
  {
    path: '/register/',
    name: 'Registration',
    component: Register
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
