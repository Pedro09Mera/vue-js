import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import { createRouter, createWebHistory } from "vue-router";
import MayusculaMiniscula from './components/MayusculaMiniscula.vue';
import CajaDatos from './components/CajaDatos.vue';
import DatoPersonales from './components/DatoPersonales.vue';
//import Vuetify from 'vuetify';
//import 'vuetify/dist/vuetify.min.css';




const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/DatoPersonales", component: DatoPersonales },
    { path: "/MayusculaMiniscula", component: MayusculaMiniscula },
    { path: "/CajaDatos", component: CajaDatos },
  ],
});

createApp(App).use(store).use(router).mount('#app');

//createApp(App).use(store).use(router).use(Vuetify).mount('#app');
