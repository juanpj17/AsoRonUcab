<template>
    <div>
<NavbarVue></NavbarVue>
       <br>
        <CarnetVue style="display:flex;justify-content:center;align-items:center"></CarnetVue>
        <br>
        <TablaPagosAfiliadosVue></TablaPagosAfiliadosVue>
        <br>
        <b-button style="margin-right:30px">Realizar pago</b-button>
        <b-button>Eliminar Afliacion</b-button>
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