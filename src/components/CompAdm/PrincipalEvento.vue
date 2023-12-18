<template>
    <div>
  <b-card no-body>
    
        <b-container fluid class="principal">
    <br>
    <h1>Registro de Proveedores</h1>
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
    <b-button pill class="boton" size="lg"><b-icon icon="plus-circle" scale="3"> </b-icon></b-button>
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
        Mas info
      </b-button>
      <b-button size="sm" style="margin-left: 10px;"  class="mr-1">
        Modificar
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
  <b-modal v-model="mostrarModal" id="modal-xl" size="xl">
      <template #modal-title>
      </template>
      <template #default>
          <table class="table table-bordered">
              <thead>
                  <tr>
                      <th>Descripcion</th> 
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="item in infoModal" :key="item.age">
                      <td>{{ item.Descripcion}}</td> 
                  </tr>
              </tbody>
          </table>
          <table class="table table-bordered">
              <thead>
                  <tr>
                      <th>Estado</th> 
                      <th>Municipio</th> 
                      <th>Parroquia</th> 
                      <th>Direccion</th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="item in infoModal" :key="item.age">
                      <td>{{ item.Estado}}</td> 
                      <td>{{ item.Municipio}}</td> 
                      <td>{{ item.Parroquia}}</td> 
                      <td>{{ item.Direccion}}</td> 
                  </tr>
              </tbody>
          </table>
         

      </template>
  </b-modal>
</b-container>


   
  </b-card>
</div>
</template>
<script>
  export default {
    data() {
      return {
        elementos:[],
        selected: null,
        ejemplo:[
              { Codigo: 1, Nombre_Evento: 'Evento 1', Direccion: 'Macdonald',Estado:'Portuguesa', Municipio:'Araure'
              ,Parroquia:'Acarigua',Descripcion:"fgngkjngmmkknklnknnnlnljn  lnlnlnlnlnln nlnlnln nlnnlnlnl nlnlnln nklnlnlnlnjnjndgnbdnbjdfubnjldbndlnjbxlnboxnblnlxonbldnbouthtjnuglxdb nbdlfjnlfnnln", Fecha_i:'22/22/2222',fecha_f:'33/44/3223',cantidadEnt:54}
             
          ],
          items:[],
          fields: [
              { key: 'Codigo', label: 'Codigo', },
              { key: 'Nombre_Evento', label: 'Nombre del evento', class: 'text-center' },
              { key: 'Fecha_i', label: 'Fecha de inicio', class: 'text-center' },
              { key: 'fecha_f', label: 'Fecha de fin', class: 'text-center' },
              { key: 'actions', label: 'Opciones', class: 'text-center' },
             
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
        agregarElemento() {
        this.elementos.push({texto:'',selected:''})
      },
      guardarInformacion() {
        console.log(this.elementos)
      },
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
    },
    
  }
</script>
<style scoped>
.boton{
    position:fixed;
    left: 20px;
    transform: translateY(-50%);
}


</style>