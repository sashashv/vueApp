<template>
  <div id="app">
  <nav>
    <router-link to="/"><img src="./assets/logo.png"></router-link>
    <router-link to="/admin">Admin</router-link>
    <router-link to="/login">Login</router-link>
    <router-view></router-view>
  </nav>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="sass">
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px
  img
    width: 50px
    height: 50px

</style>
