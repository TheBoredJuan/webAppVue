<template>
  <div id="header">
    <menu>
      <buttonBorradores>
        
      </buttonBorradores>
    </menu>
  </div>
    
</template>

<script>
  import buttonBorradores from './gestion_proyecto/borradores/buttonBorradores'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
  #header {
    width: 1920px;
    height: 215px;
    background-color: #90caf9;
    background-size: cover;
  }

  menu {
    width: 171px;
    height: 872px;
    background-color: #cfd8dc;
    background-size: cover;
    position: relative;
    top: 215px;
  }
</style>