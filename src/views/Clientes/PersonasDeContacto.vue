<template>
    <div>
        <NavbarVue></NavbarVue>
        <PersonasContacto></PersonasContacto>
        
    </div>
</template>

<script>
import NavbarVue from '@/components/CompClientes/Navbar.vue'
import PersonasContacto from '@/components/CompClientes/PersonasContacto.vue';



export default{
    components:{
  
   NavbarVue,PersonasContacto
}
}
</script>

