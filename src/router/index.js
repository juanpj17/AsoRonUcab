import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetalleProducto from '@/views/Administrador/DetalleProductoView.vue'
import RegistrarProducto from '@/components/CompAdm/RegistrarProducto.vue'
import RegistrarPremio from '@/views/Administrador/RegistrarPremio'
import NotaCata from '@/views/Administrador/NotaCata.vue'
import PrincipalProducto from '@/views/Administrador/PrincipalProducto.vue'
import RegistrarProductoView from '@/views/Administrador/RegistrarProductoView.vue'

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
  

]

const router = new VueRouter({
  routes
})

export default router
