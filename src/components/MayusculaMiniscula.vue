<template>
    <div>
        <h2>Ingresar una oracion y la primera letra de esa oracion se mostrara en mayuscula</h2>
        <label for="texto">INGRESAR UNA ORACION:</label>
        <input type="text" id="texto" v-model="nombre">
        <button @click="enviarDatos">Mostrar Datos</button>
        <p>{{ nombreMayuscula }}</p>
       
    </div>
</template>

<script>
export default{
    name: 'MayusculaMiniscula',
    data(){ 
    return {
        texto: "",
        nombreMayuscula: ""
    }
  },
  methods:{
    enviarDatos(){
        this.nombreMayuscula = this.nombre.charAt(0).toUpperCase() + this.nombre.slice(1)
    }
  }
}
</script>