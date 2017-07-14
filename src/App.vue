<template>
<<<<<<< HEAD
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
=======
  <div id="app">
  <nav>
    <router-link to="/"><img src="./assets/logo.png"></router-link>
    <router-link to="/admin">Admin</router-link>
    <router-link to="/login">Login</router-link>
    <router-view></router-view>
  </nav>
  </div>
>>>>>>> d0bdd44a22d7b0dc0d8aa1e93fae7c3c83a5439d
</template>

<script>
export default {
  name: 'app'
}
</script>

<<<<<<< HEAD
<style lang="scss" scoped>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        img {
            width: 30px;
            height: 30px;
        }

        ul {
            border: 0px solid black;
            display: flex;
            width: 100vw;
            height: 50px;
            justify-content: space-around;
            margin: 0;
            padding: 0;
            li {
                display: flex;
                list-style: none;
                flex-direction: column;
                justify-content: center;
                justify-items: center;
                height: 50px;
                a {
                    display: block;
                }
            }
        }
    }

=======
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
>>>>>>> d0bdd44a22d7b0dc0d8aa1e93fae7c3c83a5439d

</style>
