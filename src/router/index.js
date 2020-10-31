import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Admin from '../views/Admin.vue'
import Profile from '../views/Profile.vue'
import FindGame from '../views/FindGame.vue'
import Jeux from '../views/GamePage.vue'
import Reservation from '../views/Reservation.vue'
import Review from '../views/Review.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{requiresVisitor: true},
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta:{requiresVisitor: true},
  },
  {
    path: '/recherchejeux',
    name: 'FindGame',
    component: FindGame,
    meta:{requiresVisitor: true},
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta:{requiresVisitor: true},
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta:{requiresVisitor: false},
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta:{requiresVisitor: false},
  },
  {
    path: '/jeux/:id',
    name: 'Jeux',
    component: Jeux,
    meta:{requiresVisitor: true},
  },
  {
    path:'/reservation',
    name:'Reservation',
    component:Reservation,
    meta:{requiresVisitor: false},
  },
  {
    path:'/reviews/:id',
    name:'Review',
    component:Review,
    meta:{requiresVisitor: true},
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
