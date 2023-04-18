<template>
    <div>
        <h3>{{ titulo }}</h3>
        <p>Nombre: {{ nombre }}</p>
        <p>Edad: {{ edad }}</p>
        <p>Email: {{ email }}</p>
        <p>Telefono: {{ telefono }}</p>
    </div>
</template>


<script>
export default{
     name: 'DatoPersonales',
        props: { 
        titulo: String,
        nombre: String,
        edad: Number,
        email: String,
        telefono: String
    }
}
</script>

