<template>
    <div>
        <h3>El total es de:</h3>
        <h2>{{ totaldi }}$</h2>
        <h2>{{ totalbs }}Bs</h2>
            <div>
                <b-button-group>
                    <b-button variant="outline-primary"  v-b-modal.Efectivo><b-icon icon="cash"  ></b-icon> Efectivo</b-button>
                    <b-button variant="outline-primary"  v-b-modal.Cheque><b-icon icon="check"></b-icon> Cheque</b-button>
      
                </b-button-group>
                <section class="container" style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
                    <b-form-group label="Seleccionar Metodo de pago" label-for="table-select-mode-select" label-cols-md="4"></b-form-group>
                        <b-table
                        :items="items"
                        :fields="fields"
                        :select-mode="selectMode"
                        responsive="sm"
                        ref="selectableTable"
                        selectable
                        @row-selected="onRowSelected"
                        >
                    
                        <template #cell(selected)="{ rowSelected }">
                        <template v-if="rowSelected" >
                        <span aria-hidden="true">&check;</span>
                        </template>
                        <template v-else>
                        <span aria-hidden="true">&nbsp;</span>
                        <span class="sr-only">No seleccionado</span>
                        </template>
                        </template>
                        </b-table>
    
                </section>
            </div>
<!--Monto por tarjeta selecionada-->
            <div style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
                 <div v-for="(Montos, index) in Montos" :key="index">
                    <b-container class="bv-example-row">
                        <b-row style="margin-top: 30px;"> 
                            <p style="text-align: left; margin-bottom: 5px;"> {{ 'Indique la cantidada acancelar con la tarjeta:' }}  {{ Montos.idMetodo }}</p>
                            <b-input v-model="Montos.monto"></b-input>
                        </b-row>
                    </b-container>
                </div>
            </div>
 <!--Modales para metodos de pago efectivo y cheque-->  
 <b-modal id="Efectivo" scrollable title="Indique el monto">
    <b-input v-model="Efectivo"></b-input>
 </b-modal> 
 <b-modal id="Cheque" scrollable title="Indique el monto" size="xl">
    <b-container>
         <b-row>            
            <b-col cols="11"><p style="text-align: left;">Registrar Cheques</p></b-col>
            <b-col cols="1" style="margin-bottom: 25px;">   <b-button @click="RegistrarCheques()" style="border-radius: 110%;"  variant="light">  <b-icon icon="plus-circle" scale="2"></b-icon></b-button></b-col>
        </b-row>
        </b-container> 
            <div v-for="(elemento, index) in Cheques" :key="index">
                <b-container style="margin-bottom: 10px;">
                     <b-row>
                        <b-col cols="5">
                            <div class="col form-group form-floating mb-2">
                                <b-input v-model="elemento.banco"></b-input>
                                <label>Ingrese el banco</label>
                            </div>
                        </b-col>
                        <b-col cols="5">
                            <div class="col form-group form-floating mb-2">
                                <b-input v-model="elemento.numero"></b-input>
                                <label>Ingrese el numero del cheque</label>
                            </div>
                        </b-col>
                        <b-col cols="2">
                            <div class="col form-group form-floating mb-2">
                                <b-input v-model="elemento.monto"></b-input>
                                <label>Monto</label>
                            </div>
                        </b-col>
                        <b-col cols="1" ><b-button @click=" EliminarChequeSeleccionado(index)"  variant="light"><b-icon icon="trash"></b-icon></b-button></b-col>
                    </b-row>
                </b-container>
            </div>
 </b-modal>
 <b-button @click="Pagar()">Pagar</b-button> 
 <div  style="margin-bottom: 110px;">
    <FacturaVentaVue  v-if="pagar==true" ></FacturaVentaVue>
 </div>

    
</div>
</template>

<script>
import FacturaVentaVue from './FacturaVenta.vue';
  export default {
    mounted() {
   
    const array = this.$route.query.array;
    const doc = this.$route.query.doc;
    const tipo = this.$route.query.tipo;
    const evento = this.$route.query.evento;
    const divisas = this.$route.query.totaldi;
    const bs = this.$route.query.totalbs;
  },
    components:{
        FacturaVentaVue
    }
    ,
    data() {
      return {
     
        fields: ['selected', 'Mis_tarjetas', 'nombre_tarjeta', 'fecha_vencimiento'],
        items: [
          { isActive: true, Mis_tarjetas: "***"+22, nombre_tarjeta: 'Gabriela M', fecha_vencimiento: '03/15',id:1 },
          { isActive: true, Mis_tarjetas: "***"+22, nombre_tarjeta: 'G Martinez', fecha_vencimiento: '03/15',id:2 },
          { isActive: true, Mis_tarjetas: "***"+22, nombre_tarjeta: 'Gabriela Josefina', fecha_vencimiento: '03/15',id:3 },
        ],
        selectMode: 'multi',
        selected: [],
        btAgregar:false,
        Montos:[],
        total:0,
        pagar:false,
        Efectivo:'',
        Cheques:[],
        evento: -1,
        doc : '',
        array: [],
        tipo: '',
        items: [],
        doc: '',
        tipoCliente: '',
        idEvento: '',
        totaldi: '',
        totalbs: ''
      }
    },
    created(){
        this.obtenerDatos()
        this.calcularTotal()
    },

    methods: {
      onRowSelected(items) {
        this.selected = items;
        this.guardar();
       
      },
      guardar(){
        this.Montos=[]
        this.selected.forEach((elemento) => this.Montos.push({tipoMetodo:'Tarjeta',idMetodo:elemento.id,monto:''}))
        console.log(this.Montos)
        this.pagar=true
      },
      RegistrarCheques(){
      this.Cheques.push({ numero: '',banco:'',monto:''});
      },
      EliminarChequeSeleccionado(indice){
      this.Cheques.forEach((elemento,index) => { 
          if (indice==index){
             this.Cheques.splice(index,1)}})},
    Pagar(){
        console.log(this.$route.query.valor1)
        //Aqui deberia verificar que el pago se realiza conrrectamente emite factura
        this.pagar=true
    },

    obtenerDatos(){
        this.items = this.$route.query.array;
        this.doc = this.$route.query.doc;
        this.tipoCliente = this.$route.query.tipo;
        this.idEvento = this.$route.query.evento;
        this.totaldi = this.$route.query.totaldi;
        this.totalbs = this.$route.query.totalbs;
    },

    calcularTotal(){ 
        this.evento = this.$route.query.evento;
        this.doc = this.$route.query.doc;
        this.tipo = this.$route.query.tipo;
        this.array = this.$route.query.array;
        for (let i = 0; i < this.$route.query.array.length; i++) {
            const precioNumerico = parseFloat(this.$route.query.array[i].Precio.replace(',', '.')); 
            console.log(`Precio para ${this.$route.query.array[i].Nombre}: ${precioNumerico}`);
            console.log(this.$route.query.array[i].stock)
            this.total = this.total + (this.$route.query.array[i].stock * precioNumerico )
        }
    }

      
      
    }
  }
</script>