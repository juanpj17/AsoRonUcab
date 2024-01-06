<template>
    <div>
        <Navbar></Navbar>
        <AdministrarNotaCata :id="this.$route.params.id"></AdministrarNotaCata>
    
    </div>
</template>

<script>
import AdministrarNotaCata from '../../components/CompAdm/AdministrarNotaCata.vue';
import Navbar from '../../components/CompAdm/Navbar.vue';
export default{
    props:{
        id:''

    }, 
    mounted() {
      // Set the initial number of items
      this.totalRows = this.items.length
      this.id=this.$route.params.id
    },

    components:{
  
   AdministrarNotaCata,
        Navbar
}
}
</script>