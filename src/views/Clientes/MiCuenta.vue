<template>
    <div>
        <NavbarVue></NavbarVue>
        <br>
        <H1>Mis datos</H1>
        <br>
       <FormularioNaturalVue></FormularioNaturalVue>
       <br>
       <br>
       <b-button >Eliminar Cuenta</b-button>
       <br>
    </div>
</template>

<script>
import FormularioNaturalVue from '@/components/FormularioNatural.vue';
import NavbarVue from '@/components/CompClientes/Navbar.vue'



export default{
    components:{
  
   FormularioNaturalVue,NavbarVue
}
}
</script>
