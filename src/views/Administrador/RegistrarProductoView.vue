<template>
    <div style="background-color: var(--fondo)">
        <Navbar></Navbar>
        <h3 class="mb-4 text-center fs-1 titulos" style="margin-top: 30px;">Registrar Producto</h3>
        <RegistrarProducto :idProducto="idProd" style="margin-top: 30px; "></RegistrarProducto>
    
    </div>
</template>

<script>
import RegistrarProducto from '@/components/CompAdm/RegistrarProducto'
import Navbar from '../../components/CompAdm/Navbar.vue'

export default{
    props:{
        idProd:''
    },
    components:{
    RegistrarProducto,Navbar
    },
    created(){
        this.idProd=this.$route.params.idProducto
    }
}
</script>