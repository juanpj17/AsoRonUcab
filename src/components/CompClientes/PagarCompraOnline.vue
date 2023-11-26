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
      <b-button size="lg" @click="guardar()" style="margin-right: 20px;">Guardar</b-button>
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
                    <b-button v-if="pagar">Pagar</b-button>
    
</div>
</template>

<script>
  export default {
    data() {
      return {
     
        fields: ['selected', 'Mis_tarjetas', 'nombre_tarjeta', 'fecha_vencimiento'],
        items: [
          { isActive: true, Mis_tarjetas: "***"+22, nombre_tarjeta: 'Gabriela M', fecha_vencimiento: '03/15',id:1 },
          { isActive: true, Mis_tarjetas: "***"+22, nombre_tarjeta: 'G Martinez', fecha_vencimiento: '03/15',id:2 },
          { isActive: true, Mis_tarjetas: "***"+22, nombre_tarjeta: 'Gabriela Martinez', fecha_vencimiento: '03/15',id:3 },
        ],
        selectMode: 'multi',
        selected: [],
        btAgregar:false,
        Montos:[],
        total:'400',
        pagar:false
      }
    },
    methods: {
      onRowSelected(items) {
        this.selected = items
       
      },
      selectAllRows() {
        this.$refs.selectableTable.selectAllRows()
      },
      clearSelected() {
        this.$refs.selectableTable.clearSelected()
      },
      guardar(){
        this.Montos=[]
        this.selected.forEach((elemento) => this.Montos.push({idTarjeta:elemento.id,monto:''}))
        console.log(this.Montos)
        this.pagar=true
      }
      
    }
  }
</script>