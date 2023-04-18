<template>
        <div>
        <h3>Ingresar sus datos personales</h3>
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" v-model="nombre">
    
        <label for="apellido">Apellido:</label>
        <input type="text" id="apellido" v-model="apellido">
    
        <label for="edad">Edad:</label>
        <input type="number" id="edad" v-model="edad">
    
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email">
    
        <label for="direccion">Direccion:</label>
        <input type="text" id="direccion" v-model="direccion">
    
        <label for="fechaNacimiento">Fecha de nacimineto:</label>
        <input type="date" id="fechaNacimiento" v-model="fechaNacimiento">
    
        <button @click="enviarDatos">MOSTRAR DATOS </button>
        <div v-if="datosEnviados">
        <h3>SUS DATOS SON:</h3>
        <p>Su nombre es: {{ nombre }}</p>
        <p>Su apellido es: {{ apellido }}</p>
        <p>Su edad es: {{ edad }}</p>
        <p>Su email es: {{ email }}</p>
        <p>Su direccion es: {{ direccion }}</p>
        <p>Su fecha de nacimiento es: {{ fechaNacimiento }}</p>
        </div>
      </div>
    </template>
    
    <script>
    export default {
      data() {
        return {
          nombre: '',
          apellido: '',
          edad: '',
          email: '',
          direccion: '',
          fechaNacimiento: null,
          datosEnviados: false
        };
      },
      methods: {
        enviarDatos() {
            this.datosEnviados = true;
        }
      }
    };
    </script>

