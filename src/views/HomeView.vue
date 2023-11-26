<template>
  <div class="home">
 <PrincipalAfiiadosVue></PrincipalAfiiadosVue>
   

   </div>
</template>

<script>
// @ is an alias to /src
import PrincipalEventos from './Administrador/PrincipalEventos.vue';

import PrincipalProveedoresVue from '@/components/CompAdm/PrincipalProveedores.vue';

import GenerarQR from '@/components/GenerarQR.vue'
import DetalleProducto from '@/components/DetalleProducto.vue';
import FormularioNatural from '@/components/FormularioNatural.vue';
import FormularioJuridico from '@/components/FormularioJuridico.vue';

import RegistrarProducto from '@/components/RegistrarProducto.vue';
import TablaClientes from '@/components/TablaClientes.vue';
import CrearRolVue from '@/components/CrearRol.vue';
import TablaRoles from '@/components/TablaRoles.vue';
import Carrito from '@/components/CompClientes/Carrito.vue';
import MetodoPagoOnline from '@/components/MetodoPagoOnline.vue';
import prueba from '@/components/prueba.vue';
import PrincipalProducto from '@/components/CompAdm/PrincipalProducto'
import NavBar from '@/components/CompAdm/Navbar'
import PrincipalClientes from '@/components/CompAdm/PrincipalClientes.vue';
import NavbarC from '@/components/CompClientes/Navbar.vue'
import Carnet from '@/components/CompClientes/Carnet.vue'
import PrincipalAfiiadosVue from '@/views/Clientes/PrincipalAfiiados.vue'
import MiCuentaVue from './Clientes/MiCuenta.vue';
import CatalogoEventosVue from '@/components/CompClientes/CatalogoEventos.vue';
export default {

  name: 'HomeView',
  components: {
    GenerarQR,DetalleProducto,FormularioNatural,FormularioJuridico,RegistrarProducto,TablaClientes,CrearRolVue,TablaRoles,prueba,Carrito,MetodoPagoOnline
  ,PrincipalProducto,NavBar,PrincipalClientes,PrincipalProveedoresVue,NavbarC,Carnet,PrincipalAfiiadosVue,MiCuentaVue,PrincipalEventos,CatalogoEventosVue
  }
}
</script>
