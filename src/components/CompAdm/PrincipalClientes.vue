<template>
  <b-container fluid style="background-color: var(--fondo);">
      <h1 class="titulos" >Registro de Clientes </h1>
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
        <b-col cols="11" ></b-col>
        
        <b-col class="my-1" cols="1" >
          <b-form-group
            label="Max de filas"
            label-for="per-page-select"
            label-align-sm="right"
            label-size="sm"
            class="mb-0"        
          >
            <b-form-select class=" form-control altura"
              id="per-page-select"
              v-model="perPage"
              :options="pageOptions"
            ></b-form-select>
          </b-form-group>
        </b-col>
      </b-row>
      <div style="margin-bottom: 50px;"> 
        <b-button pill class="boton" size="lg" @click="modalShow = !modalShow"><b-icon icon="plus-circle" scale="3"> </b-icon></b-button>
      </div>
      <b-modal v-model="modalShow" size="lg" scrollable="true">
        <template #modal-title>
          <h2 >Seleccione el tipo de Cliente</h2>
        </template>
        <b-container>
          <b-row>
            <b-col><b-button size="lg" pill @click="RegistroNatural('*')">Natural</b-button></b-col>
            <b-col><b-button size="lg" pill @click="RegistroJuridico('*')">Juridico</b-button></b-col>
          </b-row>
        </b-container>
      </b-modal>
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
<!------------------------------- Columna de acciones con botón de eliminar y modificar ------------------------->
        <template #cell(actions)="row">
          <b-button icon="delete" variant="danger" size="sm" @click="eliminarCliente(row.item)">
            <i class="bi bi-trash-fill"></i> Eliminar
          </b-button>
          <!-- <b-button size="sm" style="margin-left: 10px; background-color: var(--verde)" @click="info(row.item)" class="mr-1">
            Detalles
          </b-button> -->
          <b-button size="sm" style="margin-left: 10px; background-color: blue; border-color: blue" @click="Modificar(row.item)" class="mr-1">
            Modifiar
          </b-button>
        </template>
<!----------------------------------- Detalles del producto -------------------------------------------------->
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
<!-------------------------------- Info modal --------------------------------------->
      <b-modal v-model="mostrarModal" size="lg" scrollable >
        <template #modal-title>
          <h2 >Detalles del cliente</h2>
        </template>
        <template #default>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Documento identificador</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in infoModal" :key="item.age">
                <td>{{ item.Documento}}</td>
              </tr>
            </tbody>
          </table>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Nombre</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in infoModal" :key="item.age">
                <td>{{ item.Nombre}}</td>
              </tr>
            </tbody>
          </table>
          <table class="table table-bordered" v-if="item.Tipo =='juridico'">
            <thead>
              <tr>
                <th>Razon Social</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in infoModal" :key="item.age">
                <td>{{ item.Apellido}}</td>
              </tr>
            </tbody>
          </table>
          <table class="table table-bordered" v-if="item.Tipo =='natural'">
            <thead>
              <tr>
                <th>Apelldio</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in infoModal" :key="item.age">
                <td>{{ item.Apellido}}</td>
              </tr>
            </tbody>
          </table>
          <table class="table table-bordered" v-if="item.Tipo =='natural'">
            <thead>
              <tr>
                <th>Puntos Actuales</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in infoModal" :key="item.age">
                <td>{{ item.Puntos_Acumulados}}</td>
              </tr>
            </tbody>
          </table>


         
          <!-- <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Dirección física</th>
                    <th v-if="tipoRegistro=='J'">Dirección fiscal </th>                  
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in infoModal" :key="item.age">
                    <td>{{ item.Correo }} </td>
                    <td v-if="tipoRegistro=='J'">{{ item.Direccion }} </td>
                </tr>
            </tbody>
          </table>
          <table class="table table-bordered" >
            <thead>
                <tr>
                    <th>Teléfonos</th> 
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in infoTelefonos" :key="item.age">
                    <td>{{ item }}</td>
                </tr>
            </tbody>
          </table>
          <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Correos</th> 
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in infoTelefonos" :key="item.age">
                    <td>{{ item }}</td>
                </tr>
            </tbody>
          </table>
        
          <table  v-if="tipoRegistro=='J'" class="table table-bordered">
            <thead>
                <tr>
                    <th>Razón social</th> 
                    <th>Página web</th> 
                    <th>Capital</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in infoTelefonos" :key="item.age">
                    <td>{{ item }}</td>
                </tr>
            </tbody>
          </table>
          <p v-if="tipoRegistro=='J'">Personas de contacto</p>
          <table  v-if="tipoRegistro=='J'" class="table table-bordered" title="Personas de contacto">
            <thead>
                <tr>
                    <th>Nombre</th> 
                    <th>Teléfono</th> 
                    <th>Correo</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in infoTelefonos" :key="item.age">
                    <td>{{ item }}</td>
                </tr>
            </tbody>
          </table> -->
        </template>
      </b-modal>
  </b-container>
