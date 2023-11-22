<template>
    <div>
  
    <div>
        <section class="container" style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; margin-top: 20px;" >
    <b-form-group
      label="Selecciones los premios ganados"
      label-for="table-select-mode-select"
      label-cols-md="4"
    >
      
    </b-form-group>
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
    <b-table
      :items="items"
      :fields="fields"
      :select-mode="selectMode"
      :filter="filter"
    :filter-included-fields="filterOn"
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
          <span class="sr-only">Not selected</span>
        </template>
      </template>
    </b-table>
    <p>
      <b-button size="lg" @click="selectAllRows" style="margin-right: 20px;">Seleccionar todo</b-button>
      
      <b-button size="lg" @click="clearSelected">Borrar Seleccion</b-button>
      <b-button size="lg" style="margin-left: 20px;">Aplicar cambios</b-button>
   
    </p>
    
</section>
  </div>
</div>
</template>

<script>
  export default {
    data() {
      return {
     
        fields: [ 'Nombre_del_Evento', 'Nombre_del_Premio'],
        items: [
          { Nombre_del_Evento: 'Evento1', Nombre_del_Premio: 'ron del año'},
          { Nombre_del_Evento: 'Evento2', Nombre_del_Premio: 'Mejor calidad'},
          
        ],
        selectMode: 'multi',
        selected: [ ],
        filter: null,
          filterOn: [],
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
  }
</script>