<template>
    <div>
      <h2>Ingresar Texto</h2>
      <label for="texto"> Ingresar Texto:</label> 
      <input v-model="texto" /> <button @click="aplicarTransformaciones">Transformar texto</button><br><br>

      <label for="texto">Texto en Mayuscula: </label>
      <input v-model="textoMayusculas" /><br><br>

      <label for="texto">Texto en Minuscula: </label>
      <input v-model="textoMinusculas" /><br><br>

      <label for="texto">Texto de cada Palabra en mayuscula: </label>
      <input v-model="textoCapitalizado" /><br><br>

      <label for="texto">Texto Primera palabra en Mayuscula: </label>
      <input v-model="textoPrimeraMayuscula" />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        texto: '',
        textoMayusculas: '',
        textoMinusculas: '',
        textoCapitalizado: '',
        textoPrimeraMayuscula: "",
      };
    },
    methods: {
      transformarMayusculas() {
        this.textoMayusculas = this.texto.toUpperCase();
      },
      transformarMinusculas() {
        this.textoMinusculas = this.texto.toLowerCase();
      },
      transformarCapitalizado() {
        this.textoCapitalizado = this.texto
          .toLowerCase()
          .replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());
      },
      transformarPrimeraMayuscula() {
        this.textoPrimeraMayuscula = this.texto.charAt(0).toUpperCase() + this.texto.slice(1);
      },
      aplicarTransformaciones() {
        this.transformarMayusculas();
        this.transformarMinusculas();
        this.transformarCapitalizado();
        this.transformarPrimeraMayuscula();
      },
    },
  };
  </script>
  