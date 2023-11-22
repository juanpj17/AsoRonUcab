<template>
  <b-container fluid class="principal">
    <br>
    <h1>Notas de cata</h1>
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

    </b-row>
    <br>
    <br>
    <!-- Tabla principal -->
    <b-table
      :items="ejemplo"
      :fields="fields"
      :filter="filter"
      :filter-included-fields="filterOn"
      stacked="md"
      show-empty
      small
      @filtered="onFiltered"
      hover
      sticky-header
      head-variant="light"
    >

     

      <!-- Columna de acciones con botón de eliminar y modificar -->
      <template #cell(actions)="row">
        <b-button icon="delete" @click="eliminar(row.item)" variant="danger" size="sm">
          <i class="bi bi-trash-fill"></i> Eliminar
        </b-button>

        <b-button size="sm" style="margin-left: 10px;" @click="info(row.item)" class="mr-1">
        Mas info/Modificar
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
          <h5>Nota de cata</h5>
      </template>
      <template #default>
          <table class="table table-bordered">
              <thead>
                  <tr>
                      <th>Descripcion de la nota</th>
                     
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="item in infoModal" :key="item.age">
                      <td>{{ item.Descripcion }}</td>
                     
                  </tr>
              </tbody>
          </table>
          <h4>Modificar nota de cata</h4>
          <b-form-input
            id="name-input"
            v-model="texto"
            required
          ></b-form-input>
          <b-button @click="Modificar()">Modificar</b-button>

      </template>
  </b-modal>
</b-container>
</template>

<script>
  export default {
    data() {
      return {
          ejemplo:[
              { Codigo: 1, Nombre_evento: 'Evento 1', Descripcion: 'Macdonald'  },
              { Codigo: 21,  Nombre_evento: 'Evento 2', Descripcion: 'Shaw'},
              { Codigo: 89, Nombre_evento: 'Evento 3', Descripcion: 'Wilson'},
              { Codigo: 38, Nombre_evento: 'Evento 3', Descripcion :'Carney'}
          ],
          items:[],
          fields: [
              { key: 'Codigo', label: 'Codigo', },
              { key: 'Nombre_evento', label: 'Nombre del evento deonde se otorgo la nota', class: 'text-center' },
              
              { key: 'actions', label: 'Opciones', class: 'text-center' }
          ],
        totalRows: 1,
        currentPage: 1,
        perPage: 3,
        filter: null,
        filterOn: [],
        infoModal: [],
        mostrarModal:false,
        texto:'',
        modficarN:'',

      }
    },
    created(){               
      
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
              // Puedes actualizar infoModal con los detalles del pedido específico
              this.infoModal = [item];
              this.mostrarModal = true;
              this.modficarN=item
          },

      onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
      },
      Modificar(){
        const resultado = this.ejemplo.find((nota) => nota.Codigo === this.modficarN.Codigo);
        console.log(resultado)
        resultado.Descripcion=this.texto;
      }
   
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