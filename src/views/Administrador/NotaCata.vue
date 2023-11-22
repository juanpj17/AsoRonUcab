<template>
    <div>
        <Navbar></Navbar>
        <AdministrarNotaCata></AdministrarNotaCata>
    
    </div>
</template>

<script>
import AdministrarNotaCata from '../../components/CompAdm/AdministrarNotaCata.vue';
import Navbar from '../../components/CompAdm/Navbar.vue';
export default{
    components:{
  
   AdministrarNotaCata,
        Navbar
}
}
</script>