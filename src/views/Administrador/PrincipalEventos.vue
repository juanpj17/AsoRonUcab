<template>
    <div>
      <navbar></navbar>

      <div>
        <b-tabs  justified>
    
          <b-tab  title="Registrar evento" active > 
            <div style="background-color: var(--fondo)">
              <RegistrarEvento></RegistrarEvento> 
            </div>
          </b-tab>
          <b-tab title="Consultar Eventos"> 
            <div style="background-color: var(--fondo)">
              <PrincipalEventoVue></PrincipalEventoVue>
            </div>
          </b-tab>
        </b-tabs>
      </div>   
     
    </div>
</template>

<script>
import Navbar from '../../components/CompAdm/Navbar.vue';


import PrincipalEventoVue from '@/components/CompAdm/PrincipalEvento.vue';
import RegistrarEvento from '@/components/CompAdm/RegistrarEvento.vue';

export default{
    components:{
      Navbar,PrincipalEventoVue, RegistrarEvento
    },
  
}
</script>
<style scoped>




</style>