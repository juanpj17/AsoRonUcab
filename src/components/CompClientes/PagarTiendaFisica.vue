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
                            <p style="text-align: left; margin-bottom: 5px;"> {{ 'Indique la cantidada a cancelar con la tarjeta:' }}  {{ Montos.idMetodo }}</p>
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
    <FacturaVentaVue  v-if="pagar==true" :datosPestanaPagar="datosPagar"></FacturaVentaVue>
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
    const lug = this.$route.query.lugar;
  },
    components:{
        FacturaVentaVue
    }
    ,
    data() {
      return {
        datosPagar: { },
        fields: ['selected', 'Mis_tarjetas', 'nombre_tarjeta', 'fecha_vencimiento'],
        // items: [
        //   { isActive: true, Mis_tarjetas: "***"+22, nombre_tarjeta: 'Gabriela M', fecha_vencimiento: '03/15',id:1 },
        //   { isActive: true, Mis_tarjetas: "***"+22, nombre_tarjeta: 'G Martinez', fecha_vencimiento: '03/15',id:2 },
        //   { isActive: true, Mis_tarjetas: "***"+22, nombre_tarjeta: 'Gabriela Josefina', fecha_vencimiento: '03/15',id:3 },
        // ],
        selectMode: 'multi',
        selected: [],
        btAgregar:false,
        Montos:[],
        total:0,
        pagar:false,
        Efectivo:0,
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
        totalbs: '',
        productos: [],
        tarjeta:'',
        totalfinal: 0,
        validaciones: 0,
        validacionE: 0,
        tipoV: '',
        punto: 0
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
        console.log(this.selected)
    //     for (let i = 0; i < this.selected.length; i++) {
    //       this.Montos.push({})
    //   }
        this.selected.forEach((elemento) => this.Montos.push({tipoMetodo:elemento.Mis_tarjetas,idMetodo:elemento.nombre_tarjeta,monto:0, codigo:elemento.cod_met}))
        console.log(this.Montos)
        
      },
      RegistrarCheques(){
      this.Cheques.push({ numero: '',banco:'',monto:0});
      },
      EliminarChequeSeleccionado(indice){
        this.Cheques.forEach((elemento,index) => { 
            if (indice==index){
                this.Cheques.splice(index,1)}
        }
        )
    },
    procesarPagoCheque(data){
        console.log(data)
        const monto = parseFloat(data.monto);
        const url = 'http://localhost:3000/api/tiendafisica/procesarPago';
        const datos = {
                banco_cheque: data.banco,
                numero_cheque: data.numero,
                monto_parcial: monto,
                fk_venta_virtual: null,
                fk_tarjeta: null,
                fk_efectivo: null,
                fk_mi_punto: null
        };
            this.axios.post(url, datos).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
    },
    procesarPagoChequeE(data){
        console.log(data)
        const monto = parseFloat(data.monto);
        const entrada = parseInt(this.productos[0].Codigo)
        console.log()
        const url = 'http://localhost:3000/api/tiendafisica/procesarPagoEntradaC';
        const datos = {
                banco_cheque: data.banco,
                numero_cheque: data.numero,
                monto_parcial: monto,
                fk_tarjeta: null,
                fk_efectivo: null,
                fk_mi_punto: null,
                fk_entrada: entrada,
                fk_venta_virtual: null
        };
            this.axios.post(url, datos).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
    },
    procesarPagoEfectivoE(){
        
        const url = 'http://localhost:3000/api/tiendafisica/procesarPagoEntradaE';
        const monto = parseFloat(this.Efectivo);
        const entrada = parseInt(this.productos[0].Codigo)
        const datos = {
                denominacion: 'Bs.S',
                monto_parcial: monto,
                tarjeta: null,
                cheque: null,
                mi_punto: null,
                fk_entrada: entrada,
                fk_venta_virtual: null,
        };
            this.axios.post(url, datos).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
    },
    procesarPagoEfectivo(){
        
        const url = 'http://localhost:3000/api/tiendafisica/procesarPagoE';
        const monto = parseFloat(this.Efectivo);
        const datos = {
                denominacion: 'Bs.S',
                monto_parcial: monto,
                fk_venta_virtual: null,
                fk_cheque: null,
                fk_tarjeta: null,
                fk_mi_punto: null
        };
            this.axios.post(url, datos).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
    },

    procesarPagoPunto(){
        
        const url = 'http://localhost:3000/api/tiendafisica/procesarPagoP';
        const datos = {
                monto_parcial: this.punto,
                fk_venta_virtual: null,
                fk_cheque: null,
                fk_efectivo: null,
                fk_tarjeta: null
        };
            this.axios.post(url, datos).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
    },
    procesarPagoPuntoE(){
        
        const url = 'http://localhost:3000/api/tiendafisica/procesarPagoEntradaP';
        const entrada = parseInt(this.productos[0].Codigo)
        const datos = {
                monto_parcial: this.punto,
                tarjeta: null,
                fk_cheque: null,
                fk_efectivo: null,
                mi_punto: this.punto,
                fk_entrada: entrada,
                fk_venta_virtual: null,
        };
            this.axios.post(url, datos).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
    },
    procesarPagoTarjeta(data){
        console.log(data)
        const url = 'http://localhost:3000/api/tiendafisica/procesarPagoT';
        const monto = parseFloat(data.monto);
        const datos = {
                monto_parcial: monto,
                fk_venta_virtual: null,
                fk_efectivo: null,
                fk_cheque: null,
                fk_tarjeta: data.codigo,
                fk_mi_punto: null
        };
            this.axios.post(url, datos).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
    },

    procesarPagoTarjetaE(data){
        console.log(data)
        const url = 'http://localhost:3000/api/tiendafisica/procesarPagoEntradaT';
        const monto = parseFloat(data.monto);
        const entrada = parseInt(this.productos[0].Codigo)
        const datos = {
                monto_parcial: monto,
                tarjeta: data.codigo,
                cheque: null,
                efectivo: null,
                mi_punto: null,
                fk_entrada: entrada,
                fk_venta_virtual: null,
        };
            this.axios.post(url, datos).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
    },
    agregarDetalleEvento(data){
        const monto = data.stock*data.Precio
        console.log(data)
        const url = 'http://localhost:3000/api/tiendafisica/procesarDetalleE';
        const cod = parseInt(data.Codigo);
        const cod2 = parseInt(this.idEvento);
        const datos = {
                cantidad: data.stock,
                precio: monto,
                codigo1: cod,
                codigo2: cod2,
        };
            this.axios.post(url, datos).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
    },
    agregarDetalleTienda(data){
        const monto = data.stock*data.Precio
        console.log(data)
        const url = 'http://localhost:3000/api/tiendafisica/detalleTienda';
        const cod = parseInt(data.Codigo);
        const datos = {
                cantidad: data.stock,
                precio: monto,
                presentacion: cod
        };
            this.axios.post(url, datos).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
    },
    actualizarInfo(data){
        console.log(data)
        const url = 'http://localhost:3000/api/tiendafisica/actualizar';
        const cod = parseInt(data.Codigo);
        const cod2 = parseInt(this.idEvento);
        const datos = {
                cantidad: data.stock,
                fk_evento: cod2,
                fk_presentacion: cod,
        };
            this.axios.post(url, datos).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
    },
    actualizarInfoTienda(data){
        console.log(data)
        const url = 'http://localhost:3000/api/tiendafisica/actualizarInvTienda';
        const cod = parseInt(data.Codigo);
        const datos = {
                cantidad: data.stock,
                fk_presentacion: cod,
        };
            this.axios.post(url, datos).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
    },

    agregarDetalleEntrada(data){
        
        console.log(data)
        const url = 'http://localhost:3000/api/tiendafisica/detalleE';
        const cod = parseInt(data.Codigo);
        const cod2 = parseInt(this.idEvento);
        const datos = {
                evento: cod,
                cantidad_ent: data.stock,
                precio_unitario: data.Precio
        };
            this.axios.post(url, datos).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
    },

    actualizarInfoE(data){
     
        console.log(data)
        const url = 'http://localhost:3000/api/tiendafisica/actualizarEntrada';
        const cod = parseInt(data.Codigo);
        const datos = {
                evento_id: cod,
                cantidad_restar: data.stock,
        };
            this.axios.post(url, datos).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
    },
    actualizarPuntos(tipo){
      if(tipo == 'Natural'){
        const url = 'http://localhost:3000/api/ventaF/actualizarPuntos';
        const datos = {
                codC: this.doc,
                puntos_a_restar: this.punto,
        };
            this.axios.post(url, datos).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
      }else{
        // const url = 'http://localhost:3000/api/ventaF/actualizarPuntosJ';
        // const datos = {
        //         codC: this.doc,
        //         puntos_a_restar: this.punto,
        // };
        //     this.axios.post(url, datos).then(response => {
        //     console.log(response.data);
        // }).catch(error => {
        //     console.log(error);
        // });
      }
     
 },


    Pagar(){
        
        this.verificarCheque()

        if(this.validaciones === 0){

                this.totalfinal = 0
                const efectivo = parseFloat(this.Efectivo);
                console.log(efectivo)
                this.totalfinal = this.totalfinal + efectivo;
                console.log(this.totalfinal)
                for (let i = 0; i < this.Cheques.length; i++) {
                    console.log(this.totalfinal)
                    const monto = parseFloat(this.Cheques[i].monto);
                    this.totalfinal = this.totalfinal + monto
                    console.log(this.totalfinal)
                }
                console.log(this.Montos)
                console.log(this.Montos.length)
                console.log(this.Montos[0])
                console.log(this.Montos[1])
                for (let i = 0; i < this.Montos.length; i++) {
                    const monto = parseFloat(this.Montos[i].monto);
                    console.log(monto)
                    this.totalfinal = this.totalfinal + monto
                    console.log(this.totalfinal)
                }
                this.totalfinal = this.totalfinal.toFixed(2)
                console.log(this.totalfinal)
                if(!isNaN(this.totalfinal) && this.totalfinal == this.totalbs){
                    
                    if(this.tipoV == '----Evento----'){
                        if(this.Cheques.length > 0 ){
                            for (let i = 0; i < this.Cheques.length; i++) {
                                this.procesarPagoCheque(this.Cheques[i])
                            }
                        }
                        if(this.Efectivo > 0) {
                            this.procesarPagoEfectivo()
                        }
                        if(this.punto > 0) {
                            this.procesarPagoPunto()
                            this.actualizarPuntos(this.tipoCliente)
                        }
                        if(this.Montos.length > 0 ){
                            for (let i = 0; i < this.Montos.length; i++) {
                                this.procesarPagoTarjeta(this.Montos[i])
                                console.log(this.Montos[i])
                            }
                        }
                        for (let i = 0; i < this.productos.length; i++) {
                            this.agregarDetalleEvento(this.productos[i])
                        }
                        for (let i = 0; i < this.productos.length; i++) {
                            this.actualizarInfo(this.productos[i])
                        }
                    }
                        console.log(this.tipoV)
                    if(this.tipoV == '----Entrada----'){
                        if(this.Cheques.length > 0 ){
                            for (let i = 0; i < this.Cheques.length; i++) {
                                this.procesarPagoChequeE(this.Cheques[i])
                            }
                        }
                        if(this.Efectivo > 0) {
                            this.procesarPagoEfectivoE()
                        }
                        if(this.punto > 0) {
                            this.procesarPagoPuntoE()
                            this.actualizarPuntos(this.tipoCliente)
                        }
                        if(this.Montos.length > 0 ){
                            for (let i = 0; i < this.Montos.length; i++) {
                                this.procesarPagoTarjetaE(this.Montos[i])
                                console.log(this.Montos[i])
                            }
                        }
                    
                        console.log(this.tipoV)
                         for (let i = 0; i < this.productos.length; i++) {
                             this.agregarDetalleEntrada(this.productos[i])
                         }
                         for (let i = 0; i < this.productos.length; i++) {
                            this.actualizarInfoE(this.productos[i])
                        }
                    }
                    if(this.tipoV == '----Tienda----'){
                        if(this.Cheques.length > 0 ){
                            for (let i = 0; i < this.Cheques.length; i++) {
                                this.procesarPagoCheque(this.Cheques[i])
                            }
                        }
                        if(this.Efectivo > 0) {
                            this.procesarPagoEfectivo()
                        }
                        if(this.punto > 0) {
                            this.procesarPagoPunto()
                            this.actualizarPuntos(this.tipoCliente)
                        }
                        if(this.Montos.length > 0 ){
                            for (let i = 0; i < this.Montos.length; i++) {
                                this.procesarPagoTarjeta(this.Montos[i])
                                console.log(this.Montos[i])
                            }
                        }
                        for (let i = 0; i < this.productos.length; i++) {
                            this.agregarDetalleTienda(this.productos[i])
                        }
                        for (let i = 0; i < this.productos.length; i++) {
                            this.actualizarInfoTienda(this.productos[i])
                        }
                    }

                    this.mandarDatos()
                    
 
                }
                console.log(this.Montos)
                console.log(!isNaN(this.totalfinal));
                console.log(this.totalfinal === NaN)
                console.log(this.totalfinal)
            
        }else{
            console.log('pues noi')
        }
 
        //Aqui deberia verificar que el pago se realiza conrrectamente emite factura
        // this.pagar=true
    },
    mandarDatos(){
        this.datosPagar = { 
            nombre: this.$route.query.nombreC,
            doc: this.doc,
            direccion: this.$route.query.direccion,
            total: this.totalbs,
            tipoV: this.tipoV,
            dolar: this.$route.query.dolar,
            items: this.productos
         },
        this.pagar = true
    },
    obtenerTarjetasN(){
        const url = 'http://localhost:3000/api/ventaF/tarjetasObtener';
        const datos = {
                cod_cliente_natural_2: this.doc

        };
        this.axios.post(url, datos).then(response => {
        console.log(response.data);
        //esto es para convertir la fecha al fromato solicitado
        // { isActive: true, Mis_tarjetas: "***"+22, nombre_tarjeta: 'Gabriela M', fecha_vencimiento: '03/15',id:1 },
        for (let i = 0; i < response.data.length; i++) {
          
            const fecha = response.data[i].fecha.slice(0, 10);
              this.items.push({ 
                    isActive: true,
                    Mis_tarjetas: response.data[i].num_oculto,
                    nombre_tarjeta: response.data[i].nombre,
                    fecha_vencimiento : fecha,
                    cod_met: response.data[i].id
                })
            console.log(this.items)
        }
        }).catch(error => {
            console.log(error);
        });
    },
 

    obtenerTarjetasJ(){
        const url = 'http://localhost:3000/api/ventaF/tarjetasObtenerJ';
        const datos = {
                cod_cliente: this.doc

        };
        this.axios.post(url, datos).then(response => {
        console.log(response.data);
        //esto es para convertir la fecha al fromato solicitado
        // { isActive: true, Mis_tarjetas: "***"+22, nombre_tarjeta: 'Gabriela M', fecha_vencimiento: '03/15',id:1 },
        for (let i = 0; i < response.data.length; i++) {
          
            const fecha = response.data[i].fecha.slice(0, 10);
              this.items.push({ 
                    isActive: true,
                    Mis_tarjetas: response.data[i].num_oculto,
                    nombre_tarjeta: response.data[i].nombre,
                    fecha_vencimiento : fecha,
                    cod_met: response.data[i].id
                })
            console.log(this.items)
        }
        }).catch(error => {
            console.log(error);
        });
    },

    obtenerDatos(){
        const array = JSON.parse(this.$route.query.array)
        this.productos = array;
        this.tipoV = this.$route.query.lugar;
        this.doc = this.$route.query.doc;
        this.tipoCliente = this.$route.query.tipo;
        this.idEvento = this.$route.query.evento;
        this.totaldi = this.$route.query.totaldi;
        this.totalbs = this.$route.query.totalbs;
        const punto = parseInt(this.$route.query.punto)
        this.punto = punto;
        console.log( this.doc,this.tipoCliente, this.idEvento, this.totaldi, this.totalbs, this.tipoV, this.punto)
        console.log(this.productos)
        console.log(this.tipoCliente)
        console.log(this.items)
        if(this.tipoCliente == 'Natural'){
            this.obtenerTarjetasN()
        }else{
            this.obtenerTarjetasJ()
        }
    },

    verificarCheque(){
        console.log(this.Cheques)
        console.log(this.Cheques.length)
        const url = 'http://localhost:3000/api/tiendafisica/validarCheques';
        for (let i = 0; i < this.Cheques.length; i++) {
            const monto = parseFloat(this.Cheques[i].monto);
            const datos = {
                    param1: this.Cheques[i].banco,
                    param2: this.Cheques[i].numero,
                    param3: monto
            };
            this.axios.post(url, datos).then(response => {
                console.log(response.data);
                if(response.data[0].resultado == false){
                    this.validaciones = this.validaciones + 1
                }
                console.log(this.validaciones)
              }).catch(error => {
                  console.log(error);
              });
        }
    },

    verificarEfectivo(){
        this.validacionE = 0
        const url = 'http://localhost:3000/api/tiendafisica/validarEfectivo';
        
            const datos = {
                    param1: this.Efectivo
            };
            console.log(this.Efectivo)
            this.axios.post(url, datos).then(response => {
                console.log(response.data);
                if(response.data[0].resultado == true){
                    this.validacionE = this.validacionE + 1;
                }
                console.log(this.validacionE)
              }).catch(error => {
                  console.log(error);
              });
    },

      
      
    }
  }
</script>