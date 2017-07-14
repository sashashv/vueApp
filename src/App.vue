<template>
  <div id="app">
    <nav>
      <ul class="nav-wrapper">
        <li>
          <router-link to="/"><img src="./assets/logo.png"></router-link>
        </li>
        <li>
          <router-link to="/admin">Admin</router-link>
        </li>
        <li>
          <router-link to="/login">Login</router-link>
        </li>
      </ul>
    </nav>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  img{
    width: 30px;
    height: 30px;
  }
  ul {
    background-color: #ccc;
    background: rgba(240, 231, 253, 0.5);
    display: flex;
    justify-content: space-around;
    width: 100vw;
    border: 0px solid black;
    margin: 0;
    padding: 0;
    height: 50px;

    li {
      display: flex;
      list-style: none;
      justify-content: center;
      justify-items: center;
      height: 50px;
      flex-direction: column;
      a {
        display: block;
      }
    }
  }
}

</style>
