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
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/:id',
      name: 'PostDetail',
      component: PostDetail
=======
      path: '/:id',
      name: 'PostDetail',
      component: PostDetail
    },
    {
      path: '/admin',
      name: 'Login',
      component: Login
>>>>>>> d0bdd44a22d7b0dc0d8aa1e93fae7c3c83a5439d
    }
  ]
})
