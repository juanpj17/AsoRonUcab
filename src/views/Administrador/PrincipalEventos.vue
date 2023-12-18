<template>
    <div>
<navbar></navbar>

<div>
  <b-tabs  justified>
    
    <b-tab title="Registrar evento" active > 
     <RegistrarEvento></RegistrarEvento>
   
    </b-tab>
  
    <b-tab title="Consultar Eventos"> <PrincipalEventoVue></PrincipalEventoVue></b-tab>
    
  </b-tabs>
</div>   
=======
 <PrincipalEventoVue></PrincipalEventoVue>

      
    </div>
</template>

<script>
import Navbar from '../../components/CompAdm/Navbar.vue';


import PrincipalEventoVue from '@/components/CompAdm/PrincipalEvento.vue';

export default{
    components:{
  
   Navbar,PrincipalEventoVue
}
}
</script>