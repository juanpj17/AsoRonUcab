import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetalleProducto from '@/views/Administrador/DetalleProductoView.vue'
import RegistrarProducto from '@/components/CompAdm/RegistrarProducto.vue'
import RegistrarPremio from '@/views/Administrador/RegistrarPremio'
import NotaCata from '@/views/Administrador/NotaCata.vue'
import PrincipalProducto from '@/views/Administrador/PrincipalProducto.vue'
import RegistrarProductoView from '@/views/Administrador/RegistrarProductoView.vue'
import PrincipalProveedor from '@/views/Administrador/PrincipalProveedor.vue'
import PrincipalAfiliados from '@/views/Clientes/PrincipalAfiiados.vue'
import MiCuenta from '@/views/Clientes/MiCuenta.vue'
import PrincipalEventos from '@/views/Administrador/PrincipalEventos.vue'
import PrincipalEventosC from '@/views/Clientes/PrincipalEventos.vue'
import PrincipalPago from '@/views/Clientes/PrincipalPago.vue'
import PrincipalProductoC from '@/views/Clientes/PrincipalProductos.vue'
import PrincipalCarrito from '@/views/Clientes/PrincipalCarrito.vue'

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

]

const router = new VueRouter({
  routes
})

export default router
