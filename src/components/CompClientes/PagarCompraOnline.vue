<template>
    <div>
    <h3>El total es de {{ total }}</h3>
    <div>
        <br>
        <section class="container" style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
    <b-form-group
      label="Seleccionar Metodo de pago"
      label-for="table-select-mode-select"
      label-cols-md="4"
    >
      
    </b-form-group>

    <b-table
      :items="items"
      :fields="fields"
      :select-mode="selectMode"
      responsive="sm"
      ref="selectableTable"
      selectable
      @row-selected="onRowSelected"
    >
      <!-- Example scoped slot for select state illustrative purposes -->
      <template #cell(selected)="{ rowSelected }">
        <template v-if="rowSelected" >
          <span aria-hidden="true">&check;</span>
          <!-- <span class="sr-only">Selected</span> -->
        
          
        </template>
        <template v-else>
          <span aria-hidden="true">&nbsp;</span>
          <span class="sr-only">No seleccionado</span>
        </template>
      </template>
    </b-table>
    <p>
      <!-- <b-button size="lg" @click="guardar()" style="margin-right: 20px;">Guardar</b-button> -->
      <b-button size="lg" @click="selectAllRows" style="margin-right: 20px;">Select all</b-button>
      <b-button size="lg" @click="clearSelected">Clear selected</b-button>
      <b-button size="lg"  style="margin-left: 5px;" @click="btAgregar=true">Agregar Tarjeta</b-button>
     

   <br>
    </p>
    
</section>
  </div>

  <div  v-if="btAgregar==true">
        <section class="container">
       <div class="row content d-flex justify-content-center align-items-center">
           <div class="col-md-6 col-sm-12 principal">
          
               <div class="box  bg-white p-4 ">
                 <h3 class="mb-4 text-center fs-1">Registrar tarjeta</h3>

                 <div class="row">
       
               <div class="form-floating mb-3">
                   <input type="text" class="form-control rounded-2" />
                   <label>Numero de la tarjeta</label>
               </div>

               <div class="form-floating mb-3">
                   <input type="text"  class="form-control rounded-2" />
                   <label>Nombre de la tarjeta</label>
               </div>
               
               <div class="form-floating mb-3">
                   <input type="number" class="form-control rounded-2" />
                   <label>CVV</label>
               </div>
               
               <div class="form-floating mb-3">
                   <input type="month" id="password"   class="form-control rounded-2"/>
                   <label>Fecha vencimiento</label>
               </div>
               <div class="d-grid gap-2 mb-3">
                       <button type="button" class="btn btn-primary btn-lg border-0 rounded-3"  >Registrar</button>
               </div>
    </div>
              

               </div>
            </div>
       </div>
   </section>
  
</div>   
    <h3>Ingrese los montos para cada tarjeta</h3>
<!--Monto por tarjeta selecionada-->
                    <div v-for="(Montos, index) in Montos" :key="index" >
                        <b-container class="bv-example-row">
                            <b-row style="margin-top: 30px;"> 
                            <h1>{{ Montos.idTarjeta }}</h1>
                            <b-input v-model="Montos.monto"></b-input>
                            </b-row>
                        </b-container>
                    </div>
                    <b-button v-if="pagar" @click="generarCadenas()">Pagar</b-button>
                    <div>
                      <b-button v-b-modal.modal-xl variant="primary">xl modal</b-button>

  <b-modal id="modal-xl" size="xl"  scrollable>
    <FacturaAfiliacion :codigo_afiliado="this.id"></FacturaAfiliacion>
  </b-modal>
  
</div>
    
</div>

</template>

<script>
import FacturaAfiliacion from './FacturaAfiliacion.vue';

  export default {
  components: { FacturaAfiliacion },
    props:{
      id:'',
      tipo_usuario:''
    },
    data() {
      return {
     
        fields: ['selected', 'id','Mis_tarjetas', 'nombre_tarjeta', 'fecha_vencimiento'],
        items: [
          { isActive: true, Mis_tarjetas: "***"+22, nombre_tarjeta: 'Gabriela M', fecha_vencimiento: '03/15',id:'1' },
          { isActive: true, Mis_tarjetas: "***"+22, nombre_tarjeta: 'G Martinez', fecha_vencimiento: '03/15',id:'2' },
          { isActive: true, Mis_tarjetas: "***"+22, nombre_tarjeta: 'Gabriela Josefina', fecha_vencimiento: '03/15',id:'3 '},
        ],
        selectMode: 'multi',
        selected: [],
        btAgregar:false,
        Montos:[],
        total:'400',
        pagar:false,
        Montos_por_tarjeta:'',
        id_tarjetas:'',
        cant_elementos:'',
        mensaje:''
        
      }
    },
    created(){
      this.cargarTarjetas();
    },
    methods: {
      onRowSelected(items) {
        this.selected = items;
        this.guardar();
       
      },
      selectAllRows() {
        this.$refs.selectableTable.selectAllRows()
      },
      clearSelected() {
        this.$refs.selectableTable.clearSelected()
      },
      guardar(){
        this.Montos=[]
        this.Tarjetas=[]
        this.selected.forEach((elemento) => this.Montos.push({idTarjeta:elemento.id,monto:''}))
       // console.log(this.Montos)
        this.pagar=true
      },
      vericarPago(){
        this.Montos.forEach((elemento) => this.id_tarjetas.push( elemento.idTarjeta))
        this.Montos.forEach((elemento) => this.Montos_por_tarjeta.push( elemento.monto))
        console.log(this.id_tarjetas)
        console.log(this.Montos_por_tarjeta)
        this.generarCadenas()
      },
      generarCadenas(){
        this.Montos.forEach((elemento,index) => 
        { if( index==0){
          this.cant_elementos='1'
          this.Montos_por_tarjeta=elemento.monto
          this.id_tarjetas=elemento.idTarjeta}
        else
        {  this.cant_elementos=this.cant_elementos+'1'
           this.Montos_por_tarjeta=this.Montos_por_tarjeta+'$'+elemento.monto
            this.id_tarjetas=this.id_tarjetas+'$'+elemento.idTarjeta}
        })
        this.pagarCuota();
      },
      pagarCuota(){
        const url = 'http://localhost:3000/api/afiliado';
        const datos ={codigo_identificador:this.id ,
                       montos:this.Montos_por_tarjeta, 
                       tarjetas:this.id_tarjetas,
                       cuota:'400' ,
                       cant_elementos:this.cant_elementos}
        this.axios.post(url,datos).then(response => {
                     console.log(response.data);
                     Swal.fire(response.data.pagar);
                   }).catch(error => {
                     console.log(error.response.data); });},
                     
 async   cargarTarjetas(){
        const url = 'http://localhost:3000/api/facturaAfiliado/tarjetasAfiliados';
        const datos={codigo_identificador:this.id }
        console.log('g'+datos)
  await this.axios.post(url,datos).then(response => {this.llenarArray(response.data)}).catch(error => {console.log(error.response.data); })
      },
      llenarArray(data){
        this.items=[]
        for (let i = 0; i < data.length; i++) {
            const item = {
              isActive: true,
              Mis_tarjetas: data[i].numero_tarjeta,
              nombre_tarjeta: data[i].banco,
              fecha_vencimiento:data[i].fecha_vencimiento,
              id:data[i].codigo_tarjeta
            };
            
            this.items.push(item)
            console.log(this.items)
          }

      }

      
    }
  }
</script>