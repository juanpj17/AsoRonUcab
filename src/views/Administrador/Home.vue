<template>
    <b-container fluid style="background-color: var(--fondo)">
    <div>
        <Navbar></Navbar>
        <div style="background-color: black;">
            <h1 class="titulos">Estadísticas</h1>
        </div>
        <b-container style="margin-top: 20px;">
            <b-row style="margin-bottom: 20px; margin-left: 0%;">
                <b-col cols="2" style="margin-left: 0%;text-align: left;">
                    <b-button style="background-color: #fff;" pill variant="outline-light" v-b-toggle.sidebar-no-header>
                        <b-icon icon="bell" animation="cylon" font-scale="2" variant="warning">
                        </b-icon>
                    </b-button>
                </b-col>
            </b-row>
            <b-row> 
                <b-col >
                    <b-card border-variant="warning" text-variant="black" class="text-center hov" >
                        <b-card-title style="color:#833440; font-family:serif;">Punto   <b-icon  icon = " bullseye"  animación = "cylon-vertical"  font-scale = "5"   variant="info"> </b-icon></b-card-title>
                         
                      
                        <b-button v-b-toggle.collapse-1 @click=" tipo_historico()" variant="warning"> Consultar Historico</b-button>
                     </b-card>
                </b-col>
                <b-col> 
                    <b-card border-variant="warning" text-variant="black" class="text-center hov" >
                        <b-card-title style="color:#833440; font-family:serif;">Tasa de Cambio   <b-icon  icon = "cash-coin"  animación = "cylon-vertical"  font-scale = "5" variant="info" > </b-icon> </b-card-title>
                       
                        <b-button v-b-toggle.collapse-1  @click="tipo_historicob()"  variant="warning" > Consultar Historico</b-button>
                     </b-card>
                 </b-col>
            </b-row>
            <b-collapse id="collapse-1" class="mt-2">
                <h4 v-if="tipo=='a'">Historico de puntos</h4>
                <h4 v-if="tipo=='b'">Historico del precio del dolar</h4> 
            <b-row>
                <b-col></b-col>
                <b-col lg="12"><TablaHistoricoVue :tipo_historico="this.tipo" :key="key"></TablaHistoricoVue ></b-col>
                <b-col></b-col>
            </b-row>
            </b-collapse>
            <b-row>
              <h4 style="margin-top: 20px; color:#833440; font-family:serif;">Ventas con canjeo de puntos</h4>
                <b-col></b-col>
                <b-col lg="12"><TablaVentaConPuntoVue></TablaVentaConPuntoVue></b-col>
                <b-col></b-col>
            </b-row>
            <b-row>
              <h4 style="margin-top: 20px;color:#833440; font-family:serif;">Ventas con canjeo de puntos</h4>
                <b-col></b-col>
                <b-col lg="12"><TablaProductosCategoriaVue></TablaProductosCategoriaVue></b-col>
                <b-col></b-col>
            </b-row>
            <b-row>
              <h4 style="margin-top: 20px;color:#833440; font-family:serif;">Inventario Fisico</h4>
                <b-col></b-col>
                <b-col lg="12"><ReporteInvFisicoVue></ReporteInvFisicoVue></b-col>
                <b-col></b-col>
            </b-row>
            <b-row>
              <h4 style="margin-top: 20px;color:#833440; font-family:serif;">Invetario Virtual</h4>
                <b-col></b-col>
                <b-col lg="12"><ReporteInvVirtualVue></ReporteInvVirtualVue></b-col>
                <b-col></b-col>
            </b-row>
        </b-container>
        <b-sidebar id="sidebar-no-header"   no-header shadow>
            <template #default="{ hide }">
        <div class="p-3">
          <b-button variant="light" block @click="hide" style="margin-left: 80%;" ><b-icon icon="x-lg" scale="0.60"></b-icon></b-button>
          <div v-for="(elemento, index) in OrdenesDeCompra" :key="index">
            <b-alert show variant="warning"  style="text-align: left; cursor: pointer; margin-top: 10px;" ><b-button variant="warning" @click="MostrarFactura(elemento.id)" class="alert-link">{{ 'Orden: '+elemento.id +' Fecha de emision: '+ elemento.fechaDeEmision}}</b-button></b-alert>
          
        </div>
        </div>
      </template>
        </b-sidebar>
    </div>
</b-container>
</template>

<script>
import TablaHistoricoVue from '@/components/CompAdm/TablaHistorico.vue';

import Navbar from '../../components/CompAdm/Navbar.vue';

import TablaProductosCategoriaVue from '@/components/CompAdm/TablaProductosCategoria.vue';
import TablaVentaConPuntoVue from '@/components/CompAdm/TablaVentaConPunto.vue';
import ReporteInvFisicoVue from '@/components/CompAdm/ReporteInvFisico.vue';
import ReporteInvVirtualVue from '@/components/CompAdm/ReporteInvVirtual.vue';

    export default{
        props:{
            cod_tipo_usuario:''
        },
         components:{
        Navbar,TablaHistoricoVue,TablaProductosCategoriaVue,TablaVentaConPuntoVue,ReporteInvFisicoVue,ReporteInvVirtualVue
        },
        mounted() {
        this.cod_tipo_usuario=this.$route.params.cod_tipo_usuario
      },
      created(){
        this.obtenerOrdenes()
      },
     data(){
        return{
            tipo:'a',
            key:1,
            valor:'',
            OrdenesDeCompra:[]
        }},
        methods:{
            tipo_historico(){
            this.key++
            this.tipo='a'
        this.insertarAuditoria('Consultar','Punto')},
            tipo_historicob(){
            this.key++
            this.tipo='b'
            this.insertarAuditoria('Consultar','Tasa')},

            MostrarFactura(id){
                if (this.$route.path!='/Compras/'+id+'/'+this.cod_tipo_usuario)
            this.$router.push('/Compras/'+id+'/'+this.cod_tipo_usuario);
            },
            
            async  insertarAuditoria(Accion,Tabla){
            const dato={
              cod_tipo_usuario:this.cod_tipo_usuario,accion:Accion,tabla:Tabla}
            const url = 'http://localhost:3000/api/usuario/insertarAuditoria';
            await this.axios.post(url,dato).then(response => {
            console.log('auditoria realizada')
            }).catch(error => {
              console.log(error);
            });
          } ,
          async obtenerOrdenes() {
            const url = 'http://localhost:3000/api/orderReposicion';
            await this.axios.get(url).then(response => {
              this.orden = response.data;
              console.log(this.orden)
             this.llenarTabla(this.orden)
            }).catch(error => {
              console.log(error);
            });
        },
        llenarTabla(data){
          for (let i = 0; i < data.length; i++) {
            const item = {
              id: data[i].codigo,
              fechaDeEmision: data[i].fecha_inicio,
            };
            
            this.OrdenesDeCompra.push(item)
          }
        },

        },
      
       

        }
</script>
<style>
.hov{
    background-color: powderblue;

  transition: background-color 0.1s;
}
.hov:hover{
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

</style>