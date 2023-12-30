<template>
  <b-container fluid>
    <h1 class="titulos">Consulta de Eventos </h1>
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
<!---------------------------- Columna de acciones con botón de eliminar y modificar ---------------------------->
      <template #cell(actions)="row">
        <b-button icon="delete" variant="danger" size="sm">
          <i class="bi bi-trash-fill"></i> Eliminar
        </b-button>
        <b-button size="sm" style="margin-left: 10px; background-color: var(--verde)" @click="info(row.item)" class="mr-1">
          Detalles
        </b-button>
        <b-button size="sm" style="margin-left: 10px; background-color: blue; border-color: blue" @click="RegistrarEvento(row.item.Codigo)" class="mr-1">
          Modifiar
        </b-button>
   
      </template>
<!----------------------------- Detalles del producto ---------------------------------------------------------->
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
    <b-modal v-model="mostrarModal" id="modal-xl" size="xl" scrollable>
      <template #modal-title>
        Detalles del evento
      </template>
      <template #default>
          <p>Informacion general</p>
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

          <table class="table table-bordered">
              <thead>
                  <tr>
                      <th>Proveedor</th> 
                      <th>Producto</th> 
                      <th>Inventario</th> 
                      <th>Precio Unitario</th>
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
          <table class="table table-bordered">
              <thead>
                  <tr>
                      <th>Cantidad de entradas</th> 
                      <th>Precio</th> 
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="item in infoModal" :key="item.age">
                      <td>{{ item.Estado}}</td> 
                      <td>{{ item.Municipio}}</td> 
                    
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
        items:[
              // { Codigo: 1, Nombre_Evento: 'Evento a', Direccion: 'a',Estado:'Portuguesa', Municipio:'Araure'
              // ,Parroquia:'Acarigua',Descripcion:"fgngkjngmmkknklnknnnlnljn  lnlnlnlnlnln nlnlnln nlnnlnlnl nlnlnln nklnlnlnlnjnjndgnbdnbjdfubnjldbndlnjbxlnboxnblnlxonbldnbouthtjnuglxdb nbdlfjnlfnnln", Fecha_i:'22/22/2222',fecha_f:'33/44/3223',cantidadEnt:54},
              // { Codigo: 3, Nombre_Evento: 'Evento 1', Direccion: 'Macdonald',Estado:'Portuguesa', Municipio:'Araure'
              // ,Parroquia:'Acarigua',Descripcion:"fgngkjngmmkknklnknnnlnljn  lnlnlnlnlnln nlnlnln nlnnlnlnl nlnlnln nklnlnlnlnjnjndgnbdnbjdfubnjldbndlnjbxlnboxnblnlxonbldnbouthtjnuglxdb nbdlfjnlfnnln", Fecha_i:'22/22/2222',fecha_f:'33/44/3223',cantidadEnt:54},
              // { Codigo: 2, Nombre_Evento: 'Evento 1', Direccion: 'Macdonald',Estado:'Portuguesa', Municipio:'Araure'
              // ,Parroquia:'Acarigua',Descripcion:"fgngkjngmmkknklnknnnlnljn  lnlnlnlnlnln nlnlnln nlnnlnlnl nlnlnln nklnlnlnlnjnjndgnbdnbjdfubnjldbndlnjbxlnboxnblnlxonbldnbouthtjnuglxdb nbdlfjnlfnnln", Fecha_i:'22/22/2222',fecha_f:'33/44/3223',cantidadEnt:54},
              // { Codigo: 10, Nombre_Evento: 'Evento 1', Direccion: 'Macdonald',Estado:'Portuguesa', Municipio:'Araure'
              // ,Parroquia:'Acarigua',Descripcion:"fgngkjngmmkknklnknnnlnljn  lnlnlnlnlnln nlnlnln nlnnlnlnl nlnlnln nklnlnlnlnjnjndgnbdnbjdfubnjldbndlnjbxlnboxnblnlxonbldnbouthtjnuglxdb nbdlfjnlfnnln", Fecha_i:'22/22/2222',fecha_f:'33/44/3223',cantidadEnt:54},
              // { Codigo: 5, Nombre_Evento: 'Evento 1', Direccion: 'Macdonald',Estado:'Portuguesa', Municipio:'Araure'
              // ,Parroquia:'Acarigua',Descripcion:"fgngkjngmmkknklnknnnlnljn  lnlnlnlnlnln nlnlnln nlnnlnlnl nlnlnln nklnlnlnlnjnjndgnbdnbjdfubnjldbndlnjbxlnboxnblnlxonbldnbouthtjnuglxdb nbdlfjnlfnnln", Fecha_i:'22/22/2222',fecha_f:'33/44/3223',cantidadEnt:54},{ Codigo: 66, Nombre_Evento: 'Evento 1', Direccion: 'Macdonald',Estado:'Portuguesa', Municipio:'Araure'
              // ,Parroquia:'Acarigua',Descripcion:"fgngkjngmmkknklnknnnlnljn  lnlnlnlnlnln nlnlnln nlnnlnlnl nlnlnln nklnlnlnlnjnjndgnbdnbjdfubnjldbndlnjbxlnboxnblnlxonbldnbouthtjnuglxdb nbdlfjnlfnnln", Fecha_i:'22/22/2222',fecha_f:'33/44/3223',cantidadEnt:54},{ Codigo: 34, Nombre_Evento: 'Evento 1', Direccion: 'Macdonald',Estado:'Portuguesa', Municipio:'Araure'
              // ,Parroquia:'Acarigua',Descripcion:"fgngkjngmmkknklnknnnlnljn  lnlnlnlnlnln nlnlnln nlnnlnlnl nlnlnln nklnlnlnlnjnjndgnbdnbjdfubnjldbndlnjbxlnboxnblnlxonbldnbouthtjnuglxdb nbdlfjnlfnnln", Fecha_i:'22/22/2222',fecha_f:'33/44/3223',cantidadEnt:54},{ Codigo: 90, Nombre_Evento: 'Evento 1', Direccion: 'Macdonald',Estado:'Portuguesa', Municipio:'Araure'
              // ,Parroquia:'Acarigua',Descripcion:"fgngkjngmmkknklnknnnlnljn  lnlnlnlnlnln nlnlnln nlnnlnlnl nlnlnln nklnlnlnlnjnjndgnbdnbjdfubnjldbndlnjbxlnboxnblnlxonbldnbouthtjnuglxdb nbdlfjnlfnnln", Fecha_i:'22/22/2222',fecha_f:'33/44/3223',cantidadEnt:54},{ Codigo: 8, Nombre_Evento: 'Evento 1', Direccion: 'Macdonald',Estado:'Portuguesa', Municipio:'Araure'
              // ,Parroquia:'Acarigua',Descripcion:"fgngkjngmmkknklnknnnlnljn  lnlnlnlnlnln nlnlnln nlnnlnlnl nlnlnln nklnlnlnlnjnjndgnbdnbjdfubnjldbndlnjbxlnboxnblnlxonbldnbouthtjnuglxdb nbdlfjnlfnnln", Fecha_i:'22/22/2222',fecha_f:'33/44/3223',cantidadEnt:54},{ Codigo: 15, Nombre_Evento: 'Evento 1', Direccion: 'Macdonald',Estado:'Portuguesa', Municipio:'Araure'
              // ,Parroquia:'Acarigua',Descripcion:"fgngkjngmmkknklnknnnlnljn  lnlnlnlnlnln nlnlnln nlnnlnlnl nlnlnln nklnlnlnlnjnjndgnbdnbjdfubnjldbndlnjbxlnboxnblnlxonbldnbouthtjnuglxdb nbdlfjnlfnnln", Fecha_i:'22/22/2222',fecha_f:'33/44/3223',cantidadEnt:54},{ Codigo: 100, Nombre_Evento: 'Evento 1', Direccion: 'Macdonald',Estado:'Portuguesa', Municipio:'Araure'
              // ,Parroquia:'Acarigua',Descripcion:"fgngkjngmmkknklnknnnlnljn  lnlnlnlnlnln nlnlnln nlnnlnlnl nlnlnln nklnlnlnlnjnjndgnbdnbjdfubnjldbndlnjbxlnboxnblnlxonbldnbouthtjnuglxdb nbdlfjnlfnnln", Fecha_i:'22/22/2222',fecha_f:'33/44/3223',cantidadEnt:54},{ Codigo: 76, Nombre_Evento: 'Evento 1', Direccion: 'Macdonald',Estado:'Portuguesa', Municipio:'Araure'
              // ,Parroquia:'Acarigua',Descripcion:"fgngkjngmmkknklnknnnlnljn  lnlnlnlnlnln nlnlnln nlnnlnlnl nlnlnln nklnlnlnlnjnjndgnbdnbjdfubnjldbndlnjbxlnboxnblnlxonbldnbouthtjnuglxdb nbdlfjnlfnnln", Fecha_i:'22/22/2222',fecha_f:'33/44/3223',cantidadEnt:54},{ Codigo: 17, Nombre_Evento: 'Evento 1', Direccion: 'Macdonald',Estado:'Portuguesa', Municipio:'Araure'
            
              // ,Parroquia:'Acarigua',Descripcion:"fgngkjngmmkknklnknnnlnljn  lnlnlnlnlnln nlnlnln nlnnlnlnl nlnlnln nklnlnlnlnjnjndgnbdnbjdfubnjldbndlnjbxlnboxnblnlxonbldnbouthtjnuglxdb nbdlfjnlfnnln", Fecha_i:'22/22/2222',fecha_f:'33/44/3223',cantidadEnt:54}
             
          ],
         
          fields: [
            { key: 'Nombre_Evento', label: 'Nombre del evento', class: 'text-center',sortable: true},
            { key: 'Fecha_i', label: 'Fecha de inicio', class: 'text-center',sortable: true },
            { key: 'Fecha_f', label: 'Fecha de fin', class: 'text-center',sortable: true },
            { key: 'Direccion', label: 'Direccion', sortable: true },
              { key: 'actions', label: 'Opciones', class: 'text-center',sortable: true },
             
          ],
          currentPage: 1,
          sortBy: 'Nombre_Evento',
        totalRows: 1,
        perPage: 5,
        pageOptions: [5, 10, 15],
        filter: null,
        filterOn: [],
        infoModal: [],
        mostrarModal:false,
        texto:'',
        modficarN:'',
        transProps: {
        // Transition name
        name: 'flip-list',
        sortBy: 'Codigo',
        evento:{}
      },

        
      }
    },
    created(){
     this.obtenerEventos();
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
              console.log(item)
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
      RegistrarEvento(id){
        if (this.$route.path!='/RegistrarEvento/')
            this.$router.push('/RegistrarEvento/'+id);
      },

      LlenarTabla(data){
          for (let i = 0; i < data.length; i++) {
            const item = {
              Nombre_Evento: data[i].nombre,
              Fecha_i: data[i].fecha_hora_inicial,
              Fecha_f: data[i].fecha_hora_final,
              Direccion: data[i].direccion
            };
            
            this.items.push(item)
            console.log(this.items)
          }
        },
        async obtenerEventos() {
            const url = 'http://localhost:3000/api/evento';
            await this.axios.get(url).then(response => {
              this.evento = response.data;
              console.log(this.evento)
              this.LlenarTabla(this.evento)
            }).catch(error => {
              console.log(error);
            });
        },

    },
    
  }
</script>
<style scoped>
.boton{
    position:fixed;
    left: 20px;
    transform: translateY(-50%);
}




table#table-transition-example .flip-list-move {
transition: transform 1s;
}

</style>