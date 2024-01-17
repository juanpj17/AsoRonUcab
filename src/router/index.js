import AsignarRoles from '@/views/Administrador/AsignarRoles.vue'
import DetalleProducto from '@/views/Administrador/DetalleProductoView.vue'
import HomeView from '../views/HomeView.vue'
import MiCuenta from '@/views/Clientes/MiCuenta.vue'
import NotaCata from '@/views/Administrador/NotaCata.vue'
import PrincipalAfiliados from '@/views/Clientes/PrincipalAfiiados.vue'
import PrincipalCarrito from '@/views/Clientes/PrincipalCarrito.vue'
import PrincipalEventos from '@/views/Administrador/PrincipalEventos.vue'
import PrincipalEventosC from '@/views/Clientes/PrincipalEventos.vue'
import PrincipalPago from '@/views/Clientes/PrincipalPago.vue'
import PrincipalProducto from '@/views/Administrador/PrincipalProducto.vue'
import PrincipalProductoC from '@/views/Clientes/PrincipalProductos.vue'
import Home from '@/views/Administrador/Home.vue'
import Inventario from '@/views/Administrador/Inventario.vue'

import PrincipalProveedor from '@/views/Administrador/PrincipalProveedor.vue'
import RegistrarPremio from '@/views/Administrador/RegistrarPremio'
import RegistrarProducto from '@/components/CompAdm/RegistrarProducto.vue'
import RegistrarProductoView from '@/views/Administrador/RegistrarProductoView.vue'
import TiendaFisica from '@/views/Administrador/TiendaFisica.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Pedidos from '@/views/Administrador/Pedidos.vue'
import PrincipalEmpleados from '@/views/Administrador/PrincipalEmpleados.vue'
import PrincipalRegistroNatural from '@/views/Comunes/PrincipalRegistroNatural.vue'
import PrincipalClientes from '@/views/Administrador/PrincipalClientes.vue'
import PrincipalRegistroJuridico from '@/views/Comunes/PrincipalRegistroJuridico.vue'
import PrincipalRoles from '@/views/Administrador/PrincipalRoles.vue'
import Login from '@/views/Comunes/Login.vue'
import  HomeAsoRon from '@/views/Comunes/HomeAsoRon.vue'
import MisPedidos from '@/views/Clientes/MisPedidos.vue'
import Compras from '@/views/Administrador/OrdenesDeCompra.vue'
import RegistrarEvento from '@/views/Administrador/RegistrarEvento.vue'
import ControlAccion from '@/views/Administrador/ControlAccion.vue'
import PagarTiendaFisica from '@/views/Clientes/PagarTiendaFisica.vue'
import PersonasContacto from '@/views/Clientes/PersonasDeContacto'
import Ficha from '@/views/Comunes/Ficha.vue'
import Horario from '@/views/Administrador/Horarios.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {

    path: '/DetalleProducto',
    name: 'DetalleProducto',

  path: '/DetalleProducto/:tipoUsuario/:idProd',
   name: 'DetalleProducto',

  component: DetalleProducto
  },
  {
    path: '/RegistrarProducto',
    name: 'RegistrarProducto',
    component: RegistrarProducto 
  },
  {
    path: '/RegistrarProductoView/:idProducto/:cod_tipo_usuario',
    name: 'RegistrarProductoView',
    component: RegistrarProductoView 
  },
  {
    path: '/RegistrarPremio',
    name: 'RegistrarPremio',
    component: RegistrarPremio 
  },
  {
    path: '/NotaCata/:id/:cod_tipo_usuario',
    name: 'NotaCata',
    component: NotaCata 
  },
  {
    path: '/PrincipalProducto/:cod_tipo_usuario',
    name: 'PrincipalProducto',
    component: PrincipalProducto
  },
  {
    path: '/PrincipalProveedor',
    name: 'PrincipalProveedor',
    component: PrincipalProveedor
  },
  {
    path: '/PrincipalAfiliados/:tipo_codigo_usuario',
    name: 'PrincipalAfiliados',
    component: PrincipalAfiliados
  },
  {
    path: '/MiCuenta',
    name: 'MiCuenta',
    component: MiCuenta
  },
  {
    path: '/PrincipalEventos/:cod_tipo_usuario',
    name: 'PrincipalEventos',
    component: PrincipalEventos,
    props: true
  },
  {
    path: '/PrincipalEventosC/:tipoUsuario',
    name: 'PrincipalEventosC',
    component: PrincipalEventosC
  },
  
  {
    path: '/PrincipalPago/:id/:tipo_pago',
    name: 'PrincipalPago',
    component: PrincipalPago
  },
  {
    path: '/PrincipalProductoC/:tipoUsuario',
    name: 'PrincipalProductoC',
    component: PrincipalProductoC
  },
  {
    path: '/PrincipalCarrito/:cod_tipo_usuario',
    name: 'PrincipalCarrito',
    component: PrincipalCarrito
  },
  {

    path: '/Home/:cod_tipo_usuario',
    name: 'Home',
    component: Home
  },
  {
    path: '/Inventario/:cod_tipo_usuario',
    name: 'Inventario',
    component: Inventario
  },{
    path: '/AsignarRoles/:id',
    name: 'AsignarRoles',
    component: AsignarRoles
  },
  {
    path: '/TiendaFisica/:cod_tipo_usuario',
    name: 'TiendaFisica',
    component: TiendaFisica,
    props: true
  },
  {
    path: '/Pedidos/:cod_tipo_usuario',
    name: 'Pedidos',
    component: Pedidos

  },
  {
    path: '/MisPedidos',
    name: 'MisPedidos',
    component: MisPedidos

  },
  {
    path: '/PrincipalEmpleados/:cod_tipo_usuario',
    name: 'PrincipalEmpleados',
    component: PrincipalEmpleados
  },
  {
    path: '/PrincipalRegistroNatural/:id/:tipoUsuario/:cod_tipo_usuario',
    name: 'PrincipalRegistroNatural',
    component:PrincipalRegistroNatural,
    props: true
  },
  {
    path: '/PrincipalRegistroJuridico/:id/:tipoUsuario/:cod_tipo_usuario',
    name: 'PrincipalRegistroJuridico',
    component:PrincipalRegistroJuridico,
    props: true
  },
  {
    path: '/PrincipalClientes/:cod_tipo_usuario',
    name: 'PrincipalClientes',
    component:PrincipalClientes
  },
  {
    path: '/PrincipalRoles/:cod_tipo_usuario',
    name: 'PrincipalRoles',
    component:PrincipalRoles
  },
  
  {
    path: '/Login',
    name: 'Login',
    component:Login
  },
  {
    path: '/HomeAsoRon/:registrado',
    name: 'HomeAsoRon',
    component:HomeAsoRon
  },
  
  {
    path: '/Compras/:id/:cod_tipo_usuario',
    name: 'Compras',
    component:Compras
  },
  {
    path: '/RegistrarEvento/:id/:cod_tipo_usuario',
    name: 'RegistrarEvento',
    component:RegistrarEvento,
    props: true
  },
  {
    path: '/ControlAccion/:cod_tipo_usuario',
    name: 'ControlAccion',
    component:ControlAccion
  },
  {
    path: '/PagarTiendaFisica/:cod_tipo_usuario',
    name: 'PagarTiendaFisica',
    component:PagarTiendaFisica
  },
  {
    path: '/PersonasContacto',
    name: 'PersonasContacto',
    component:PersonasContacto
  },
  {
    path: '/AsignarRoles/:id/:cod_tipo_usuario',
    name: 'AsignarRoles',
    component:AsignarRoles
  },
  {
    path: '/Ficha/:producto/:presentacion',
    name: 'Ficha',
    component:Ficha
  },
  {
    path: '/Horario/',
    name: 'Horario',
    component:Horario
  },
  


 

  // *****dejar este de último*****
 {
   path: '*',
   redirect: '/'
  },
 
]

const router = new VueRouter({
  routes
})

export default router
