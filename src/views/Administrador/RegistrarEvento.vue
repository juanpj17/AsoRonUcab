<template>
    <div>
<navbar></navbar>
 <RegistrarEvento></RegistrarEvento>
      
    </div>
</template>

<script>
import Navbar from '../../components/CompAdm/Navbar.vue';
import RegistrarEvento from '@/components/CompAdm/RegistrarEvento.vue';


export default{
    components:{
  
   Navbar,RegistrarEvento
}
}
</script>