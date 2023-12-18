<template>
    <div>
        <NavbarVue></NavbarVue>
        <PagarTiendaFisicaVue></PagarTiendaFisicaVue>
        
    </div>
</template>

<script>
import NavbarVue from '@/components/CompAdm/Navbar.vue'
import PagarTiendaFisicaVue from '@/components/CompClientes/PagarTiendaFisica.vue';



export default{
    

    components:{
  
   NavbarVue,PagarTiendaFisicaVue,
}
}
</script>