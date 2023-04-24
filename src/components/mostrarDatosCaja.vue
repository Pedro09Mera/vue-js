
<template>
    <div  v-if="enviarDatos">
      <h3>Sus datos personales son:</h3>
      <p>Nombre: {{ datos.nombre }}</p>
      <p>Apellido: {{ datos.apellido }}</p>
      <p>Edad: {{ datos.edad }}</p>
      <p>Email: {{ datos.email }}</p>
      <p>dirrecion: {{ datos.direccion }}</p>
      <p>Fecha de Nacimiento: {{ datos.fechaNacimiento }}</p>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    computed: {
      ...mapState({
        datos: state => state.datos,
        enviarDatos: state => state.datos.datosEnviados
      })
    }
  };
  </script>
  

