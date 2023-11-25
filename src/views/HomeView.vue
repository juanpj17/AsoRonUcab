<template>
  <div class="home">
 
   <PrincipalEventos></PrincipalEventos>

   </div>
</template>

<script>
// @ is an alias to /src
import PrincipalEventos from './Administrador/PrincipalEventos.vue';

import PrincipalProveedoresVue from '@/components/CompAdm/PrincipalProveedores.vue';
import Catalogo from '@/components/Catalogo.vue';
import GenerarQR from '@/components/GenerarQR.vue'
import DetalleProducto from '@/components/DetalleProducto.vue';
import FormularioNatural from '@/components/FormularioNatural.vue';
import FormularioJuridico from '@/components/FormularioJuridico.vue';

import RegistrarProducto from '@/components/RegistrarProducto.vue';
import TablaClientes from '@/components/TablaClientes.vue';
import CrearRolVue from '@/components/CrearRol.vue';
import TablaRoles from '@/components/TablaRoles.vue';
import Carrito from '@/components/Carrito.vue';
import MetodoPagoOnline from '@/components/MetodoPagoOnline.vue';
import prueba from '@/components/prueba.vue';
import PrincipalProducto from '@/components/CompAdm/PrincipalProducto'
import NavBar from '@/components/CompAdm/Navbar'
import PrincipalClientes from '@/components/CompAdm/PrincipalClientes.vue';
import NavbarC from '@/components/CompClientes/Navbar.vue'
import Carnet from '@/components/CompClientes/Carnet.vue'
import PrincipalAfiiadosVue from '@/views/Clientes/PrincipalAfiiados.vue'
import MiCuentaVue from './Clientes/MiCuenta.vue';
export default {

  name: 'HomeView',
  components: {
    GenerarQR,DetalleProducto,FormularioNatural,FormularioJuridico,RegistrarProducto,TablaClientes,CrearRolVue,TablaRoles,prueba,Catalogo,Carrito,MetodoPagoOnline
  ,PrincipalProducto,NavBar,PrincipalClientes,PrincipalProveedoresVue,NavbarC,Carnet,PrincipalAfiiadosVue,MiCuentaVue,PrincipalEventos
  }
}
</script>
