<template>
    <div style="background-color: var(--fondo)">
        <Navbar v-if="tipoUsuario=='%ClienteJ'"></Navbar>
        <NavbarC v-if="tipoUsuario=='*'"></NavbarC>
        <NavbarCli v-if="tipoUsuario=='$'"></NavbarCli>

        <h2 class="titulos" style="margin: 2% 0 4% 0 !important">Formulario de registro</h2>
        <FormularioJuridicoVue :id="$route.params.id"></FormularioJuridicoVue>
    
    </div>
</template>

<script>



import FormularioJuridicoVue from '@/components/FormularioJuridico.vue';
import Navbar from '@/components/CompAdm/Navbar.vue';
import NavbarC from '@/components/Comunes/Navbar.vue';
import NavbarCli from '@/components/CompClientes/Navbar.vue';

export default{
    props:{
        tipoUsuario:'',
       

    },
    components:{
        FormularioJuridicoVue,Navbar,NavbarC,NavbarCli
    },
    created(){
        this.tipoUsuario=this.$route.params.tipoUsuario
        console.log(this.tipoUsuario)
        
        
    }
}
</script>