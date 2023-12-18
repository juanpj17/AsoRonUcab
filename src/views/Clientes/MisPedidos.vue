<template>
    <div>
        <NavbarVue></NavbarVue>
        <MisPedidos></MisPedidos>
        
    </div>
</template>

<script>
import NavbarVue from '@/components/CompClientes/Navbar.vue'
import MisPedidos from '@/components/CompClientes/MisPedidos.vue';



export default{
    components:{
  
   NavbarVue,MisPedidos
}
}
</script>