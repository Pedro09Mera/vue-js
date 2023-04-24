<template>
  <div class="page-content">
    <nav>
      <ul>
        <li><router-link to="./">Inicio </router-link></li>
        <li><router-link to="MayusculaMiniscula">Texto </router-link></li>
        <li><router-link to="CajaDatos">Datos Personales</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'MenuPractica'
}

</script>

<style>
nav {
  background-color: #198ef5;
  position:fixed;
  top: 0;
  left: 0;
  width: 100%;
  color: #fff;
  height: 50px;
  z-index: 999;
}

ul {
  list-style: none;
  display: flex;
  padding: 0;
}

li {
  margin-right: 20px;
}

a {
  color: #fff;
  text-decoration: none;
  padding: 1px;
}

a:hover {
  background-color: #94eddb;
}

.page-content {
  padding-top: 50px;;
}
</style>











  