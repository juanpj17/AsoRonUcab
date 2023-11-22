<template>
    <div>
        <Navbar></Navbar>
        <DetalleProductoVue></DetalleProductoVue>
    
    </div>
</template>

<script>
import DetalleProductoVue from '../../components/DetalleProducto.vue'
import Navbar from '@/components/CompAdm/Navbar.vue';

export default{
    components:{
  DetalleProductoVue,Navbar
    }
}
</script>