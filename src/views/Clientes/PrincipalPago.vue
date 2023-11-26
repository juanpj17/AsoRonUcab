<template>
    <div>
        <NavbarVue></NavbarVue>
        <PagarCompraOnlineVue ></PagarCompraOnlineVue>
        
    </div>
</template>

<script>
import NavbarVue from '@/components/CompClientes/Navbar.vue'
import PagarCompraOnlineVue from '@/components/CompClientes/PagarCompraOnline.vue'



export default{
    components:{
  
   NavbarVue,PagarCompraOnlineVue
}
}
</script>