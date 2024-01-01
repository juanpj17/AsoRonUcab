<template>
    <b-container fluid style="background-color: var(--fondo)">
      <h1 class="titulos">Registro de Roles</h1>
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
        
        <b-col class="my-1"  >
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
      <div  style="margin-bottom: 50px;"> <b-button pill class="boton" size="lg"  @click="AsignarRoles()"><b-icon icon="plus-circle" scale="3"> </b-icon></b-button></div>
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
        
        show-empty
        small
        @filtered="onFiltered"
        primary-key="id"
        :tbody-transition-props="transProps"

      >
      <template #cell(actions)="row">

        <b-button size="sm" style="margin-left: 10px; background-color: red; border-color: red" class="mr-1">Eliminar</b-button>
        <b-button size="sm" style="margin-left: 10px; background-color: var(--verde)" @click="info(row.item)" class="mr-1">Detalles</b-button>
        <b-button size="sm" style="margin-left: 10px; background-color: blue; border-color: blue" class="mr-1" @click="AsignarRoles(row.item.id)">Modificar</b-button>
    
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

 <b-modal v-model="mostrarModal"  id="modal-xl" size="xl"  scrollable>
      <template #modal-title>
        <h3>Detalles del rol</h3>
      </template>
      <template #default>
          <table class="table table-bordered">
              <thead>
                  <tr>
                      <th>Descripcion</th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="item in infoModal" :key="item.id">
                      <td>{{ item.Descripcion}}</td> 
                  </tr>
              </tbody>
          </table>
          <p>Permisos asignados</p>
          <table class="table table-bordered">
              <thead>
                  <tr>
                      <th>Descripcion</th>
                      <th>Accion</th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="item in infoModal" :key="item.id">
                      <td>{{ item.Descripcion}}</td> 
                      <td>{{ item.Accion}}</td>
                  </tr>
              </tbody>
          </table>
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
            { key: 'Codigo', label: 'Codigo del rol', class: ' spann', sortable: true  },
            { key: 'Nombre', label: 'Nombre de rol', class: ' spann', sortable: true  },
            { key: 'actions', label: 'Opciones', class: 'text-center spann' },

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
        roles: [],
        infoModal: [],
        mostrarModal:false,

         
        }
      },
      created(){
       this.obtenerRoles();
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
        llenarTabla(data){
          for (let i = 0; i < data.length; i++) {
            const item = {
              Codigo: data[i].codigo,
              Nombre: data[i].nombre,
            };
            
            this.items.push(item)
            console.log(this.items)
          }
        },
        async obtenerRoles() {

            const url = 'http://localhost:3000/api/roles';
            await this.axios.get(url).then(response => {
              this.roles = response.data;
              console.log(this.roles)
              this.llenarTabla(this.roles)
            }).catch(error => {
              console.log(error);
            });
        },

      },
        info(item) {
              // Puedes actualizar infoModal con los detalles del pedido específico
              this.infoModal = [item];
              this.mostrarModal = true;
              this.modficarN=item
          },
          AsignarRoles(id){
            if (this.$route.path!='/AsignarRoles/')
            this.$router.push('/AsignarRoles/' + id);
          },
          

      }
    
  </script>
  <style>
  table#table-transition-example .flip-list-move {
  transition: transform 1s;
}
  </style>