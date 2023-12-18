<template>
    <div>
        <NavbarVue v-if="tipoUsuario=='$'" class="principal"></NavbarVue>
        <NavbarC v-if="tipoUsuario=='*'" class="principal"></NavbarC>
        <CatalogoEventosVue :tipUsuario="tipoUsuario"></CatalogoEventosVue>
        
    </div>
</template>

<script>
import NavbarVue from '@/components/CompClientes/Navbar.vue'
import CatalogoEventosVue from '@/components/CompClientes/CatalogoEventos.vue'
import NavbarC from '@/components/Comunes/Navbar.vue';


export default{
    props:{
        tipoUsuario:''
    },
    components:{
  
   NavbarVue,CatalogoEventosVue,NavbarC
},
created(){
    this.tipoUsuario=this.$route.params.tipoUsuario
    console.log(this.tipoUsuario)
}
}
</script>