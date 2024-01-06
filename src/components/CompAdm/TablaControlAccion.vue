<template>
  <b-container fluid style="background-color: var(--fondo)">
      <h1 class="titulos">Auditoria</h1>
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
      <b-col class="my-1" cols="1" >
        <b-form-group
          label="Max de filas"
          label-for="per-page-select"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
          
        >
          <b-form-select class="custom-select mr-sm-2  form-control altura"
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
     <!-- Columna de acciones con botón de eliminar y modificar -->
    
<!-- Detalles del producto -->
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
     <!-- Info modal -->

  </b-container>
</template>

<script>
  export default {
    data() {
      return {
        items: [
        ],
        fields: [
        { key: 'Codigo', label: 'Codigo de Usuario', class:'spann', sortable: true },
            { key: 'Nombre_Completo', label: 'Nombre completo', class: 'text-center spann',sortable: true },
            { key: 'Accion', label: 'Accion', class: 'text-center spann',sortable: true },
            { key: 'Tabla', label: 'Tabla', class: 'text-center spann',sortable: true },
            { key: 'Fecha_hora', label: 'Fecha y hora de la accion', class: 'text-center spann',sortable: true },
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
        tipoRegistro:'C',
        transProps: {
        // Transition name
        name: 'flip-list',
        sortBy:'Codigo',
      },
      modalShow: false,

       
      }
    },
    created(){
     this.obtenerAuditoria();
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
      llenarTabla(data){
          for (let i = 0; i < data.length; i++) {
            const item = {
              Codigo: data[i].codigo_usuario,
              Accion: data[i].accion,
              Tabla: data[i].tabla,
              Fecha_Hora: data[i].fecha_hora,
             
            };
            
            this.items.push(item)
            console.log(this.items)
          }
        },












    async  obtenerAuditoria(){
            const url = 'http://localhost:3000/api/usuario/Auditoria';
            await this.axios.get(url).then(response => {
            console.log(response.data)
            this.llenarTabla(response.data)
            }).catch(error => {
              console.log(error);
            });
          },

   RegistroNatural(id){
    if (this.$route.path!='/PrincipalRegistroNatural/')
           this.$router.push('/PrincipalRegistroNatural/'+id);
   },
   RegistroJuridico(id){
    if (this.$route.path!='/PrincipalRegistroJuridico/')
           this.$router.push('/PrincipalRegistroJuridico/'+id);
   },
   Modificar(id){
    if (this.tipoRegistro=='J'){
      this.RegistroJuridico(id)
    }
    else
    this.RegistroNatural(id)
   }

    }
  }
</script>
<style>
table#table-transition-example .flip-list-move {
transition: transform 1s;
}
</style>