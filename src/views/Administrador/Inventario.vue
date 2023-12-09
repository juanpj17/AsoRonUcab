<template>
    <div>
        <Navbar></Navbar>
       <InventarioPrincipal></InventarioPrincipal>
    </div>
</template>

<script>

import Navbar from '@/components/CompAdm/Navbar.vue';
import InventarioPrincipal from '@/components/CompAdm/InventarioPrincipal.vue';

export default{
    components:{
  InventarioPrincipal,Navbar
    }
}
</script>