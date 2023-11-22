<template>
    <div>
  <b-tabs content-class="mt-3" align="center">
    <b-tab title="First" active>
    <div>
        <section class="container" style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
    <b-form-group
      label="Selection mode:"
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
          <span class="sr-only">Not selected</span>
        </template>
      </template>
    </b-table>
    <p>
      <b-button size="lg" @click="selectAllRows" style="margin-right: 20px;">Select all</b-button>
      
      <b-button size="lg" @click="clearSelected">Clear selected</b-button>
   
    </p>
    <p>
      Selected Rows:<br>
      {{ selected }}{{ precio }}
    </p>
</section>
  </div>

    
    
    
    </b-tab>
    <b-tab title="Second"><p>I'm the second tab</p></b-tab>
    <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
  </b-tabs>
</div>
</template>

<script>
  export default {
    data() {
      return {
     
        fields: ['selected', 'isActive', 'age', 'first_name', 'last_name','precio'],
        items: [
          { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
        ],
        selectMode: 'multi',
        selected: [ { "isActive": false, "age": 21, "first_name": "Larsen", "last_name": "Shaw" } ],
        precio:[]
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