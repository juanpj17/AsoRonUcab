<template>
    <b-container fluid class="principal">
      <br>
      <h1>Almacen de productos</h1>
      <b-row>
        <!-- Filtro -->
        <b-col lg="4" class="my-1">
          <b-form-group
            label="Filtro"
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
                <b-button :disabled="!filter" @click="filter = ''" variant="info">Borrar</b-button>
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </b-col>
  
        <!-- Ordenamiento -->
        <b-col lg="6" class="my-1">
          <b-form-group
            v-model="sortDirection"
            label-cols-sm="3"
            label-align-sm="right"
            label-size="sm"
            class="mb-0"
          ></b-form-group>
        </b-col>
      </b-row>
      <br>
      <br>
      <!-- Tabla principal -->
      <b-table
        :items="ejemplo"
        :fields="fields"
        :current-page="currentPage"
        :filter="filter"
        :filter-included-fields="filterOn"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        :sort-direction="sortDirection"
        stacked="md"
        show-empty
        small
        @filtered="onFiltered"
        hover
        sticky-header
        head-variant="light"
      >
  
        <!-- Columna de stock con botones "+" y "-" -->
        <template #cell(stock)="row">
          <div class="d-flex justify-content-center">
            <b-button @click="decreaseStock(row.item)" variant="danger" size="sm">-</b-button>
            <span class="mx-2">{{ row.item.stock }}</span>
            <b-button @click="increaseStock(row.item)" variant="success" size="sm">+</b-button>
          </div>
        </template>
  
        <!-- Columna de acciones con botón de eliminar y bote de basura -->
        <template #cell(actions)="row">
          <b-button icon="delete" @click="eliminar(row.item)" variant="danger" size="sm">
            <i class="bi bi-trash-fill"></i> Eliminar
          </b-button>

          <b-button size="sm" @click="info(row.item)" class="mr-1">
          Info modal
        </b-button>
       
        </template>

        



        <!-- Detalles del producto -->
        <template #row-details="row">
          <b-card>
            <ul>
              <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
            </ul>
          </b-card>
        </template>
      </b-table>

      <!-- Info modal -->
      <b-modal v-model="mostrarModal" size="lg">
      <template #modal-title>
        <h5>Detalles del Pedido</h5>
      </template>
      <template #default>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>ID Cliente</th>
              <th>Nombre</th>
              <th>Cantidad</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="ej in infoModal" :key="ej.nombre">
              <td>{{ ej.age }}</td>
          
              <td>{{ 'g' }}</td>
              <td>{{ 'g'}}</td>
            </tr>
          </tbody>
        </table>
      </template>
    </b-modal>
    </b-container>
  </template>
  
  <script>
    export default {
      data() {
        return {
            ejemplo:[
         { age: 1, first_name: 'Dickerson', last_name: 'Macdonald' },
         { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
         { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
         { age: 38, first_name: 'Jami', last_name: 'Carney' }
       ],
          items:[],
          fields: [
            { key: 'age', label: 'Edad', },
            { key: 'first_name', label: 'Nombre', class: 'text-center' },
            { key: 'last_name', label: 'Stock', class: 'text-center' },
            { key: 'actions', label: 'Eliminar Producto', class: 'text-center' }
          ],
          totalRows: 1,
          currentPage: 1,
          perPage: 3,
          sortBy: '',
          sortDesc: false,
          sortDirection: 'asc',
          filter: null,
          filterOn: [],
          infoModal: [],
          mostrarModal:false
        }
      },
      created(){               
        this.mostrar()
      },
      computed: {
        sortOptions() {
          // Create an options list from our fields
          return this.fields
            .filter(f => f.sortable)
            .map(f => {
              return { text: f.label, value: f.key }
            })
        }
      },
      mounted() {
        // Set the initial number of items
        this.totalRows = this.items.length
      },
      methods: {
        info(item) {
          this.infoModal = JSON.parse(item.age)
          console.log(this.infoModal)
          this.mostrarModal=true
          
        },
        onFiltered(filteredItems) {
          // Trigger pagination to update the number of buttons/pages due to filtering
          this.totalRows = filteredItems.length
          this.currentPage = 1
        },
     
      }
    }
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&display=swap');
  .principal{
    background-color:#F4EFEE;
  }
  h1{
    font-family: 'Libre Baskerville', serif;
  }
  </style>
  