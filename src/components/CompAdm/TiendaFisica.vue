<template>
  <b-container class="bv-example-row" style="background-color: var(--fondo)">
    <b-row style="margin-top: 20px;">
      <b-input-group >
        <b-form-select
              id="per-page-select"
              v-model="perPage"
              :options="pageOptions"
            ></b-form-select>
           <b-form-input 
               v-model="Cliente"
               :disabled="!habilitado"
            ></b-form-input>
             <b-input-group-append>
                <b-button variant="info" @click="buscarCliente(Cliente)">Buscar</b-button>
            </b-input-group-append>
      </b-input-group>
    </b-row>
    
    <b-row style="margin-top: 20px;">
      <b-col sm="6"><b-card bg-variant="light" text-variant="black"  class="text-center">
        <b-card-title>Datos del cliente</b-card-title>
          <b-card-text >
            <h6>Nombre: {{Nombre }}</h6>
            <h6>Cedula: {{Cedula }}</h6>  
           <!-- <h6>Telf: {{telf }}</h6>  -->
           <h6>Direccion: {{ Direccion }}</h6>
          </b-card-text>
        </b-card>
      </b-col>
      <b-col sm="6"><b-card bg-variant="light" text-variant="black"  class="text-center">
          <b-card-title>Puntos Cliente</b-card-title>
          <b-card-text> {{ Puntos }}</b-card-text>
          <b-card-title>Precio Actual del $</b-card-title>
          <b-card-text>{{ monitorData }}</b-card-text>
          <b-card-title>Total</b-card-title>
          <b-card-text>{{ totalbs }}Bs.s || {{ totaldi }}$ </b-card-text>
          
        </b-card>
      </b-col>
    </b-row>
    <b-row style="margin-top:10px; m">
        <b-col cols="1" class="col form-group form-floating mb-2">
           <b-form-select
              v-model="TipoDeVenta" 
              :options="tipo" 
              style="width: 195px" 
              class="custom-select mr-sm-2  form-control "
              @change="tipoDeVentaSeleccionado"
              :disabled="!tipoDeVenta"
              ></b-form-select>
           <label style="width: 195px">Tipo de venta</label>
        </b-col>
      </b-row>
      <b-row>
        <!-- <b-col cols="2"></b-col> -->
        <b-col cols="2" style="margin-top:25px" class="col form-group form-floating mb-2" v-if="TipoDeVenta=='----Evento----'"> 
          <b-form-select  
            class="custom-select mr-sm-2  form-control " 
            v-model="EventoSeleccionado" 
            :options="Eventos.map(item => ({ text: item.nombre_evento, value: item.id }))"
            @change="habilitarAgregar"
            :disabled="!fueSeleccionado"
            > </b-form-select>  
          <!-- <b-form-select :options="Eventos"  v-model="EventoSeleccionado"  class="custom-select mr-sm-2  form-control altura"></b-form-select> -->
          <label>Evento</label>
        </b-col>
      </b-row>
    <b-row>
      <b-col >
         <b-input-group prepend="Codigo del producto" class="mt-3">
           <b-form-input v-model="CodigoProducto"></b-form-input>
             <b-input-group-append>
                <b-button variant="info" 
                  @click="cargarProducto(CodigoProducto)"
                  :disabled="!aggProducto"
                  >Agregar</b-button>
            </b-input-group-append>
          </b-input-group>
      </b-col>
    </b-row>
    <div class="tabla-con-scroll">
        <b-table
            :items="items"
            :fields="fields"
            hover
            outlined
            stacked="md"
            show-empty
            small
          >
            <template #cell(name)="row">
              {{ row.value.first }} {{ row.value.last }}
            </template>
            <template #cell(stock)="row">
              <div class="d-flex justify-content-center">
                <b-button @click="decreaseStock(row.item)" variant="danger" size="sm">-</b-button>
                <span class="mx-2">{{ row.item.stock }}</span>
                <b-button @click="increaseStock(row.item)" variant="success" size="sm">+</b-button>
              </div>
            </template>
            <template #row-details="row">
              <b-card>
                <ul>
                  <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
                </ul>
              </b-card>
            </template>
        </b-table>
    </div>
    <b-row>
      <b-col></b-col>
      <b-col></b-col>
      
      <b-col><b-button v-b-modal.modal-center @click="mostrarModal()">Canjear</b-button></b-col>
      <b-col ><b-button @click="Pagar()"> Pagar</b-button></b-col>

  
    <b-modal id="modal-center" centered title="Canjear puntos" v-if="modal">
      <b-input-group prepend="Cantidad" class="mt-3">
           <b-form-input v-model="canjear"></b-form-input>
             <b-input-group-append>
                <b-button variant="info" @click="mostrarModal()">Aceptar</b-button>
            </b-input-group-append>
          </b-input-group>
    </b-modal>
    </b-row>
  
  </b-container>
  </template>

  
  
  


