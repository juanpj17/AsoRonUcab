<template>
    <div>
        <NavbarVue></NavbarVue>
        
        <PagarCompraOnlineVue :id="this.$route.params.id" :tipo_usuario="this.$route.params.tipo_pago"></PagarCompraOnlineVue>
        
    </div>
</template>

<script>
import NavbarVue from '@/components/CompClientes/Navbar.vue'
import PagarCompraOnlineVue from '@/components/CompClientes/PagarCompraOnline.vue'



export default{
    
    components:{
  
   NavbarVue,PagarCompraOnlineVue,
}
}
</script>