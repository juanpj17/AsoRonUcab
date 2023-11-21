<template>
  <div class="home">
    <VistaProducto></VistaProducto>
   
  </div>
</template>

<script>
// @ is an alias to /src
import GenerarQR from '@/components/GenerarQR.vue'
import DetalleProducto from '@/components/DetalleProducto.vue';
import FormularioNatural from '@/components/FormularioNatural.vue';
import FormularioJuridico from '@/components/FormularioJuridico.vue';
import EventoRegistro from "@/components/EventoRegistro.vue"
import VistaProducto from '@/components/VistaProducto.vue';

export default {
  name: 'HomeView',
  components: {
    GenerarQR,DetalleProducto,FormularioNatural,FormularioJuridico,EventoRegistro, VistaProducto
  }
}
</script>