<script>
  
  export default {  
    props:{
      cod_tipo_usuario:''
    },
    data() {
      return {
        modal: false,
        pageOptions:['Natural', 'Juridico'],
        perPage: 'Natural',
        Cliente:'',
        CodigoProducto:'',
        Nombre:'',
        Cedula:'',
        // telf:'',
        Direccion:'',
        Puntos:'',
        totaldi:0,
        totalbs:0,
        items: [],
        colocados: [],
        fields: [
          { key: 'Nombre', label: 'Nombre', class:'spann', sortable: true},
          { key: 'stock', label: 'Stock', class: 'text-center ',sortable: true  },
          // { key: 'Cantidad', label: 'Cantidad', class: 'text-center' },
          { key: 'Precio', label: 'Precio', class: 'text-center spann' , sortable: true},
        ],
        canjear:0,
        tipo:['----Tienda----','----Evento----', '----Entrada----'],
        TipoDeVenta:'',
        EventoSeleccionado:-1,
        Eventos:[],
        habilitado: true,
        tipoDeVenta: true,
        aggProducto: false,
        fueSeleccionado: true,
        monitorData: 35.93,
        valorRealPunto: 0,
        idEmpleado: 1,
        ciEmpleado:'1234567',
        punto: 0,
        acumuladoP: 0
      }
    },
    created(){
        this.adquirirDatos(this.$route.params.cod_tipo_usuario)
       console.log(this.$route.params.cod_tipo_usuario)
        this.obtenerEventos()
        this.getMonitor()
        
      },
      mounted() {
        this.cod_tipo_usuario=this.$route.params.cod_tipo_usuario
      },
    methods: {
      adquirirDatos(cod){
       const partes = cod.split('_');
       const codigo = parseInt(partes[0], 10);
       const ci = partes[1];
       this.idEmpleado = codigo
       this.ciEmpleado = ci
       console.log('Código:', this.idEmpleado, typeof this.idEmpleado);
       console.log('CI:', this.ciEmpleado, typeof this.ciEmpleado);
      },
      CrearOrden(){
            let producto={Nombre:'Santa teresa',Cantidad:1,Precio:50}
            console.log(this.Cliente + this.CodigoProducto)
            this.items.push(producto);
           
        },

        async getContentPage(url) {
          console.log('todo')
          try {
            const response = await fetch(url);

            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          } catch (error) {
            console.error(`Error fetching data: ${error.message}`);
            throw error;
          }
        },


        async getMonitor() {
          console.log('llamando')
         // https://bcv-api.deno.dev/v1/exchange
            const api = 'https://pydolarvenezuela-api.vercel.app/api/v1/dollar/';
            try {
                const response = await this.getContentPage(api);
                console.log('todo okkk')
                const allMonitors = response['monitors'];
                console.log(allMonitors)
                const monitorData = allMonitors['bcv'];
                this.monitorData = monitorData.price
                console.log(this.monitorData);
                this.orden.push({
                      idProducto: 0,
                      idCliente: 1,
                      nombre: 0,
                      precio: 1,
                      nombreImagen: 0,
                      stock: 1,
                      cantidad: 1,
                      total: 0,
                });
                console.log(this.orden);
                return monitorData.price;
            } catch (error) {
                console.error(`KeyError: ${error.message}`);
            }
      },
      tipoDeVentaSeleccionado(){
        if(this.TipoDeVenta !==''){
          this.tipoDeVenta = false;
        }
        console.log(this.habilitado)
        if((this.TipoDeVenta == '----Tienda----' || this.TipoDeVenta == '----Entrada----') && this.habilitado == false){
          this.aggProducto = true;
        }
      },
      
      habilitarAgregar(){
        console.log(this.TipoDeVenta)
        if(this.EventoSeleccionado !==-1 && this.habilitado == false){
          this.aggProducto = true;
          this.fueSeleccionado= false
        }
      },


      regVentaFisica(natural, juridico){
        this.insertarAuditoria('Crear','Venta_Fisica')
        const url = 'http://localhost:3000/api/ventaF/insertarE';
        const datos = {
                total: this.totalbs,
                cod_cliente_natural_1: natural, 
                cod_empleado_1: this.idEmpleado, 
                cod_empleado_2: this.ciEmpleado,
                cod_cliente_juridico: juridico,
                cod_estatus: 3,
                
        };
        this.axios.post(url, datos).then(response => {
        console.log(response.data);
        }).catch(error => {
            console.log(error);
        });

            
      },

      regVentaFisicaEntrada(fk_fisica, natural, juridico){
        this.insertarAuditoria('Crear','Venta_Fisica_Entrada')
        console.log(natural)
        console.log(juridico)
        const url = 'http://localhost:3000/api/ventaF/entrada';
        console.log(this.totalbs)
        const datos = {
                total: this.totalbs,
                cod_cliente_natural_2: natural, 
                cod_cliente_juridico: juridico,
                fk_fisica: fk_fisica,
                
        };
        console.log(datos)
        this.axios.post(url, datos).then(response => {
        console.log(response.data);
  
        }).catch(error => {
            console.log(error);
        });

            
      },

      async obtenerValorPunto() {
            const url = 'http://localhost:3000/api/tiendafisica/punto';
            this.insertarAuditoria('Consultar','Punto')
            console.log(this.monitorData)
            await this.axios.get(url).then(response => {
              const punto = response.data[0].obtener_ultimo_precio/this.monitorData;
              
              console.log(punto)
              this.valorRealPunto = punto.toFixed(2)
              console.log(this.valorRealPunto)
            }).catch(error => {
              console.log(error);
            });
        },

      Pagar(){
        if(this.Nombre != undefined){
          console.log(this.TipoDeVenta)
          
          if(this.TipoDeVenta == '----Entrada----'){
            // Esto es para registrar la venta de una entrada
            console.log(this.items)
            console.log(this.TipoDeVenta)
            if(this.totaldi > 0 || this.totalbs > 0){
              this.calcularTotal()
              if(this.perPage == 'Juridico'){
                this.regVentaFisicaEntrada(1, null, this.Cliente)
              }else{
                this.regVentaFisicaEntrada(1, this.Cliente, null)
              }
              if (this.$route.path!='/PagarTiendaFisica/'+this.cod_tipo_usuario){
                this.$router.push({
                  path: '/PagarTiendaFisica/'+this.cod_tipo_usuario,
                  query: {
                    array: JSON.stringify(this.items),
                    doc: this.Cedula,
                    tipo: this.perPage,
                    lugar: this.TipoDeVenta,
                    evento: this.EventoSeleccionado,
                    punto: this.canjear,
                    totaldi: this.totaldi,
                    totalbs: this.totalbs,
                    nombreC: this.Nombre,
                    direccion: this.Direccion,
                    dolar: this.monitorData
                  }
                });
              }
            }
          }else {
            // Esto es para registrar la venta en un evento
            console.log(this.TipoDeVenta)
            console.log(this.items)
            if(this.totaldi > 0 || this.totalbs >0){
              this.calcularTotal()
              if(this.perPage == 'Juridico'){
    
                this.regVentaFisica(null, this.Cliente, null)
              }else{
                this.regVentaFisica(this.Cliente, null, null)
              }
              
              if (this.$route.path!='/PagarTiendaFisica/'+this.cod_tipo_usuario){
                this.$router.push({
                  path: '/PagarTiendaFisica/'+this.cod_tipo_usuario,
                  query: {
                    array: JSON.stringify(this.items),
                    doc: this.Cedula,
                    tipo: this.perPage,
                    evento: this.EventoSeleccionado,
                    punto: this.canjear,
                    totaldi: this.totaldi,
                    totalbs: this.totalbs,
                    nombreC: this.Nombre,
                    direccion: this.Direccion,
                    lugar: this.TipoDeVenta, 
                    dolar: this.monitorData
                  }
                });
              }
            }

          }
        }  
      },

      mostrarModal(){
        if(this.modal == false){
          this.modal = true
        }else{
          this.modal=false
        }
        const puntosDecimal = parseFloat(this.Puntos);
        if(puntosDecimal < this.canjear){
          this.canjear = puntosDecimal
        }
        this.calcularTotal()
        console.log(this.canjear)
      },

      decreaseStock(item) {
          if (item.stock > 0 ) {
            item.stock--;
            this.calcularTotal()
          }
        },
        increaseStock(item) {
          if(item.stock <= item.StockMax){
            item.stock++;
            this.calcularTotal()
          }
        },

      async buscarCliente(cliente){
        console.log(this.TipoDeVenta)
        if(cliente !== ''){
          this.habilitado = false;
        }
        if(this.TipoDeVenta !==''){
          this.tipoDeVentaSeleccionado()
          this.habilitarAgregar()
        }
        console.log(cliente)
        if(this.perPage == 'Natural'){
          try {
            console.log('aca')
            const response = await this.axios.post('http://localhost:3000/api/cliente/naturalUno', {
               cedula: cliente 
            
              });
              this.insertarAuditoria('Consultar','Cliente_Natural')
            const clienteNatural = response.data;
            console.log(clienteNatural);
            this.Nombre = clienteNatural.p_nombre;
            console.log(this.Nombre)
            this.Cedula = cliente;
            this.Direccion = clienteNatural.direccion;
            this.Puntos = clienteNatural.puntos_acumulados;
          } catch (error) {
            console.error('Error al obtener el cliente natural:', error);
          }
        }else{
          try {
            const response = await this.axios.get('http://localhost:3000/api/cliente/juridico', {
              params: { rif: cliente }
            });
            this.insertarAuditoria('Consultar','Cliente_Juridico')
            const clienteJuridico = response.data;
            console.log(clienteJuridico);
            this.Nombre = clienteJuridico[0].denominacion_comercial;
            this.Cedula = cliente;
            this.Direccion = clienteJuridico[0].direccion_fisica

          } catch (error) {
            console.error('Error al obtener el cliente natural:', error);
          }
        }

      },

        llenarTabla(nombre, precio, cod, cant){
          console.log(nombre)
          console.log(precio)
          const numeroDecimal = parseFloat(cant);
          console.log(typeof numeroDecimal)
          const precioDecimal = parseFloat(precio);
          console.log(typeof precioDecimal)
          const item = {
              Nombre: nombre,
              stock: 1,
              Precio: precioDecimal,
              Codigo: cod,
              StockMax: numeroDecimal
            };
          this.items.push(item)
          this.calcularTotal()
          for (let i = 0; i < this.items.length; i++) {
            console.log(this.items[i].stock)}
          console.log(this.items)
         
        },
      

      traerNombre(data, precio, cantidad){
        const url = 'http://localhost:3000/api/tiendafisica/particular';
        const datos = {
            cod_pro: data,
        };
        this.axios.post(url, datos).then(response => {
        console.log(response.data[0].presentacion_particular);
        this.llenarTabla(response.data[0].presentacion_particular, precio,data, cantidad)
  
        }).catch(error => {
            console.log(error);
        });
      },

      cargarEntrada(data){
        const url = 'http://localhost:3000/api/tiendafisica/entradasDisponibles';
        const codigo=parseInt(data,10)
            const datos = {
                codE: codigo,
            };
          
            console.log(datos);
            this.axios.post(url, datos).then(response => {
            console.log(response.data[0]);
            if (this.verificarNumeroEnArray(data, this.colocados)) {
              console.log(`${data} está en el array.`);
            } else {
              console.log(`${data} no está en el array.`);
              this.colocados.push(data)
              console.log(this.colocados)
              this.llenarTabla(response.data[0].nombre, response.data[0].precio,data, response.data[0].cantidad_entradas)
            }
            this.insertarAuditoria('Consultar','Entrada')
              }).catch(error => {
                console.log(error);
            });
      },
      cargarProductoTienda(data){
        const url = 'http://localhost:3000/api/tiendafisica/tienda';
            const datos = {
                cod_pro: data,
            };
          
            console.log(datos);
            this.axios.post(url, datos).then(response => {
            console.log(response.data);
            this.insertarAuditoria('Consultar','Presentacion')
            if (this.verificarNumeroEnArray(data, this.colocados)) {
              console.log(`${data} está en el array.`);
            } else {
              console.log(`${data} no está en el array.`);
              this.colocados.push(data)
              console.log(this.colocados)
              this.traerNombre(data, response.data[0].precio, response.data[0].cantidad)
              // this.llenarTabla(data, response.data[0].precio, response.data[0].cantidad)
            }
              }).catch(error => {
                console.log(error);
            });
      },

      cargarProducto(data){
        if(this.TipoDeVenta == '----Tienda----'){
            console.log('por aca paso')
            this.cargarProductoTienda(data)
        }
        if(this.TipoDeVenta == '----Entrada----'){
            console.log('por aca paso')
            this.cargarEntrada(data)
        }else{
          console.log(data)
          console.log(this.EventoSeleccionado )
          if (this.EventoSeleccionado == -1){
  
          }else{
            const url = 'http://localhost:3000/api/tiendafisica';
            const datos = {
                cod_pro: data,
                cod_eve: this.EventoSeleccionado,
            };
          
            console.log(datos);
            this.axios.post(url, datos).then(response => {
            console.log(response.data[0]);
            if (this.verificarNumeroEnArray(data, this.colocados)) {
              console.log(`${data} está en el array.`);
            } else {
              console.log(`${data} no está en el array.`);
              this.colocados.push(data)
              console.log(this.colocados)
              this.traerNombre(data, response.data[0].precio, response.data[0].cantidad)
              this.calcularTotal()
            }
              }).catch(error => {
                console.log(error);
            });

          }
        
      }

      },

      calcularTotal(){
        this.obtenerValorPunto()
        this.totaldi = 0
        this.totalbs = 0
        for (let i = 0; i < this.items.length; i++) {
            this.totaldi = this.totaldi + (this.items[i].stock*this.items[i].Precio)
            if(this.canjear > 0){
              this.totaldi = (this.totaldi - (this.canjear*this.valorRealPunto)).toFixed(2)
            }
            this.totalbs = (this.totaldi * this.monitorData).toFixed(2)
            console.log(this.items[i].stock)
          }

          console.log(this.items)
      },

      verificarNumeroEnArray(numero, array) {
        return array.includes(numero);
      },


      llenarEventos(data){
          for (let i = 0; i < data.length; i++) {
            const item = {
              nombre_evento: data[i].nombre_evento,
              id: data[i].evento_id
            };
            console.log(data[i].nombre_evento)            
            this.Eventos.push(item)
            console.log(item)
            
          }
          this.insertarAuditoria('Consultar','Evento')
        },

    async obtenerEventos() {
            const url = 'http://localhost:3000/api/evento/actual';
            await this.axios.get(url).then(response => {
              const evento = response.data;
              
            console.log(evento)
             
            this.llenarEventos(evento)
            
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



  
    }   
    }

  
    
</script>
<style>
  .tabla-con-scroll {
    max-height: 49vh;
    overflow-y: auto;
  }
  
  .tabla-con-scroll thead {
      position: sticky;
      top: 0;
      background-color: #fff;
  }

</style>