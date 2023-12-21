<template>
    <b-container fluid style="background-color: var(--fondo)">
      <h1 class="titulos">Registro de Compras</h1>
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
            ></b-form-select>
          </b-form-group>
        </b-col>
      
        
  
      </b-row>
  
      <!-- Main table element -->
      <b-table
      id="table-transition-example"
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
        primary-key="id"
        :tbody-transition-props="transProps"

      >
      <template #cell(actions)="row">
        <b-button size="sm" style="margin-left: 10px; background-color: var(--verde)" @click="info(row.item)" class="mr-1">
         Detalles
        </b-button>
      
      </template>
        <template #row-details="row">
          <b-card>
            <ul>
              <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
            </ul>
          </b-card>
        </template>
      </b-table>
 <!-- Info modal -->

 <b-modal v-model="mostrarModal"  id="modal-xl" size="xl" scrollable >
      <template #modal-title>
        <h3 >Detalles del pedido</h3>
      </template>
      <template #default>
          <table class="table table-bordered">
              <thead>
                  <tr>
                      <th>Nombre</th>
                      <th>Cantidad</th>
                      <th>Precio Unitario</th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="item in infoModal" :key="item.id">
                      <td>{{ item.Nombre}}</td> 
                      <td>{{ item.Cantidad}}</td> 
                      <td>{{ item.Precio}}</td> 

                  </tr>
              </tbody>
          </table>
          <table class="table table-bordered">
              <thead>
                  <tr>
                      <th>Estatus</th>
                      <th>Fecha y Hora</th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="item in infoModal" :key="item.id">
                      <td>{{ item.Estatus}}</td> 
                      <td>{{ item.Fecha_Hora}}</td>
                  </tr>
              </tbody>
          </table>
         <b-button>Actualizar estatus</b-button>

      </template>
  </b-modal>

      
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
            { key: 'id', label: 'Codigo del pedido',sortable: true  },
            { key: 'idCliente', label: 'Codigo del Proveedor',sortable: true  },
            { key: 'Fecha', label: 'Fecha de compra', class: 'text-center',sortable: true  },
            { key: 'Total', label: 'Total', class: 'text-center',sortable: true  },
            { key: 'Estatus', label: 'Estatus', class: 'text-center',sortable: true  },
            { key: 'actions', label: 'Detalles', class: 'text-center' },

          ],
          totalRows: 1,
          currentPage: 1,
          perPage: 5,
          pageOptions: [5, 10, 15],
          filter: null,
          filterOn: [],
          transProps: {
          // Transition name
          name: 'flip-list'
        },
        infoModal: [],
        mostrarModal:false,

         
        }
      },
      created(){
       this.LlenarTabla();
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
      LlenarTabla(){
        this.items=[
        {id:3,idCliente:1,Fecha:'9/12/2023',Total:'50bs',Estatus:'En proceso', Nombre:'Santa teresa',Cantidad:'5',Precio:33},
       ]
      },
      decreaseStock(item) {
          if (item.stock > 0) {
            item.stock--;
          }
        },
        increaseStock(item) {
          item.stock++;
          
        },
        info(item) {
              // Puedes actualizar infoModal con los detalles del pedido específico
              this.infoModal = [item];
              this.mostrarModal = true;
              this.modficarN=item
          },

      }
    }
  </script>
  <style>
  table#table-transition-example .flip-list-move {
  transition: transform 1s;
}
  </style>