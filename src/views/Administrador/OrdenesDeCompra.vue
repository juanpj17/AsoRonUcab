<template>
    <div>
        <Navbar></Navbar>
       <PrincipalComprasVue></PrincipalComprasVue>
       <b-modal v-model="modalShow" scrollable size="xl">
        <FacturaVentaVue></FacturaVentaVue>
    </b-modal>
    
    </div>
</template>

<script>
import PrincipalComprasVue from '@/components/CompAdm/PrincipalCompras.vue';
import Navbar from '../../components/CompAdm/Navbar.vue';
import FacturaVentaVue from '@/components/CompClientes/FacturaVenta.vue';
export default{
    props:{
        idOrdenCompra:''
    },
    data() {
      return {
        modalShow:false,
        
      }},
    components:{
        Navbar,PrincipalComprasVue,FacturaVentaVue
},
created(){
    this.idOrdenCompra=this.$route.params.id
    this.MostrarFactura()
},
methods:{
   MostrarFactura(){
    if(this.idOrdenCompra!=null)
      this.modalShow=true


   } 
}


}
</script>