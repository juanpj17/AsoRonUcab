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
        <b-col></b-col>
        <b-col class="my-1" >
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
      props:{
        tipo_historico:'',
      },
      data() {
        return {
          items: [
          ],
          fields: [
            { key: 'venta_f', label: 'Codigo de la venta', sortable:true},
            { key: 'cantidad_cangeada', label: 'Cantidad Cangeada', class: 'text-center' },
            { key: 'tipo', label: 'Tipo de Venta', class: 'text-center' },
          ],
          totalRows: 1,
          currentPage: 1,
          perPage: 5,
          pageOptions: [5, 10, 15],
          filter: null,
          filterOn: [],
          sortBy: 'venta_f',
     
         
        }
      },
      created(){
      this.historicoVentaPunto()
      
      },
     
      computed: {
        sortOptions() {
          // Create an options list from our fields
          return this.fields
            .filter(f => f.sortable)
            .map(f => {
              return { text: f.label, value: f.key }
            })
        },
  
      },
      mounted() {
        // Set the initial number of items
        this.totalRows = this.items.length
      },
      methods: {
        onFiltered(filteredItems) {
          // Trigger pagination to update the number of buttons/pages due to filtering
          this.totalRows = filteredItems.length
          this.currentPage = 1
        },
     
        llenarHistoricoTasa(data){
                     for (let i = 0; i < data.length; i++) {
                       const item = {
                         venta_f: data[i].venta_f,
                         cantidad_cangeada: data[i].cantidad_cangeada,
                         tipo:data[i].tipo
                       };
                       console.log(data[i].fecha_i)            
                       this.items.push(item)
                       console.log(item)
                     }
                   },
  
      async historicoVentaPunto(){
      const url = 'http://localhost:3000/api/punto/venta';
      await this.axios.get(url).then(response => {
        const punto = response.data;
        console.log(punto)
        console.log(punto.length)
        this.llenarHistoricoTasa(punto)
      }).catch(error => {
        console.log(error);});
      },
  
  
      
  
      }
    }
  </script>
  