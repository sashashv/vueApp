import Vue from 'vue'
import Router from 'vue-router'

import Admin from '@/components/admin'
import Login from '@/components/login'
import PostDetail from '@/components/postDetail'
import Post from '@/components/post'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Post',
      component: Post
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
<<<<<<< HEAD
      path: '/:id',
      name: 'PostDetail',
      component: PostDetail
    },
    {
      path: '/admin',
      name: 'Login',
      component: Login
=======
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/:id',
      name: 'PostDetail',
      component: PostDetail
>>>>>>> e7121d763fbcac1029c789dc2d3a309152ac33b4
    }
  ]
})
