<template>
   <!--  <div>
   <DatoPersonales titulo="DATOS PERSONALES" nombre="Pedro Mera" edad="21" email="merap697@gmail.com" telefono="0968677413"/> 
  </div> -->
  <div>
    <MayusculaMiniscula />
  </div>
  <div>
    <CajaDatos />
  </div>
</template>



<script>
//import HelloWorld from './components/HelloWorld.vue'
//import DatoPersonales from './components/DatoPersonales.vue'
import CajaDatos from './components/CajaDatos.vue';
import MayusculaMiniscula from './components/MayusculaMiniscula.vue';

export default {
  name: 'App',
  components: {
    //  DatoPersonales,
    CajaDatos,
    MayusculaMiniscula
}
}
</script>

<style>
#App {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
