<template>
    <div>
<navbar></navbar>
        <PrincipalEmpleadosVue></PrincipalEmpleadosVue>
    </div>
</template>

<script>
import Navbar from '../../components/CompAdm/Navbar.vue';
import PrincipalEmpleadosVue from '@/components/CompAdm/PrincipalEmpleados.vue';


export default{
    components:{
  
   PrincipalEmpleadosVue,Navbar
}
}
</script>