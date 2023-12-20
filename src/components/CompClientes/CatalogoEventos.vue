<template>
    <div class="contenedor">
        <br>
        <h1 class="titulos">Próximos Eventos</h1>
        <b-row class="mt-5  mx-5">
            <b-col cols="12" md="6" v-for="evento in Eventos" :key="evento.id" style="margin-bottom: 25px;">
                 <b-card no-body>
                    <b-tabs pills card >
                        
                            <b-tab title="Detalle del evento" active >
                                <div style="border-bottom: solid var(--dorado)">
                                    <b-card-title style="font-family: 'Libre Baskerville', serif; color: var(--dorado)">{{ evento.Nombre }}</b-card-title>
                                </div>
                                <div style="margin-top: 10px;"></div>
                                <b-card-sub-title>Desde {{ evento.Fecha_i }} hasta {{ evento.Fecha_f }}</b-card-sub-title>
                                <div style="margin-top: 10px;"></div>
                                <b-card-sub-title>Lugar: {{ evento.direccion }}</b-card-sub-title>
                                <div style="margin-top: 10px;"></div>
                                <b-card-text> {{ evento.descripcion }}</b-card-text>
                            </b-tab>
                            <b-tab title="Comprar entradas" >
                                
                                <b-card-sub-title>Selecione una fecha</b-card-sub-title>
                                <b-form-select v-model="selected" :options="options"></b-form-select> 
                                
                                <b-container class="bv-example-row" style="margin-top:20px">
                                    <b-row>
                                        <b-card-sub-title>Selecione la cantidad de entradas</b-card-sub-title>
                                        <b-col> <b-form-spinbutton id="demo-sb" v-model="value" min="1" max="100"></b-form-spinbutton></b-col>
                                        <b-col>  <b-button block  variant="dark" @click="Pagar()">Comprar</b-button></b-col>
                                    </b-row>
                                </b-container>
                            </b-tab>
                      
                 </b-tabs>
                </b-card>
            </b-col> 
        </b-row>
    </div>
</template>
   


<script>
    import Vue from 'vue'; 
    export default{
        props:{
        tipUsuario:''
    },

        data(){
            return{
                Eventos:[
                    {
                        Nombre:'Evento 1', 
                        Fecha_i:'22/05/3435',
                        Fecha_f: '25/05/3435',
                        id:4,
                        descripcion:`Hay que llenar también el máximo número de usuarios: en este caso 252, ya que
                        tenemos una dirección barra 24 que deja disponible 254 host asignables de los cuales ya
                        se usaron dos uno para la Gateway y otro para la ip del servidor, quedándonos entonces
                        disponibles para asignar 252.`,
                        direccion:'Distrito capital,Municip libertador parroquia los simbolos, plaza las 3 gracias calle 5'
                    },
                    {
                        Nombre:'Evento 1',
                        Fecha_i:'22/05/3435',
                        Fecha_f: '28/05/3435',
                        id:4,
                        descripcion:`Hay que llenar también el máximo número de usuarios: en este caso 252, ya que
                        tenemos una dirección barra 24 que deja disponible 254 host asignables de los cuales ya
                        se usaron dos uno para la Gateway y otro para la ip del servidor, quedándonos entonces
                        disponibles para asignar 252.`,
                        direccion:'Distrito capital,Municip libertador parroquia los simbolos, plaza las 3 gracias calle 5'
                    },
                    {
                        Nombre:'Evento 1',
                        Fecha_i:'22/05/3435',
                        Fecha_f: '23/05/3435',
                        id:4,
                        descripcion:`Hay que llenar también el máximo número de usuarios: en este caso 252, ya que
                        tenemos una dirección barra 24 que deja disponible 254 host asignables de los cuales ya
                        se usaron dos uno para la Gateway y otro para la ip del servidor, quedándonos entonces
                        disponibles para asignar 252.`,
                        direccion:'Distrito capital,Municip libertador parroquia los simbolos, plaza las 3 gracias calle 5'
                    },
                    {
                        Nombre:'Evento 1',
                        Fecha_i:'22/05/3435',
                        Fecha_f: '24/05/3435',
                        id:4,
                        descripcion:`Hay que llenar también el máximo número de usuarios: en este caso 252, ya que
                        tenemos una dirección barra 24 que deja disponible 254 host asignables de los cuales ya
                        se usaron dos uno para la Gateway y otro para la ip del servidor, quedándonos entonces
                        disponibles para asignar 252.`,
                        direccion:'Distrito capital,Municip libertador parroquia los simbolos, plaza las 3 gracias calle 5'
                    },
                    {
                        Nombre:'Evento 1',
                        Fecha_i:'22/05/3435',
                        Fecha_f: '25/05/3435',
                        id:4,
                        descripcion:`Hay que llenar también el máximo número de usuarios: en este caso 252, ya que
                        tenemos una dirección barra 24 que deja disponible 254 host asignables de los cuales ya
                        se usaron dos uno para la Gateway y otro para la ip del servidor, quedándonos entonces
                        disponibles para asignar 252.`,
                        direccion:'Distrito capital,Municip libertador parroquia los simbolos, plaza las 3 gracias calle 5'
                    },
                ],
        selected: null,
        options: [
          { value: null, text: 'Please select an option' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Selected Option' },
          { value: { C: '3PO' }, text: 'This is an option with object value' },
          { value: 'd', text: 'This one is disabled', disabled: true },
          
        ],
        value: 50
            }
        }, 
        created(){
          console.log(this.tipUsuario)
        },

       
        
        methods:{
            Pagar(){
                if(this.tipUsuario!='*')
                {   console.log (this.tipoUsuario)
                    this.$router.push('/PrincipalPago');}
                else
                 this.Advertencia()
            },
            Advertencia(){
                Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Para realizar la compra debe Iniciar Sesion",
            });
            },



          
        },
    }
</script>
<style  scoped>

 

 .contenedor{
   background-color:#F4EFEE;
;

 }
 h3{
  font-family: 'Nunito', sans-serif;
 }
 h6{
  font-family: 'Nunito', sans-serif;
 }
 h5{
  font-family: 'Nunito', sans-serif;
 }
 .color{
    color: var(--verde);
 }



</style>