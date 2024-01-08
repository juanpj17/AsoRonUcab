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
      <template #cell(actions)="row">
        <b-button size="sm" style="margin-left: 10px; background-color: var(--verde)" @click="info(row.item)" class="mr-1">
         Actualizar
        </b-button>
        <b-button v-b-modal.factura variant="primary" @click="factura(row.item)" size="sm"  style="margin-left: 10px;">Ver orden</b-button>
      
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
 <div>
    <b-modal id="factura" size="xl"  scrollable>
      <OrdeDeCompraVue :id="aux"></OrdeDeCompraVue>
    </b-modal>
  </div>

 
        
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
  import OrdeDeCompraVue from '@/components/CompAdm/OrdeDeCompra.vue';
    export default {
      components:{
        OrdeDeCompraVue
      },
      props:{
        tipo_historico:'',
        cod_tipo_usuario:'',
      },
      data() {
        return {
          items: [
          ],
          fields: [
            { key: 'id', label: 'Numero de Orden', class:'spann', sortable: true  },
            { key: 'Fecha', label: 'Fecha de Emision', class: 'text-center spann',sortable: true  },
            { key: 'Estatus', label: 'Estatus', class: 'text-center spann',sortable: true  },
            { key: 'actions', label: 'Detalles', class: 'text-center spann' },

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
        aux:''

         
        }
      },
      created(){
      // this.LlenarTabla();
       this.ObtenerOrdenes();
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
        this.items=[
        {id:3,idCliente:1,Fecha:'9/12/2023',Total:'50bs',Estatus:'En proceso', Nombre:'Santa teresa',Cantidad:'5',Precio:33},
       ]
      },
    
        info(item) {
              this.actualizar(item.id)
          },
          factura(item){
            this.aux=item.id
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
          } ,
          async ObtenerOrdenes() {
            const url = 'http://localhost:3000/api/orderReposicion/orden';
          await this.axios.get(url).then(response => {
            console.log( response.data)
            this.llenarTabla(response.data)
            
          }).catch(error => {
            console.log(error);
          });
          },
          llenarTabla(data){
          for (let i = 0; i < data.length; i++) {
            const item = {
              id: data[i].codigo,
              Fecha: data[i].fecha,
              Estatus:data[i].estatus
            };
            
            this.items.push(item)
          }
        }, async actualizar(codigo) {
        const data={ id:codigo}
            const url = 'http://localhost:3000/api/orderReposicion/actualizar';
            await this.axios.post(url,data).then(response => {
              this.fecha = response.data[0].fecha_orden;
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