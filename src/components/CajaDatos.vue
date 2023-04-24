
<template>
        <div>
          <v-card-title class="blue lighten-3">
          <h3 class="white--text">Ingresa datos Personales</h3>
          </v-card-title><br>
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" v-model="nombre"><br><br>
    
        <label for="apellido">Apellido:</label>
        <input type="text" id="apellido" v-model="apellido"><br><br>
    
        <label for="edad">Edad:</label><br>
        <input type="number" id="edad" v-model="edad"><br><br>
    
        <label for="email">Email:</label><br>
        <input type="email" id="email" v-model="email"><br><br>
    
        <label for="direccion">Direccion:</label>
        <input type="text" id="direccion" v-model="direccion"><br><br><br>
    
        <label for="fechaNacimiento">Fecha de nacimineto:</label>
        <input type="date" id="fechaNacimiento" v-model="fechaNacimiento"><br><br>
    
        <button @click="enviarDatos">MOSTRAR DATOS </button><br><br>
        <MostrarDatosCaja />
      </div>
    </template>
    
    <script>
    
import { mapState, mapMutations } from 'vuex';
import MostrarDatosCaja from './mostrarDatosCaja.vue';

export default {
  components: {
    MostrarDatosCaja
  },
  data() {
    return {
      nombre: '',
      apellido: '',
      edad: '',
      email: '',
      direccion: '',
      fechaNacimiento: ''
    };
  },
  computed: {
    ...mapState({
      datos: state => state.datos,
    })
  },
  methods: {
    ...mapMutations([
      'enviarDatos',
    ]),
    enviarDatos() {
      this.$store.commit('enviarDatos', {
        nombre: this.nombre,
        apellido: this.apellido,
        edad: this.edad,
        email: this.email,
        direccion: this.direccion,
        fechaNacimiento: this.fechaNacimiento
      });
    }
  }
};
</script>

