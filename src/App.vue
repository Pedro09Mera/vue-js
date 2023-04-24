
<template>
 
  <div>
      <router-view />
      <MenuPractica />
    </div>


</template>





<script>
//import HelloWorld from './components/HelloWorld.vue'
//import DatoPersonales from './components/DatoPersonales.vue'

import MenuPractica from './components/MenuPractica.vue'





export default {
  name: 'App',
  components: {
    //  DatoPersonales,
    MenuPractica,
}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
