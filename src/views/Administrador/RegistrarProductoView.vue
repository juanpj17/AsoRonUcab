<template>
    <div>
        <Navbar></Navbar>
        <RegistrarProducto></RegistrarProducto>
    
    </div>
</template>

<script>
import RegistrarProducto from '@/components/CompAdm/RegistrarProducto'

import Navbar from '../../components/CompAdm/Navbar.vue'

export default{
    components:{
RegistrarProducto,Navbar
    }
}
</script>