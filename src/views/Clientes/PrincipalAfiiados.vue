<template>
    <div>
<NavbarVue></NavbarVue>
       <br>
        <CarnetVue style="display:flex;justify-content:center;align-items:center" :tipo_codigo_afiliado="this.$route.params.tipo_codigo_usuario"></CarnetVue>
        <br>
        <TablaPagosAfiliadosVue></TablaPagosAfiliadosVue>
    </div>
</template>

<script>
import CarnetVue from '@/components/CompClientes/Carnet.vue';
import TablaPagosAfiliadosVue from '@/components/CompClientes/TablaPagosAfiliados.vue';
import NavbarVue from '@/components/CompClientes/Navbar.vue'
export default{
    props:{
        tipo_codigo_usuario:''
    },
    components:{
  
   NavbarVue,TablaPagosAfiliadosVue,CarnetVue
},

}
</script>