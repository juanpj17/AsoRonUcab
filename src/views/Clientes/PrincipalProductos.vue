<template>
    <div>
<navbar></navbar>
<CatalogoProductoVue></CatalogoProductoVue>
    </div>
</template>

<script>
import Navbar from '@/components/CompClientes/Navbar.vue'
import CatalogoProductoVue from '@/components/CompClientes/CatalogoProducto.vue'


export default{
    components:{
  
   Navbar,CatalogoProductoVue
}
}
</script>