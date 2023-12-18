<template>
    <div>
        <Navbar v-if="tipoUsuario=='%'"></Navbar>
        <NavbarC v-if="tipoUsuario=='*'"></NavbarC>
        <NavbarCli v-if="tipoUsuario=='$'"></NavbarCli>

        <h2 style="margin-bottom:60px">Formulario de registro</h2>
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