<template>
  <b-container class="bv-example-row">
  <b-row style="margin-top: 20px;">
    <b-col sm="6"><b-card bg-variant="light" text-variant="black"  class="text-center">
      <b-card-title>Datos del cliente</b-card-title>
        <b-card-text >
          <h6>Nombre: {{Nombre }}</h6>
          <h6>Cedula: {{Cedula }}</h6>  
         <h6>Telf: {{telf }}</h6> 
         <h6>Direccion: {{ Direccion }}</h6>
        </b-card-text>
      </b-card>
    </b-col>
    <b-col sm="6"><b-card bg-variant="light" text-variant="black"  class="text-center">
        <b-card-title>Puntos Cliente</b-card-title>
        <b-card-text> {{ puntos }}</b-card-text>
        <b-card-title>Total</b-card-title>
        <b-card-text>{{ total }}</b-card-text>
        
      </b-card>
    </b-col>
  </b-row>
  <b-row>
    <b-col >
       <b-input-group prepend="Codigo del producto" class="mt-3">
         <b-form-input></b-form-input>
           <b-input-group-append>
              <b-button variant="info" @click="CrearOrden()">Agregar</b-button>
          </b-input-group-append>
        </b-input-group>
    </b-col>
  </b-row>
  <div class="tabla-con-scroll">
      <b-table
          :items="items"
          :fields="fields"
          hover
          outlined
          stacked="md"
          show-empty
          small
        >
          <template #cell(name)="row">
            {{ row.value.first }} {{ row.value.last }}
          </template>
          <template #row-details="row">
            <b-card>
              <ul>
                <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
              </ul>
            </b-card>
          </template>
      </b-table>
  </div>
  <b-row>
    <b-col></b-col>
    <b-col></b-col>
    
    <b-col><b-button v-b-modal.modal-center>Canjear</b-button></b-col>
    <b-col ><b-button @click="Pagar()"> Pagar</b-button></b-col>

  <b-modal id="modal-center" centered title="Canjear puntos">
    <b-input-group prepend="Cantidad" class="mt-3">
         <b-form-input v-model="canjear"></b-form-input>
           <b-input-group-append>
              <b-button variant="info">Aceptar</b-button>
          </b-input-group-append>
        </b-input-group>
  </b-modal>
  </b-row>

</b-container>
</template>
<script>

  import * as venecodollar from 'venecodollar';
import { getDollarPrices } from 'venecodollar';
  export default {  

    data() {
      return {
        Nombre:'Gabriela Martinez',
        Cedula:29919287,
        telf:'04145767916',
        Direccion:'Caracas',
        puntos:22,
        total:'falta poner la api aqui',
        items: [],
        fields: [
          { key: 'Nombre', label: 'Nombre', },
          { key: 'Cantidad', label: 'Cantidad', class: 'text-center' },
          { key: 'Precio', label: 'Precio', class: 'text-center' },
        ],
        canjear:'',
      }
    },

    create(){
      this.getPrice();
    },

    methods:{
      CrearOrden(){
        let producto={Nombre:'Santa teresa',Cantidad:1,Precio:50}
        this.items.push(producto);
      },
      Pagar(){
        if (this.$route.path!='/PagarTiendaFisica')
             this.$router.push('/PagarTiendaFisica');
      },

      async  getDollar(){
        try{
          const response = await getDollarPrices()
          return response
        }catch(error){
        console.log(error)
      }
     },
      async getPrice(){
        let price = await getDollar();
        console.log(price)
      }
  }
}   
</script>
<style>
  .tabla-con-scroll {
    max-height: 49vh;
    overflow-y: auto;
  }
  
  .tabla-con-scroll thead {
      position: sticky;
      top: 0;
      background-color: #fff;
  }

</style>