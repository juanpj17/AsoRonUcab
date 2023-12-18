<template>
    <div>
        <Navbar></Navbar>
        <div style="background-color: black;">
            <h3 style="color: azure;">~Estadisticas Diarias~</h3>
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
                    <b-card border-variant="success" text-variant="black" class="text-center hov" >
                        <b-card-title>Valor actual del punto</b-card-title>
                        <b-card-title>1</b-card-title>
                        <b-card-text>Ultima fecha de actualizacion</b-card-text>
                        <b-card-text>12/22/2023</b-card-text>
                        <b-button v-b-toggle.collapse-1 @click=" tipo_historico()"> Consultar Historico</b-button>
                     </b-card>
                </b-col>
                <b-col> 
                    <b-card border-variant="success" text-variant="black" header="Valor actual del cambio"  class="text-center hov" >
                        <b-card-title>1</b-card-title>
                        <b-card-text>Ultima fecha de actualizacion</b-card-text>
                        <b-card-text>12/22/2023</b-card-text>
                        <b-button v-b-toggle.collapse-1  @click="tipo_historicob()"> Consultar Historico</b-button>
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
                <b-col></b-col>
                <b-col lg="12"><TablaProductosCategoriaVue></TablaProductosCategoriaVue></b-col>
                <b-col></b-col>
            </b-row>
        </b-container>
        <b-sidebar id="sidebar-no-header" title="Notificaciones"  no-header shadow>
            <template #default="{ hide }">
        <div class="p-3">
          <b-button variant="primary" block @click="hide">Close Sidebar</b-button>
          <div v-for="(elemento, index) in OrdenesDeCompra" :key="index">
            <b-alert show variant="warning"  style="text-align: left; cursor: pointer;" ><b-button variant="warning" @click="MostrarFactura(elemento.id)" class="alert-link">{{ 'Orden: '+elemento.id +' Fecha de emision: '+ elemento.fechaDeEmision}}</b-button></b-alert>
        </div>
        </div>
      </template>
        </b-sidebar>
    </div>
</template>

<script>
import TablaHistoricoVue from '@/components/CompAdm/TablaHistorico.vue';

import Navbar from '../../components/CompAdm/Navbar.vue';

import TablaProductosCategoriaVue from '@/components/CompAdm/TablaProductosCategoria.vue';

    export default{
         components:{
        Navbar,TablaHistoricoVue,TablaProductosCategoriaVue
        },
     data(){
        return{
            tipo:'a',
            key:1,
            valor:'',
            OrdenesDeCompra:[{id:'1',fechaDeEmision:'12/12/2023'}]
        }},
        methods:{
            tipo_historico(){
            this.key++
            this.tipo='a'},
            tipo_historicob(){
            this.key++
            this.tipo='b'},
            MostrarFactura(id){
                if (this.$route.path!='/Compras/'+id)
            this.$router.push('/Compras/'+id);
            }
        }
       

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