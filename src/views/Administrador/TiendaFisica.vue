<template>
    <div>
        <Navbar></Navbar>
        <TiendaFisicaVue></TiendaFisicaVue>
    
    </div>
</template>

<script>
import TiendaFisicaVue from '../../components/CompAdm/TiendaFisica.vue'
import Navbar from '@/components/CompAdm/Navbar.vue';

export default{
    components:{
        TiendaFisicaVue,Navbar
    }
}
</script>