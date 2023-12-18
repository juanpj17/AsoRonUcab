<template>
    <div>
<navbar></navbar>
        <PrincipalClientes></PrincipalClientes>
    </div>
</template>

<script>
import Navbar from '../../components/CompAdm/Navbar.vue';
import PrincipalClientes from '@/components/CompAdm/PrincipalClientes.vue';


export default{
    components:{
  
   PrincipalClientes,Navbar
}
}
</script>