
<template>
    <b-container fluid>
    <!-- User Interface controls -->
    <b-row>
      <b-col lg="6" class="my-1">
        <b-form-group
          label="Filter"
          label-for="filter-input"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <b-input-group size="sm">
            <b-form-input
              id="filter-input"
              v-model="filter"
              type="search"
              placeholder="Type to Search"
            ></b-form-input>

            <b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>
    </b-row>
      
    <b-row>
      <b-col></b-col>
      <b-col class="my-1" cols="2">
        <label style="margin-top: 6px;">Mes</label>
        <b-form-select :options="meses" v-model="month"  class="custom-select mr-sm-2  form-control altura" @change="recargar()"></b-form-select>
      </b-col>
      <b-col class="my-1"  cols="2">
        <b-form-group
          label="Max de filas"
          label-for="per-page-select"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
          
        >
          <b-form-select
            id="per-page-select"
            v-model="perPage"
            :options="pageOptions"
            class="custom-select mr-sm-2  form-control altura"
          ></b-form-select>
        </b-form-group>
      </b-col>
    
      

    </b-row>

    <!-- Main table element -->
    <b-table
      :items="items"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
      :filter-included-fields="filterOn"
      
      hover
      outlined
      stacked="md"
      show-empty
      small
      @filtered="onFiltered"
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
    <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          class="my-0"
          align="fill"
          size="sm"
        ></b-pagination>
    <!-- Info modal -->
    
  </b-container>
</template>

<script>
export default {
    
    data() {
        return {
            items:[],
           month: '1',
           ventas : [],
           eventos: [],
           fields: [
          { key: 'codigo', label: 'Codigo', sortable:true},
          { key: 'presentacion', label: 'Presentacion', class: 'text-center' },
          { key: 'cantidad', label: 'Cantidad', class: 'text-center' },
          { key: 'fecha', label: 'Fecha', class: 'text-center' },
          { key: 'tipo', label: 'Tipo de Inventario', class: 'text-center' },

        ],
        totalRows: 1,
        currentPage: 1,
        perPage: 5,
        pageOptions: [5, 10, 15],
        filter: null,
        filterOn: [],
        sortBy: 'codigo',
        meses: [ 
            {text: 'Enero', value: '1'},
            {text: 'Febrero', value: '2'},
            {text: 'Marzo', value: '3'},
            {text: 'Abril', value: '4'},
            {text: 'Mayo', value: '5'},
            {text: 'Junio', value: '6'},
            {text: 'Julio', value: '7'},
            {text: 'Agosto', value: '8'},
            {text: 'Septiembre', value: '9'},
            {text: 'Octubre', value: '10'},
            {text: 'Noviembre', value: '11'},
            {text: 'Diciembre', value: '12'},

          ],
        }
    },
    created(){
//this.getGenerarReporteVentaFisica()
//this.getGenerarReporteVentaFisicaEvento()
//this.llenarTablaVentTienda()
    },
        
    methods: {
        //Metodos
        
        
        getGenerarReporteVentaFisica() {
            this.ventas = []
            const url = 'http://localhost:3000/api/inventario/ventaFisica/' + this.month;
            try {
                
                this.axios.get(url).then(response => {
                    console.log(response.data);
                    this.ventas = response.data;
                  
                })

            } 
            catch (error) {
                console.log(error);
            }
        },

        getGenerarReporteVentaFisicaEvento() {
      
          this.eventos= []
            const url = 'http://localhost:3000/api/inventario/ventaFisicaEvento/' + this.month;
            try {
                
                this.axios.get(url).then(response => {
                    console.log(response.data);
                    this.eventos = response.data;
                   this.llenarTablaVentTienda()
                })

            } 
            catch (error) {
                console.log(error);
            }
        },
        llenarTablaVentTienda(){
            
                   for (let i = 0; i < this.ventas.length; i++) {
                     const item = {
                       codigo: this.ventas[i].codigo,
                       presentacion: this.ventas[i].nombre,
                       cantidad:this.ventas[i].cantidad,
                       fecha:this.ventas[i].fecha,
                       tipo:'Tienda'
                     }         
                     this.items.push(item)
                     //console.log(item)
                   }
                   for (let i = 0; i < this.eventos.length; i++) {
                     const item = {
                       codigo: this.eventos[i].codigo,
                       presentacion: this.eventos[i].nombre,
                       cantidad:this.eventos[i].cantidad,
                       fecha:this.eventos[i].fecha,
                       tipo:'Evento'
                     }         
                     this.items.push(item)
                     //console.log(item)
                   }
                 },
                 onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
      },
      recargar(){
        this.ventas = []
        this.eventos= []
        this.items=[]
        this.getGenerarReporteVentaFisica()
        this.getGenerarReporteVentaFisicaEvento()
      }

    },
        
    mounted() {
        //Cargar datos
    }

}


</script>