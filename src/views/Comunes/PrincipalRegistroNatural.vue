<template>
    <div style="background-color: var(--fondo);">
        <Navbar v-if="tipoUsuario==('%Cliente')"></Navbar>
        <Navbar v-if="tipoUsuario==('%Empleado')"></Navbar>
        <NavbarC v-if="tipoUsuario==('*Nuevo')"></NavbarC>
        <NavbarCli v-if="tipoUsuario=='$'"></NavbarCli>
        <h2 class="titulos" style="margin: 2% 0 4% 0 !important">Formulario de registro</h2>
        <FormularioNaturalVue :id="$route.params.id" :tipo="$route.params.tipoUsuario"></FormularioNaturalVue>
    
    </div>
</template>

<script>


import FormularioNaturalVue from '@/components/FormularioNatural.vue';
import Navbar from '@/components/CompAdm/Navbar.vue';
import NavbarC from '@/components/Comunes/Navbar.vue';
import NavbarCli from '@/components/CompClientes/Navbar.vue';

export default{
    props:{
        id:'',
        tipoUsuario:'',
       

    },

    components:{
        FormularioNaturalVue,Navbar,NavbarC,NavbarCli
    },created(){
        this.tipoUsuario=this.$route.params.tipoUsuario
        console.log(this.tipoUsuario)
        this.id=this.$route.params.id
        console.log(this.id)
        
    }
}
</script>