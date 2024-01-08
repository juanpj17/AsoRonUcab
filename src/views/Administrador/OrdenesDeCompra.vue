<template>
    <div>
        <Navbar></Navbar>
       <PrincipalComprasVue></PrincipalComprasVue>
     <!--   <b-modal v-model="modalShow" scrollable size="xl">
       <OrdeDeCompraVue :id="idOrdenCompra"></OrdeDeCompraVue> 
    </b-modal>  -->
    
    </div>
</template>

<script>
import PrincipalComprasVue from '@/components/CompAdm/PrincipalCompras.vue';
import Navbar from '../../components/CompAdm/Navbar.vue';
import OrdeDeCompraVue from '@/components/CompAdm/OrdeDeCompra.vue';
export default{
    props:{
        idOrdenCompra:''
    },
    data() {
      return {
        modalShow:false,
        
      }},
    components:{
        Navbar,PrincipalComprasVue,OrdeDeCompraVue
},
created(){
   
    this.MostrarFactura()
},
mounted(){
  this.idOrdenCompra=this.$route.params.id
},
methods:{
   MostrarFactura(){
    if(this.idOrdenCompra!=null)
      this.modalShow=true


   } 
}


}
</script>