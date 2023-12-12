<template>
  <div class="home">
<TiendaFisica></TiendaFisica>
<FormularioJuridico></FormularioJuridico>
   </div>
</template>

<script>
// @ is an alias to /src
import PrincipalEventos from './Administrador/PrincipalEventos.vue';
import Home from './Administrador/Home.vue';
import PrincipalProveedoresVue from '@/components/CompAdm/PrincipalProveedores.vue';
import TablaHistoricoVue from '@/components/CompAdm/TablaHistorico.vue'
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
import Punto from '@/components/CompAdm/Punto.vue'
import FacturaAfiliacion from '@/components/CompClientes/FacturaAfiliacion.vue';
import InventarioPrincipal from '@/components/CompAdm/InventarioPrincipal.vue';
import InventarioVue from './Administrador/Inventario.vue';
import MisPedidosVue from '@/components/CompClientes/MisPedidos.vue';
import PedidosVue from '@/components/CompAdm/Pedidos.vue';
import TiendaFisica from './Administrador/TiendaFisica.vue';
export default {


  name: 'HomeView',
  components: {InventarioVue,MisPedidosVue,PedidosVue,TiendaFisica,
    GenerarQR,DetalleProducto,FormularioNatural,FormularioJuridico,RegistrarProducto,TablaClientes,CrearRolVue,TablaRoles,prueba,Carrito,MetodoPagoOnline,Home,FacturaAfiliacion
  ,PrincipalProducto,NavBar,PrincipalClientes,PrincipalProveedoresVue,NavbarC,Carnet,PrincipalAfiiadosVue,MiCuentaVue,PrincipalEventos,CatalogoEventosVue,Punto,TablaHistoricoVue,InventarioPrincipal
  }
}
</script>
