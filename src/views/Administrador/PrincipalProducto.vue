<template>
    <div>
<navbar></navbar>
        <PrincipalProducto></PrincipalProducto>
    </div>
</template>

<script>
import Navbar from '../../components/CompAdm/Navbar.vue';
import PrincipalProducto from '../../components/CompAdm/PrincipalProducto.vue';


export default{
    components:{
  
   PrincipalProducto,Navbar
}
}
</script>