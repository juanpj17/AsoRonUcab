<template>
    <div>
  
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
    
    
    
</div>
</template>

<script>
  export default {
    data() {
      return {
     
        fields: ['selected', 'Mis_tarjetas', 'nombre_tarjeta', 'fecha_vencimiento'],
        items: [
          { isActive: true, Mis_tarjetas: "***"+22, nombre_tarjeta: 'Gabriela Martinez', fecha_vencimiento: '03/15' },
        ],
        selectMode: 'multi',
        selected: [],
        btAgregar:false,
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
      
    }
  }
</script>