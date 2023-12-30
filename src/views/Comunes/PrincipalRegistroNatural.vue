<template>
    <div style="background-color: var(--fondo);">
        <Navbar v-if="tipoUsuario=='%Cliente' ||'%ClienteJ' || '%Empleado' || '%PersonaContacto' "></Navbar>
        <NavbarC v-if="tipoUsuario=='*'"></NavbarC>
        <NavbarCli v-if="tipoUsuario=='$'"></NavbarCli>
        <h2 class="titulos" style="margin: 2% 0 4% 0 !important">Formulario de registro</h2>
        <FormularioNaturalVue :id="$route.params.id" :tipo="tipoUsuario"></FormularioNaturalVue>
    
    </div>
</template>

<script>


import FormularioNaturalVue from '@/components/FormularioNatural.vue';
import Navbar from '@/components/CompAdm/Navbar.vue';
import NavbarC from '@/components/Comunes/Navbar.vue';
import NavbarCli from '@/components/CompClientes/Navbar.vue';

export default{
    props:{
        tipoUsuario:'',
       

    },

    components:{
        FormularioNaturalVue,Navbar,NavbarC,NavbarCli
    },created(){
        this.tipoUsuario=this.$route.params.tipoUsuario
        console.log(this.tipoUsuario)
        
        
    }
}
</script>