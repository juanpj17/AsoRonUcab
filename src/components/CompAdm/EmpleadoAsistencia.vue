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
      <b-row>
        <b-col cols="5">
          <label for="fecha_i">Fecha Inicial</label>
        <b-form-datepicker id="fecha_i" v-model="fecha_i" class="mb-2"></b-form-datepicker>
        </b-col>
        <b-col cols="5">
          <label for="fecha_f">Fecha Final</label>
        <b-form-datepicker id="fecha_f" v-model="fecha_f" class="mb-2"></b-form-datepicker>
        </b-col>
        <b-col cols="2">
          <b-button size="lg" id="boton" style="margin-top: 30px;" @click="mostrarAsistencias()">Buscar</b-button>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="1">
          <input id="archivoExcel" type="file" @change="subirExcel()"  />
        </b-col>
      </b-row>
      

    </b-row>
    <div>
        <h2>Cumplimiento de horario</h2>
        
        
    </div>
    <!-- Main table element -->
    <b-table
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
    >
      <template #cell(name)="row">
        {{ row.value.first }} {{ row.value.last }}
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
    <!-- Info modal -->
    
  </b-container>
 </template>

<script>
import readXlsFile from "read-excel-file";
export default {
 
  data() {
    return {
      items: [
      ],
      fields: [
          {  label: 'Nombre Completo', key:'nombre'},
          { label: 'Cedula' , key:'ci'},
          {  label: 'Dia', key:'dia'},
          { label: 'Hora de Entrada' , key:'hora_e'},
          {  label: 'Llegada', key:'hora_ll'},
          { label: 'Hora  de Salia' , key:'hora_s'},
          { label: 'Retirada' , key:'hora_r'},
          {label:'Cumplimiento', key:'cumplimiento'}
         ],
         item:[],
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
    sortBy: 'valor',
        fecha_i:'',
        fecha_f:''

     
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
    this.totalRows = this.items.length,
    this.cod_tipo_usuario=this.$route.params.cod_tipo_usuario;
   
  },
  methods: {
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
    subirExcel(){
          console.log(this.value)
            const input = document.getElementById("archivoExcel");
            readXlsFile(input.files[0]).then((rows)=>{
                this.item=rows
                for (let i = 0; i < this.item.length; i++){
                  console.log(this.item)
                  const aux = this.item[i][1].toISOString()
                  const aux6= aux.split('T')
                  const aux2 = this.item[i][2].toUTCString()
                  const aux3=aux2.split(' ')
                  const aux4 = this.item[i][3].toUTCString()
                  const aux5=aux4.split(' ')
                  this.insertarAsistencias( aux6[0],aux3[4],aux5[4],this.item[i][0])
                }
                console.log(this.item)
                console.log(this.item[0][1])
                const aux = this.item[0][1].toISOString()
                console.log(aux)
                const aux2 = this.item[0][2].toUTCString()
                console.log(aux2)
                 const aux3=aux2.split(' ')
                console.log(aux3)
              })
            
        },async  insertarAsistencias(Fecha,hora_e,hora_s,ci){
        console.log(Fecha)
            const dato={fecha:Fecha,hora_ent:hora_e,hora_sal:hora_s,cedula:ci.toString()}
            const url = 'http://localhost:3000/api/empleado/asistencia';
            await this.axios.post(url,dato).then(response => {
            console.log(response.data)
            }).catch(error => {
              console.log(error);
            });
          },
          async  mostrarAsistencias(){
            const dato={fecha_i:this.fecha_i,fecha_f:this.fecha_f}
            const url = 'http://localhost:3000/api/empleado/asistenciaIntervalo';
            await this.axios.post(url,dato).then(response => {
           // console.log(response.data)
            this.llenarTabla(response.data)
          }).catch(error => {
              console.log(error);
            });
          },
          llenarTabla(data){
          
            console.log(data)
          for (let i = 0; i < data.length; i++) {
            const aux = {
              nombre: data[i].nombre,
              ci: data[i].cedula,
              dia:data[i].dia,
              hora_e: data[i].hora_entrada,
              hora_ll: data[i].hora_llegada,
              hora_s: data[i].hora_salida,
              hora_r: data[i].hora_retiro,
              cumplimiento:data[i].cumplimiento
            }
            console.log( data[i].nombre)
            console.log(aux)
            
            console.log(this.items)
            this.items.push(aux)
            console.log(aux)
            console.log(this.fields)
          }
        },

      
      

  },
    

  }

</script>
<style>
table#table-transition-example .flip-list-move {
transition: transform 1s;
}
</style>
