<template>
    <div>
        <Navbar></Navbar>
        <b-container style="margin-top: 20px;">
            <b-row> 
                <b-col >
                    <b-card border-variant="success" text-variant="black" class="text-center hov" @click="tipo_historico()" >
                        <b-card-title>Valor actual del punto</b-card-title>
                        <b-card-title>1</b-card-title>
                        <b-card-text>Fecha de actualizacion</b-card-text>
                        <b-card-text>12/22/2023</b-card-text>
                     </b-card>
                </b-col>
                <b-col> 
                    <b-card border-variant="success" text-variant="black" header="Valor actual del cambio"  class="text-center hov" @click="tipo_historicob()">
                        <b-card-title>1</b-card-title>
                        <b-card-text>Fecha de actualizacion</b-card-text>
                        <b-card-text>12/22/2023</b-card-text>
                     </b-card>
                 </b-col>
            </b-row>

            <b-row>
                <b-col></b-col>
                <b-col lg="12"><TablaHistoricoVue :tipo_historico="this.tipo" :key="key"></TablaHistoricoVue ></b-col>
                <b-col></b-col>
            </b-row>
            <b-row>
                <b-col></b-col>
                <b-col lg="12"><TablaProductosCategoriaVue></TablaProductosCategoriaVue></b-col>
                <b-col></b-col>
            </b-row>

        </b-container>
     
        
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
key:1
}
},
methods:{
    tipo_historico(){
        this.key++
        this.tipo='a'

    },
    tipo_historicob(){
        this.key++
        this.tipo='b'
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