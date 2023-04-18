<template>
<div>
  <h2>Hola</h2>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    pedro: String
  }
}
</script>

<!-- Agregue el atributo "ámbito" para limitar CSS solo a este componente -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
