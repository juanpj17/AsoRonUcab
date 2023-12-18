<template>
<<<<<<< HEAD
    <div>
      
  
      <!-------------------------------------- Esto seria Tienda física --------------------------------------->
      <div class="container">
          <div class="row" style="border-bottom: 2px solid black;">
              <div class="col-4 espace">
                <div class="espace" style="height: 100%;">
                    <button class="btn btn-primary" style="width: 185px; height: 65px" @click="getMonitor">Agregar</button>
                </div>
              </div>
              <div class="col-4 espace">
                <div style="text-align: center;">
                  <p style="margin: 5px 0; font-size: 25px;"><strong>DATOS DE CLIENTE</strong></p>
                  <p style="margin: 5px 0;">NOMBRE: Andrea Cedeño</p>
                  <p style="margin: 5px 0;">CEDULA: 283179652</p>
                  <p style="margin: 5px 0;">TELF: 04141060970</p>
                  <p style="margin: 5px 0;">DIRECCION: Caracas</p>
                </div>
              </div>
              <div class="col-4 espace" style="border: 2px solid black;">
  
                  <div class="centered-div">
                    <p><strong>PUNTOS CLIENTE</strong></p>
                    <p>22</p>
                    <p><strong class="total">TOTAL</strong></p>
                    <p>1200 BS</p>
                    <p>33$</p>
  
                </div>
              </div>
          </div>
          <div class="tabla-con-scroll">
            <table  class="table mt-4">
              <thead style="border-bottom: 2px solid black;">
                  <tr>
                      <th>Encabezado 1</th>
                      <th>Encabezado 2</th>
                      <th>Encabezado 3</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>Dato 1</td>
                      <td>Dato 2</td>
                      <td>Dato 3</td>
                  </tr>
                  <tr>
                      <td>Dato 4</td>
                      <td>Dato 5</td>
                      <td>Dato 6</td>
                  </tr>
                  <tr>
                      <td>Dato 1</td>
                      <td>Dato 2</td>
                      <td>Dato 3</td>
                  </tr>
                  <tr>
                      <td>Dato 4</td>
                      <td>Dato 5</td>
                      <td>Dato 6</td>
                  </tr>
                  <tr>
                      <td>Dato 1</td>
                      <td>Dato 2</td>
                      <td>Dato 3</td>
                  </tr>
                  <tr>
                      <td>Dato 4</td>
                      <td>Dato 5</td>
                      <td>Dato 6</td>
                  </tr>
                  <tr>
                      <td>Dato 1</td>
                      <td>Dato 2</td>
                      <td>Dato 3</td>
                  </tr>
                  <tr>
                      <td>Dato 4</td>
                      <td>Dato 5</td>
                      <td>Dato 6</td>
                  </tr>
                  <tr>
                      <td>Dato 19</td>
                      <td>Dato 29</td>
                      <td>Dato 39</td>
                  </tr>
                  <tr>
                      <td>Dato 49</td>
                      <td>Datogfffff 59</td>
                      <td>Dato 69</td>
                  </tr>
              </tbody>
            </table>
          </div>
          <div class="row">
            <div class="col-12 azul-inferior">
              <button class="boton-canjear btn btn-primary" @click="modalCanjear">Canjear</button>
              <button class="boton-pagar btn btn-primary">Pagar</button>
            </div>
            <div v-if="modalVisible" class="modal">
              <div class="modal-content">
                <span class="close" @click="closeModal">&times;</span>
                <div class="modal-inner-content">
                  <p class="modal-title total">Puntos disponibles</p>
                  <p class="modal-number centered-div">13</p>
                  <input type="text" class="modal-input" placeholder="Ingrese un valor" />
                  <div class="modal-buttons">
                    <button class="btn btn-primary btn_position" >Canjear</button>
                    <button class="btn btn-primary btn_position" style="margin-left:30px"  @click="closeModal">Cancelar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </template>
  
  <script>
  
  
  
=======
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
>>>>>>> 5627cb3f037dbe872ac828a604eda980a8791084

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
    import axios from 'axios';
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
<<<<<<< HEAD
  
  
  
    methods: {
      modalCanjear() {
        this.modalVisible = true;
        console.log('funciona el click')
      },
      closeModal() {
        this.modalVisible = false;
        
      },
      obtenerEstadoCasillas() {
      const a = []
      this.arrayCheckBox.forEach((item, index) => {
        a.push(this.arrayCheckBox[index].selected)
      });
      console.log(a);
      setTimeout(() => {
        this.arrayCheckBox.forEach((item, index) => {
        this.arrayCheckBox[index].selected = false;
=======

    created(){
      this.getMonitor()
        .then(price => {
        console.log('Precio del dólar:', price);
        })
        .catch(error => {
            console.error('Error al obtener el precio del dólar:', error);
>>>>>>> 5627cb3f037dbe872ac828a604eda980a8791084
        });
    },

    methods:{
        CrearOrden(){
            let producto={Nombre:'Santa teresa',Cantidad:1,Precio:50}
            this.items.push(producto);
        },

      /*async getMonitor() {
        try {
            const instance = axios.create({
                baseURL: 'https://pydolarvenezuela-api.vercel.app/api/v1/dollar/',
                timeout: 1000,
            });

            const response = await instance.get();
            const allMonitors = response.data['monitors'];
            const bcvData = allMonitors['bcv'];
            return bcvData.price;
            } catch (error) {
                console.error(error);
                throw error; 
            }
      },*/

        async getMonitor() {
         // https://bcv-api.deno.dev/v1/exchange
            const api = 'https://pydolarvenezuela-api.vercel.app/api/v1/dollar/';
            try {
                const response = await this.getContentPage(api);
                const allMonitors = response['monitors'];
                console.log(allMonitors)
                const monitorData = allMonitors['bcv'];
                console.log(monitorData.price);
                this.orden=[];
                console.log(this.orden);
                this.orden.push({
                      idProducto: 0,
                      idCliente: 1,
                      nombre: 0,
                      precio: 1,
                      nombreImagen: 0,
                      stock: 1,
                      cantidad: 1,
                      total: 0,
                });
                console.log(this.orden);
                return monitorData.price;
            } catch (error) {
                console.error(`KeyError: ${error.message}`);
            }
      },
      Pagar(){
        if (this.$route.path!='/PagarTiendaFisica')
             this.$router.push('/PagarTiendaFisica');
      },

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