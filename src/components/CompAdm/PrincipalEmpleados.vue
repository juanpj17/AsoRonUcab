<template>
    <b-container fluid style="background-color: var(--fondo);">
        <h1 class="titulos">Registro de empleados</h1>
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
       
        <b-col class="my-1"  cols="1">
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
      <div style="margin-bottom: 50px;"> <b-button pill class="boton" size="lg"  @click="RegistrarEmpleado()"><b-icon icon="plus-circle" scale="3"> </b-icon></b-button>
      </div>
     
      <!-- Main table element -->
      <b-table
      id="table-transition-example"
        :items="items"
        :fields="fields"
        :current-page="currentPage"
        :per-page="perPage"
        :filter="filter"
        :filter-included-fields="filterOn"
        :sort-by.sync="sortBy"
        hover
        outlined
        stacked="md"
        show-empty
        small
        @filtered="onFiltered"
        primary-key="id"
        :tbody-transition-props="transProps"

      >
<!------------------ Columna de acciones con botón de eliminar y modificar --------------------->
      <template #cell(actions)="row">
        <b-button icon="delete" variant="danger" size="sm">
          <i class="bi bi-trash-fill"></i> Eliminar
        </b-button>

        <b-button size="sm" style="margin-left: 10px; background-color: var(--verde)" @click="info(row.item)" class="mr-1">
          Detalles
        </b-button>
        <b-button size="sm" style="margin-left: 10px; background-color: blue; border-color: blue" @click="RegistrarEmpleado()" class="mr-1">
         Modifiar
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
      <b-pagination
            v-model="currentPage"
            :total-rows="totalRows"
            :per-page="perPage"
            class="my-0"
            align="fill"
            size="sm"
          ></b-pagination>
  <b-modal v-model="mostrarModal" size="lg" scrollable>
      <template #modal-title>
       
        <h2>Detalles del empleado</h2>
      </template>
      <template #default>
          <table class="table table-bordered">
              <thead>
                  <tr>
                      <th>Rif</th>
                      <th>Correo</th>
                      <th>Direccion</th>
                     
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="item in infoModal" :key="item.age">
                      <td>{{ item.Rif }}</td>
                      <td>{{ item.Correo }} </td>
                      <td>{{ item.Direccion }} </td>
                  </tr>
              </tbody>
          </table>
          <table class="table table-bordered">
              <thead>
                  <tr>
                      <th>Telefonos</th>
                     
                     
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="item in infoTelefonos" :key="item.age">
                      <td>{{ item }}</td>
                      
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
          items: [
          ],
          fields: [
          { key: 'Codigo', label: 'Codigo',sortable: true  },
              { key: 'Nombre_Completo', label: 'Nombre completo', class: 'text-center',sortable: true  },
              { key: 'Cedula', label: 'Cedula', class: 'text-center',sortable: true  },
              { key: 'Rol', label: 'Rol', class: 'text-center', sortable: true },
              { key: 'actions', label: 'Opciones', class: 'text-center', sortable: true },
          ],
          totalRows: 1,
          infoModal: [],
          infoTelefonos:[],
          mostrarModal:false,
          currentPage: 1,
          perPage: 5,
          pageOptions: [5, 10, 15],
          filter: null,
          filterOn: [],
          transProps: {
          // Transition name
          name: 'flip-list',
          sortBy: 'Codigo',
          empleado: {}
        },

         
        }
      },
      created(){
        this.ObtenerEmpleados();
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
        info(item) {
              // Puedes actualizar infoModal con los detalles del pedido específico
              this.infoModal = [item];
              this.infoTelefonos=[1,2,3]
              this.mostrarModal = true;
            
        },

        onFiltered(filteredItems) {
          // Trigger pagination to update the number of buttons/pages due to filtering
          this.totalRows = filteredItems.length
          this.currentPage = 1
        },

        LlenarTabla(){
            this.items=[{ Codigo: 1, Nombre_Completo: 'Gabriela Martinez', Direccion: 'Caracas,Los simbolos edificio Toscana',Correo:'gaby@gmail.com',Rif:'314531182',Rol:'Administrador' },
            { Codigo: 3, Nombre_Completo: 'Gabriela Martinez', Direccion: 'Caracas,Los simbolos edificio Toscana',Correo:'gaby@gmail.com',Rif:'314531182',Rol:'Administrador' }
            ,{ Codigo: 2, Nombre_Completo: 'Gabriela Martinez', Direccion: 'Caracas,Los simbolos edificio Toscana',Correo:'gaby@gmail.com',Rif:'314531182',Rol:'Administrador' }
            ]
        },

        RegistrarEmpleado(){
             if (this.$route.path!='/PrincipalRegistroNatural/*/%')
             this.$router.push('/PrincipalRegistroNatural/*/%');
        },

        async ObtenerEmpleados() {
            const url = 'http://localhost:3000/api/empleado';
            await this.axios.get(url).then(response => {
                this.empleado = response.data;
                console.log(this.empleado)
            }).catch(error => {
                console.log(error);
            });
        },

      }
    }
  </script>
  <style>
  table#table-transition-example .flip-list-move {
  transition: transform 1s;
}
  </style>