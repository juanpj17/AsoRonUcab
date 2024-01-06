<template>
    <b-container fluid style="background-color: var(--fondo)">
      <h1 class="titulos">Inventario</h1>
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
        <b-col cols="11"></b-col>
       
        <b-col class="my-1" >
          <b-form-group
            label="Max de filas"
            label-for="per-page-select"
            label-align-sm="right"
            label-size="sm"
            class="mb-0"
            
          >
            <b-form-select  class="custom-select mr-sm-2  form-control altura"
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
        <!-- Columna de stock con botones "+" y "-" -->
        <template #cell(stock)="row">
          <div class="d-flex justify-content-center">
            <b-button @click="decreaseStock(row.item)" variant="danger" size="sm">-</b-button>
            <span class="mx-2">{{ row.item.stock }}</span>
            <b-button @click="increaseStock(row.item)" variant="success" size="sm">+</b-button>
            
          </div>
         
        </template>
        <template #cell(precio)="row">
          <div class="d-flex justify-content-center">
          <span class="mx-2">.</span>
          <b-input v-model="row.item.precio" ></b-input>
          </div>
         
        </template>
  

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
        cod_tipo_usuario:''
      },
      data() {
        return {
          items: [
          ],
          fields: [
          { key: 'id', label: 'Codigo',sortable: true  },
            { key: 'nombre', label: 'Nombre', class: 'text-center',sortable: true  },
            { key: 'presentacion', label: 'Presentacion', class: 'text-center',sortable: true  },
            { key: 'stock', label: 'Stock', class: 'text-center',sortable: true  },
            { key: 'precio', label: 'Precio', class: 'text-center',sortable: true  },
            { key: 'tipo', label: 'Tipo de inventario', class: 'text-center',sortable: true  },

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
        this.cod_tipo_usuario=this.$route.params.cod_tipo_usuario
      },
      methods: {
        onFiltered(filteredItems) {
          // Trigger pagination to update the number of buttons/pages due to filtering
          this.totalRows = filteredItems.length
          this.currentPage = 1
        },
      LlenarTabla(){
        this.items=[{id:1,nombre:'Ron Santa teresa',presentacion:'0,75l',stock:'9',tipo:'Virtual'},
        {id:3,nombre:'Ron Santa teresa 2',presentacion:'0,80l',stock:'9',tipo:'Fisico',precio:'0'},
        {id:2,nombre:'Ron Santa teresa 3',presentacion:'0,90l',stock:'9',tipo:'Virtual',precio:'0'},
        {id:4,nombre:'Ron Santa teresa4',presentacion:'0,95l',stock:'9',tipo:'Fisico',precio:'0'},
        {id:5,nombre:'Ron Santa teresa5',presentacion:'0,66l',stock:'9',tipo:'Virtual',precio:'0'},
        {id:6,nombre:'Ron Santa teresa6',presentacion:'0,94l',stock:'9',tipo:'Fisico',precio:'0'},
        {id:7,nombre:'Ron Santa teresa7',presentacion:'0,68l',stock:'9',tipo:'Fisico',precio:'0'}]
      },
      decreaseStock(item) {
          if (item.stock > 0) {
            item.stock--;
           
          }
        },
        increaseStock(item) {
          item.stock++;
          
        },
          
        async  insertarAuditoria(Accion,Tabla){
            const dato={
              cod_tipo_usuario:this.cod_tipo_usuario,accion:Accion,tabla:Tabla}
            const url = 'http://localhost:3000/api/usuario/insertarAuditoria';
            await this.axios.post(url,dato).then(response => {
            console.log('auditoria realizada')
            }).catch(error => {
              console.log(error);
            });
          } 

      }
    }
  </script>
  <style>
  table#table-transition-example .flip-list-move {
  transition: transform 1s;
}
span{
  display:grid !important;
}

  </style>