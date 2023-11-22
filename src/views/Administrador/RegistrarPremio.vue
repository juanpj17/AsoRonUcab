<template>
    <div>
        <Navbar></Navbar>
        <RegistrarPremio></RegistrarPremio>
        
       
    
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