</template>

<script>
  export default {
    props:{
      cod_tipo_usuario:''
    },
    data() {
      return {
        items: [
        ],
        fields: [
            { key: 'Documento', label: 'Documento',class: 'text-center spann',sortable: true },
            { key: 'Nombre', label: 'Nombre', class: 'text-center spann',sortable: true },
            { key: 'Apellido', label: 'Apellido o Razon Social ', class: 'text-center spann',sortable: true },
            { key: 'Puntos_Acumulados', label: 'Puntos acumulados ', class: 'text-center spann',sortable: true },
            { key: 'actions', label: 'Opciones', class: 'text-center spann' },
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
        sortBy: 'Nombres',
        cliente: {}
        },
      modalShow: false,
       
      }
    },
    created(){
     this.ObtenerClientes();
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
      this.cod_tipo_usuario=this.$route.params.cod_tipo_usuario;
    },
    methods: {
      info(item) {
        this.mostrarModal = true;
            // Puedes actualizar infoModal con los detalles del pedido específico
            console.log(item)
            this.infoModal = [item];
            // this.infoTelefonos=[1,2,3]
            
          
        },
      onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
      },
      LlenarTabla(data){
          for (let i = 0; i < data.length; i++) {
            // const nombreCompleto = `${data[i].p_nombre} ${data[i].s_nombre}`;
            // const apellidosCompleto =  `${data[i].p_apellido} ${data[i].s_apellido}`;
            const item = {
              Documento: data[i].doc,
              Nombre: data[i].nombre,
              Apellido: data[i].apellido,
              Puntos_Acumulados: data[i].puntos_acumulados,
              Tipo: data[i].tipo
            };
            
            this.items.push(item)
            console.log(this.items)
          }
        },
        async ObtenerClientes() {

            const url = 'http://localhost:3000/api/cliente';
            await this.axios.get(url).then(response => {
              this.cliente = response.data;
              console.log(this.cliente)
              this.insertarAuditoria('Consultar','Cliente_Juridico')
              this.insertarAuditoria('Consultar','Cliente_Natural')
              this.LlenarTabla(this.cliente)
            }).catch(error => {
              console.log(error);
            });
        },

        async eliminarCliente(data) {
          if(data.Tipo == 'juridico' ){
            console.log('es juridico')
            const url = 'http://localhost:3000/api/cliente/juridico'
            try {
              const response = await this.axios.delete(url, { params: { doc: data.Documento} });
              const cliente = response.data;
              console.log(cliente);
              this.insertarAuditoria('Eliminar','Cliente_Juridico')
            } catch (error) {
              console.log('Error al eliminar el cliente:', error);
            }
  
            this.ObtenerClientes()
          }else{
            console.log('es natural')
            const url = 'http://localhost:3000/api/cliente/natural'
            try {
              const response = await this.axios.delete(url, { params: { cedula: data.Documento} });
              const cliente = response.data;
              console.log(cliente);
              this.insertarAuditoria('Eliminar','Cliente_Natural')
            } catch (error) {
              console.log('Error al eliminar el cliente:', error);
            }
  
            this.ObtenerClientes()
          }
          
          console.log(data)
        },

        RegistroNatural(id){
          if (this.$route.path!='/PrincipalRegistroNatural/'){
                this.$router.push({
                  path: '/PrincipalRegistroNatural/'+id+'/%Cliente/'+this.cod_tipo_usuario,
                    query: {
                      id: id,
                      proviene: 'cliente',
                    }
                });
            }
        },
        RegistroJuridico(id){
          if (this.$route.path!='/PrincipalRegistroJuridico/'){
                this.$router.push({
                  path: '/PrincipalRegistroJuridico/'+id+'/%ClienteJ/'+this.cod_tipo_usuario,
                    query: {
                      id: id,
                      proviene: 'cliente',
                    }
                });
            }
        },
        Modificar(data){
          console.log(data.Documento)
          if(data.Tipo == 'juridico' ){
            console.log(data)
            this.RegistroJuridico(data)
          }
          else{
            
            this.RegistroNatural(data.Documento)
          }
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

.spann span{
  display:none !important;
}
</style>