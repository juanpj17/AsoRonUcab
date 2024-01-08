<template>
    <div>
        <NavbarVue></NavbarVue>
        <CarritoVue :cod_tipo_usuario="this.$route.params.cod_tipo_usuario"></CarritoVue>
    </div>
</template>

<script>
import NavbarVue from '@/components/CompClientes/Navbar.vue'
import CarritoVue from '@/components/CompClientes/Carrito.vue'



export default{
    components:{
  
   NavbarVue,CarritoVue
}
}
</script>