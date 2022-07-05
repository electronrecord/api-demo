import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
import Blog from '../views/Blog'
import Post from '../views/Post'
import Contact from '../views/Contact'
import Login from '../views/Login'
import PageNotFound from '../views/PageNotFound'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog,
    meta: {
      auth: false
    }
  },
  {
    path: '/post/:id',
    name: 'post',
    component: Post
  },
  {
    path: '/404',
    name: 'page-not-found',
    component: PageNotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta?.auth) {
    window.alert('You are not allowed to view this page without admin permission!')
    next('/login')
  } else {
    next()
  }
})

export default router
