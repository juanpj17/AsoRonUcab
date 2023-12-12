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
  component: DetalleProducto
  },
  {
    path: '/RegistrarProducto',
    name: 'RegistrarProducto',
    component: RegistrarProducto 
  },
  {
    path: '/RegistrarProductoView',
    name: 'RegistrarProductoView',
    component: RegistrarProductoView 
  },
  {
    path: '/RegistrarPremio',
    name: 'RegistrarPremio',
    component: RegistrarPremio 
  },
  {
    path: '/NotaCata',
    name: 'NotaCata',
    component: NotaCata 
  },
  {
    path: '/PrincipalProducto',
    name: 'PrincipalProducto',
    component: PrincipalProducto
  },
  {
    path: '/PrincipalProveedor',
    name: 'PrincipalProveedor',
    component: PrincipalProveedor
  },
  {
    path: '/PrincipalAfiliados',
    name: 'PrincipalAfiliados',
    component: PrincipalAfiliados
  },
  {
    path: '/MiCuenta',
    name: 'MiCuenta',
    component: MiCuenta
  },
  {
    path: '/PrincipalEventos',
    name: 'PrincipalEventos',
    component: PrincipalEventos
  },
  {
    path: '/PrincipalEventosC',
    name: 'PrincipalEventosC',
    component: PrincipalEventosC
  },
  
  {
    path: '/PrincipalPago',
    name: 'PrincipalPago',
    component: PrincipalPago
  },
  {
    path: '/PrincipalProductoC',
    name: 'PrincipalProductoC',
    component: PrincipalProductoC
  },
  {
    path: '/PrincipalCarrito',
    name: 'PrincipalCarrito',
    component: PrincipalCarrito
  },
  {

    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Inventario',
    name: 'Inventario',
    component: Inventario
  },{
    path: '/AsignarRoles',
    name: 'AsignarRoles',
    component: AsignarRoles
  },
  {
    path: '/TiendaFisica',
    name: 'TiendaFisica',
    component: TiendaFisica

  },
  {
    path: '/Pedidos',
    name: 'Pedidos',
    component: Pedidos

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
