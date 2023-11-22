<template>
  <div class="home">
    <NavBar></NavBar>
   
  </div>
</template>

<script>
// @ is an alias to /src
import Catalogo from '@/components/Catalogo.vue';
import GenerarQR from '@/components/GenerarQR.vue'
import DetalleProducto from '@/components/DetalleProducto.vue';
import FormularioNatural from '@/components/FormularioNatural.vue';
import FormularioJuridico from '@/components/FormularioJuridico.vue';
import EventoRegistro from "@/components/EventoRegistro.vue"
import RegistrarProducto from '@/components/RegistrarProducto.vue';
import TablaClientes from '@/components/TablaClientes.vue';
import CrearRolVue from '@/components/CrearRol.vue';
import TablaRoles from '@/components/TablaRoles.vue';
import Carrito from '@/components/Carrito.vue';
import MetodoPagoOnline from '@/components/MetodoPagoOnline.vue';
import prueba from '@/components/prueba.vue';
import PrincipalProducto from '@/components/CompAdm/PrincipalProducto'
import NavBar from '@/components/CompAdm/Navbar'
export default {

  name: 'HomeView',
  components: {
    GenerarQR,DetalleProducto,FormularioNatural,FormularioJuridico,EventoRegistro,RegistrarProducto,TablaClientes,CrearRolVue,TablaRoles,prueba,Catalogo,Carrito,MetodoPagoOnline
  ,PrincipalProducto,NavBar
  }
}
</script>
