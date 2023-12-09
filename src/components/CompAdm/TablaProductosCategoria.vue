<template>
    <b-container fluid>
        <h1 style="margin-top: 10px;">Productos vendidos por categoria</h1>
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
        
        <b-col>
           
            <b-form-group
            label="Categorias"
            label-for="per-page-select"
            label-align-sm="right"
            label-size="sm"
            class="mb-0"
            
          >
            <b-form-select
            id="per-page-select"
              v-model="Categoria"
              :options="Categorias"
            ></b-form-select>
          </b-form-group>
        </b-col>
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
            ></b-form-select>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
       
        <b-col>
            <label for="datepicker-full-width">Fecha inicial</label>
            <b-form-datepicker
      id="datepicker-full-width"
      v-model="Fecha_i"
      menu-class="w-100"
      calendar-width="100%"
      class="mb-2"
    ></b-form-datepicker>
        </b-col>
        <b-col> <label for="datepicker-full-width">Fecha final</label>
            <b-form-datepicker
      id="datepicker-full-width"
      v-model="Fecha_f"
      menu-class="w-100"
      calendar-width="100%"
      class="mb-2"
    ></b-form-datepicker></b-col>
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
          items: [{ Id:1,Nombre:'Santa teresa',Precio:20,Presentacion:'0,75'}
          ],
          fields: [
            { key: 'Nombre', label: 'Nombre', },
            { key: 'Precio', label: 'Precio', class: 'text-center' },
            { key: 'Presentacion', label: 'Presentacion', class: 'text-center' },
            
          ],
          totalRows: 1,
          currentPage: 1,
          perPage: 5,
          pageOptions: [5, 10, 15],
          filter: null,
          filterOn: [],
          Categorias:['Premium','Ultra-Premium','Estandar'],
          Categoria:'Estandar',
          Fecha_i: '',
          Fecha_f: '',

         
        }
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
      
      }
    }
  </script>