<template>
    <div style="background-color: var(--fondo); ">
        <Navbar></Navbar>
        <h1 class="titulos" style="margin-top: 15px">Registrar Premios</h1>
        <RegistrarPremio ></RegistrarPremio>
        
       
    
    </div>
</template>

<script>

import RegistrarPremio from '@/components/CompAdm/RegistrarPremio'
import Navbar from '../../components/CompAdm/Navbar.vue';

export default{
    components:{
  
    RegistrarPremio,Navbar
}
}
</script>