<template>
  <div id="app">
    <Register />
  </div>
</template>

<script>
import Login from './components/login.vue'
import Register from './components/register.vue'
import Perfil from './components/perfil.vue'

export default {
  name: 'app',
  components: {
    Register,
    Login,
    Perfil
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>