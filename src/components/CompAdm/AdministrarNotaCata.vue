<template>
    <div>
  <b-card no-body>
    <b-tabs pills card>
      <b-tab title="Registrar notas" active><b-card-text> <div>
        <b-button variant="danger"  @click="agregarElemento" style="margin-right: 10px;">Agregar nueva nota</b-button>
        <b-button variant="danger"   @click="guardarInformacion">Guardar</b-button>
    <b-container>
      <div v-for="(elemento, index) in elementos" :key="index">
        <b-row style="margin-top: 10px; text-align: left;">
          <b-col >
            <b-form-select v-model="elemento.Presentacion" :options="presentaciones" ></b-form-select>
          </b-col>
          <b-col >
            <b-form-select v-model="elemento.Evento" :options="options" ></b-form-select>
          </b-col>
           <b-col >
            <b-form-select v-model="elemento.Premio" :options="premios" ></b-form-select>
          </b-col>
          <b-col>
            <b-form-textarea id="textarea" v-model="elemento.texto" placeholder="Ingrese la nota de cata" rows="3" max-rows="6" ></b-form-textarea>
          </b-col>
        </b-row>
      </div>
    </b-container>
</div>
</b-card-text>
</b-tab>
      <b-tab title="Consultar notas"><b-card-text>
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

        <b-button size="sm" style="margin-left: 10px; background-color: blue; border-color: blue" @click="info(row.item)" class="mr-1">
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


      </b-card-text></b-tab>
    </b-tabs>
  </b-card>
</div>
</template>
<script>
  export default {
    props:{
      id:'',
      cod_tipo_usuario:''
    },
    data() {
      return {
        elementos:[{texto:'',Premio:'',Evento:'',Presentacion:''}],
        selected: null,
        options: [
          { value: null, text: 'Please select an option' },
          
        ],
        premios:[{value:'null', text:'Seleccione un premio'}],
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
        presentaciones:[],
        

        
      }
    },
    created(){
    this.obtenerEventos()
    this.obtenerPremios()
    this.obtenerPresentaciones()
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
      this.cod_tipo_usuario=this.$route.params.cod_tipo_usuario;
     
    },
    methods: {
        agregarElemento() {
        this.elementos.push({texto:'',Premio:'',Evento:'',Presentacion:''})
      },
      guardarInformacion() {
        for (let i = 0; i < this.elementos.length; i++) {
            if (this.elementos[i].texto!=='')
           { this.ingresarNotaCata(this.elementos[i].Presentacion,this.elementos[i].Evento,this.elementos[i].texto)}

           if (this.elementos[i].Premio!=='')
           { this.ingresarPremio(this.elementos[i].Premio,this.elementos[i].Presentacion,this.elementos[i].Evento)}    
          }
        
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
      },

      LlenarEventos(data){
        this.options=[{ value: null, text: 'Please select an option' }]
          for (let i = 0; i < data.length; i++) {
            const item = {
            value: data[i].codigo,
            text: data[i].nombre,};
            
            this.options.push(item)
            console.log(this.items)
          }
        },
        LlenarPremios(data){
          for (let i = 0; i < data.length; i++) {
            const item = {
              value: data[i].codigo,
              text: data[i].nombre,
            };
            this.premios.push(item)
            console.log(this.items)
          }
        },
        LlenarPresentaciones(data){
        
        for (let i = 0; i < data.length; i++) {
          const item = {
            value: data[i].codigo,
            text: data[i].nombre,
           
          };
          
          this.presentaciones.push(item)
          console.log(this.items)
        }
      },
        async obtenerEventos() {
            const url = 'http://localhost:3000/api/evento';
            await this.axios.get(url).then(response => {
              this.evento = response.data;
             // console.log(this.evento)
              this.insertarAuditoria('Consultar','Evento')
              this.LlenarEventos(this.evento)
            }).catch(error => {
              console.log(error);
            });
        },
        async obtenerPremios() {
            const url = 'http://localhost:3000/api/evento/obtenerPremios';
            await this.axios.get(url).then(response => {
              this.evento = response.data;
            //  console.log(this.evento)
            this.insertarAuditoria('Consultar','Premio')
              this.LlenarPremios(this.evento)
            }).catch(error => {
              console.log(error);
            });
        },
        async obtenerPresentaciones() {
          const dato={cod_producto: this.id}
            console.log(this.id +'fd')
            const url = 'http://localhost:3000/api/evento/presentacionesProducto';
           
            await this.axios.post(url,dato).then(response => {
              this.insertarAuditoria('Consultar','Presentacion')
              this.LlenarPresentaciones(response.data)
              
            }).catch(error => {
              console.log(error);
            });
        },
  async   ingresarNotaCata(cod_presen,cod_even,notaC){
          const dato={nota:notaC,evento:cod_even,presentacion:cod_presen}
          const url = 'http://localhost:3000/api/evento/notaCata';
          await this.axios.post(url,dato).then(response => {
           //console.log(response.data[0].insertar_nota_cata)
           this.insertarAuditoria('Crear','Nota_Cata')
           Swal.fire(response.data[0].insertar_nota_cata)
            }).catch(error => {
              console.log(error);
            });
           
        },
        async   ingresarPremio(cod_premio,cod_presen,cod_even){
          const dato={premio:cod_premio,presentacion:cod_presen,evento:cod_even}
          const url = 'http://localhost:3000/api/evento/premio';
          await this.axios.post(url,dato).then(response => {
         //  console.log(response.data)
           this.insertarAuditoria('Crear','Presentacion_Evento')
           Swal.fire(response.data[0].insertar_premio_evento);
              
            }).catch(error => {
              console.log(error);
            });
           
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
    
    },
    
  }
</script>