<template>
  <b-container class="bv-example-row">
    <b-row style="margin-top: 20px;">
      <b-input-group >
        <b-form-select
              id="per-page-select"
              v-model="perPage"
              :options="pageOptions"
            >Na</b-form-select>
           <b-form-input  v-model="Cliente"></b-form-input>
             <b-input-group-append>
                <b-button variant="info" @click="buscarCliente(Cliente)">Buscar</b-button>
            </b-input-group-append>
      </b-input-group>
    </b-row>
    
    <b-row style="margin-top: 20px;">
      <b-col sm="6"><b-card bg-variant="light" text-variant="black"  class="text-center">
        <b-card-title>Datos del cliente</b-card-title>
          <b-card-text >
            <h6>Nombre: {{Nombre }}</h6>
            <h6>Cedula: {{Cedula }}</h6>  
           <!-- <h6>Telf: {{telf }}</h6>  -->
           <h6>Direccion: {{ Direccion }}</h6>
          </b-card-text>
        </b-card>
      </b-col>
      <b-col sm="6"><b-card bg-variant="light" text-variant="black"  class="text-center">
          <b-card-title>Puntos Cliente</b-card-title>
          <b-card-text> {{ Puntos }}</b-card-text>
          <b-card-title>Total</b-card-title>
          <b-card-text>{{ total }}</b-card-text>
          
        </b-card>
      </b-col>
    </b-row>
    <b-row style="margin-top:10px; m">
        <b-col cols="1" class="col form-group form-floating mb-2">
           <b-form-select v-model="TipoDeVenta" :options="tipo" style="width: 195px" class="custom-select mr-sm-2  form-control "></b-form-select>
           <label style="width: 195px">Tipo de venta</label>
        </b-col>
      </b-row>
      <b-row>
        <!-- <b-col cols="2"></b-col> -->
        <b-col cols="2" style="margin-top:25px" class="col form-group form-floating mb-2" v-if="TipoDeVenta=='----Evento----'"> 
          <b-form-select  class="custom-select mr-sm-2  form-control " v-model="EventoSeleccionado" :options="Eventos.map(item => ({ text: item.nombre_evento, value: item.id }))"> </b-form-select>  
          <!-- <b-form-select :options="Eventos"  v-model="EventoSeleccionado"  class="custom-select mr-sm-2  form-control altura"></b-form-select> -->
          <label>Evento</label>
        </b-col>
      </b-row>
    <b-row>
      <b-col >
         <b-input-group prepend="Codigo del producto" class="mt-3">
           <b-form-input v-model="CodigoProducto"></b-form-input>
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
  
  export default {  

    data() {
      return {
        pageOptions:['Natural', 'Juridico'],
        perPage: 'Natural',
        Cliente:'',
        CodigoProducto:'',
        Nombre:'',
        Cedula:'',
        // telf:'',
        Direccion:'',
        Puntos:'',
        total:'falta poner la api aqui',
        items: [],
        fields: [
          { key: 'Nombre', label: 'Nombre', },
          { key: 'Cantidad', label: 'Cantidad', class: 'text-center' },
          { key: 'Precio', label: 'Precio', class: 'text-center' },
        ],
        canjear:'',
        tipo:['----Tienda----','----Evento----'],
        TipoDeVenta:'Evento',
        EventoSeleccionado:'',
        Eventos:[],
      }
    },
    created(){
        this.obtenerEventos()
      },
    methods: {
      CrearOrden(){
            let producto={Nombre:'Santa teresa',Cantidad:1,Precio:50}
            console.log(this.Cliente + this.CodigoProducto)
            this.items.push(producto);
           
        },
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

      async buscarCliente(cliente){
        console.log(cliente)
        if(this.perPage == 'Natural'){
          try {
            console.log('aca')
            const response = await this.axios.get('http://localhost:3000/api/cliente/natural', {
              params: { cedula: cliente }
            });
            const clienteNatural = response.data;
            console.log(clienteNatural);
            this.Nombre = clienteNatural[0].p_nombre;
            this.Cedula = cliente;
            this.Direccion = clienteNatural[0].direccion;
            this.Puntos = clienteNatural[0].puntos_acumulados;
          } catch (error) {
            console.error('Error al obtener el cliente natural:', error);
          }
        }else{
          try {
            const response = await this.axios.get('http://localhost:3000/api/cliente/juridico', {
              params: { rif: cliente }
            });
            const clienteJuridico = response.data;
            console.log(clienteJuridico);
            this.Nombre = clienteJuridico[0].denominacion_comercial;
            this.Cedula = cliente;
            this.Direccion = clienteJuridico[0].direccion_fisica

          } catch (error) {
            console.error('Error al obtener el cliente natural:', error);
          }
        }

      },



      llenarEventos(data){
          for (let i = 0; i < data.length; i++) {
            const item = {
              nombre_evento: data[i].nombre_evento,
              id: data[i].evento_id
            };
            console.log(data[i].nombre_evento)            
            this.Eventos.push(item)
            console.log(item)
          }
        },

    async obtenerEventos() {
            const url = 'http://localhost:3000/api/evento/actual';
            await this.axios.get(url).then(response => {
              const evento = response.data;
              
            console.log(evento)
             
            this.llenarEventos(evento)
            }).catch(error => {
              console.log(error);
            });
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