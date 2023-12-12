<template>
    <div>
        <Navbar></Navbar>
       <Pedidos></Pedidos>
    
    </div>
</template>

<script>
import Pedidos from '@/components/CompAdm/Pedidos.vue';
import Navbar from '../../components/CompAdm/Navbar.vue';
export default{
    components:{
  
  
        Navbar,Pedidos
}
}
</script>