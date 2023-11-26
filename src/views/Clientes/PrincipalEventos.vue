<template>
    <div>
        <NavbarVue></NavbarVue>
        <CatalogoEventosVue></CatalogoEventosVue>
        
    </div>
</template>

<script>
import NavbarVue from '@/components/CompClientes/Navbar.vue'
import CatalogoEventosVue from '@/components/CompClientes/CatalogoEventos.vue'



export default{
    components:{
  
   NavbarVue,CatalogoEventosVue
}
}
</script>