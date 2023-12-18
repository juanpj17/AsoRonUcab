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
          ></b-form-select>
        </b-form-group>
      </b-col>
    
      

    </b-row>

    <!-- Main table element -->
    <b-row style="margin-bottom: 15px; text-align: left;">
      <b-col cols="3">
        <div>
    <b-button-group>
      <b-button variant="outline-primary" @click="MetodosPago()">
        <b-icon icon="cash-coin"></b-icon> Pagar Mensualidad
      </b-button>
      <b-button variant="outline-primary">
        <b-icon icon="trash"></b-icon> Eliminar Afiliacion
      </b-button>
    </b-button-group>
  </div>
      </b-col>
    </b-row>
    
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
    <template #cell(actions)="row">
  <b-button size="sm" style="margin-left: 10px;" @click="info(row.item)" class="mr-1">
      Mas info
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
      <h3>Detalles del pedido</h3>
    </template>
    <template #default>
        <p>Metodos de pago utilizados</p>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Metodo de pago</th>
                    <th>Monto Cancelado</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in infoModal" :key="item.id">
                    <td>{{ item.Nombre}}</td> 
                    <td>{{ item.Cantidad}}</td> 
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
    data() {
      return {
        items:[
              { Fecha_Pago:'21/2/2022',Mes_cancelado:'Febrero',Monto_cancelado:2000 },
              { Fecha_Pago:'21/3/2022',Mes_cancelado:'Marzo',Monto_cancelado:2000 },
              { Fecha_Pago:'21/3/2022',Mes_cancelado:'Marzo',Monto_cancelado:2000 },
              { Fecha_Pago:'21/3/2022',Mes_cancelado:'Marzo',Monto_cancelado:2000 },
              
          ],
          fields: [
          { key: 'Codigo', label: 'Codigo',sortable: true },
              { key: 'Fecha_Pago', label: 'Fecha del pago',sortable: true },
              { key: 'Mes_cancelado', label: 'Mes cancelado', class: 'text-center',sortable: true },
              { key: 'Monto_cancelado', label: 'Monto cancelado', class: 'text-center',sortable: true },
              { key: 'actions', label: 'Opciones', class: 'text-center' },
             
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
        sortBy: 'Codigo',

        
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
      onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
      },
      info(item) {
              // Puedes actualizar infoModal con los detalles del pedido específico
              this.infoModal = [item];
              this.mostrarModal = true;
              this.modficarN=item
          },
      MetodosPago(){
        this.$router.push('/PrincipalPago')
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