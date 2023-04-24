import { createApp } from 'vue'
import Vuex from 'vuex';


const app = createApp({})
app.use(Vuex)

const store = new Vuex.Store({
  state: {
    datos: {
      nombre: '',
      apellido: '',
      edad: '',
      email: '',
      direccion: '',
      fechaNacimiento: '',
      datosEnviados: false,
    },
  },
  mutations: {
    enviarDatos(state, datos) {
      state.datos.nombre = datos.nombre;
      state.datos.apellido = datos.apellido;
      state.datos.edad = datos.edad;
      state.datos.email = datos.email;
      state.datos.direccion = datos.direccion;
      state.datos.fechaNacimiento = datos.fechaNacimiento;
      state.datos.datosEnviados = true;
    },
  },
});

export default store;
