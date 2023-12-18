<template>
    <div>
        <navbar v-if="tipoUsuario=='$'" class="principal"></navbar>
        <NavbarC v-if="tipoUsuario=='*'" class="principal" ></NavbarC>
        <CatalogoProductoVue :tipoUsuario="tipoUsuario" ></CatalogoProductoVue>
    </div>
</template>

<script>
import Navbar from '@/components/CompClientes/Navbar.vue'
import CatalogoProductoVue from '@/components/CompClientes/CatalogoProducto.vue'
import NavbarC from '@/components/Comunes/Navbar.vue';


export default{
    props:{
        tipoUsuario:''
    },
    components:{
  
   Navbar,CatalogoProductoVue,NavbarC
},
created(){
    this.tipoUsuario=this.$route.params.tipoUsuario
}
}
</script>