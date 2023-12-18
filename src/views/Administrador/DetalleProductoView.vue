<template>
    <div style="background-color: var(--fondo)">
        <!--<Navbar></Navbar>-->
        <NavbarC v-if="tipoUsuario=='*'" class="principal"></NavbarC>
        <DetalleProductoVue :idProducto="idProducto" :tipoUsuario="tipoUsuario" ></DetalleProductoVue> 
    
    </div>
</template>

<script>

import DetalleProductoVue from '../../components/DetalleProducto.vue'
import Navbar from '@/components/CompAdm/Navbar.vue';
import NavbarC from '@/components/Comunes/Navbar.vue';
import NavbarCli from '@/components/CompClientes/Navbar.vue';

export default{
    props:{
        tipoUsuario:'',
        idProducto:''
    },
    components:{
  DetalleProductoVue,Navbar,NavbarC,NavbarCli
    },
    created(){
        this.tipoUsuario=this.$route.params.tipoUsuario
        this.idProducto=this.$route.params.idProd
        console.log('hola')
        console.log(this.idProducto)
        console.log(this.tipoUsuario)
    }
}
</script>