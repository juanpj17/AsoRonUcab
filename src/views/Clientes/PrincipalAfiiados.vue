<template>
    <div>
<NavbarVue></NavbarVue>
       <br>
        <CarnetVue style="display:flex;justify-content:center;align-items:center"></CarnetVue>
        <br>
        <TablaPagosAfiliadosVue></TablaPagosAfiliadosVue>
    </div>
</template>

<script>
import CarnetVue from '@/components/CompClientes/Carnet.vue';
import TablaPagosAfiliadosVue from '@/components/CompClientes/TablaPagosAfiliados.vue';
import NavbarVue from '@/components/CompClientes/Navbar.vue'
export default{
    components:{
  
   NavbarVue,TablaPagosAfiliadosVue,CarnetVue
}
}
</script>