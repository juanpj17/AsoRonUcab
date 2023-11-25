<template>
    <div>
<navbar></navbar>
        <PrincipalProveedoresVue></PrincipalProveedoresVue>
    </div>
</template>

<script>
import Navbar from '../../components/CompAdm/Navbar.vue';
import PrincipalProveedoresVue from '@/components/CompAdm/PrincipalProveedores.vue';


export default{
    components:{
  
   PrincipalProveedoresVue,Navbar
}
}
</script>