<template>
    
    <section class="container" style=" box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset; margin-top: 20px;"  >


  <b-container>
      <b-row>
          <b-col style="margin-left: 30PX;" cols="12"><h1 style="font-weight: bold; text-align: left;">Orden de Reposicion</h1></b-col>
      </b-row>
      <b-row>
          
          <b-col style="margin-left: 30PX;">
              <H4 style="text-align: left;" >ASORONUCAB C.A</H4>
              <h6  style="text-align: left;">{{ direccionAso }}</h6>
              <h6 style="text-align: left;">RIF: {{ rifAso }}</h6>
          </b-col>
          <b-col></b-col>
          <b-col></b-col>
      </b-row>
      <b-row>
          <b-col cols="6"><h4 style="font-weight: bold; text-align: left; margin-left: 20px;">A</h4></b-col>
          <b-col><h5 style="font-weight: bold;">N de orden:  {{ numero_orden }}</h5>
          <h5 style="font-weight: bold;">Fecha: {{ fecha }}</h5> </b-col>
      </b-row>
      <b-row>
          <b-col style="margin-left: 20px;">
              <H6 style="text-align: left;">Razon Social: {{ proveedor }}</H6>
              <h6 style="text-align: left;" > RIF: {{ rif }}</h6>
              <h6 style="text-align: left;">Direccion: {{ direccion }}</h6>
          </b-col>
      </b-row>  
      <div>
    <b-table striped hover :items="items" :fields="fields"></b-table>
  </div>

  </b-container>
</section>
   
</template>
<script>
  export default {
    props:{
      id:''
    },
    data() {
      return {
        // Note `isActive` is left out and will not appear in the rendered table
        fields: ['Cantidad','Descripcion' ],
        items: [
        
        ],
        total:1500,
        numero_orden:'',
       proveedor:'',
       rif:'',
       rifAso:'',
       direccionAso:'',
       direccion:'',
       fecha:''
        
      }
    },
    created(){
      this.obtenerOrdenes()
      this.datosAsoron()
    },
    methods:{
    
      async obtenerOrdenes() {
        console.log('estas qoooo' +this.id)
        const data={
          id:this.id
        }
            const url = 'http://localhost:3000/api/orderReposicion';
            await this.axios.post(url,data).then(response => {
              this.orden = response.data[0];
              this.numero_orden=response.data[0].codigo
              const item={
              Cantidad:1000,
              Descripcion:response.data[0].descripcion }
              this.items.push(item)
              this.proveedor=response.data[0].proveedor
              this.rif=response.data[0].rif
            }).catch(error => {
              console.log(error);
            });
            this.direccionProveedor(this.rif)
            this.fechaOrden(this.numero_orden)
        },
        datosAsoron(){
          
        const url = 'http://localhost:3000/api/facturaAfiliado/datosAsoron';
        this.axios.post(url).then(response => {
                     console.log(response.data)
                     this.rifAso=response.data.rif
                     this.direccionAso=response.data.direccion
                     }).catch(error => {
                     console.log(error.response.data);
                 });
                },
                

        async direccionProveedor(rif) {
        const data={ id:rif}
            const url = 'http://localhost:3000/api/orderReposicion/proveedor';
            await this.axios.post(url,data).then(response => {
              this.orden = response.data[0];
              this.direccion=response.data[0].direccion_proveedor
            }).catch(error => {
              console.log(error);
            });
        },
        async fechaOrden(numero) {
        const data={ id:numero}
            const url = 'http://localhost:3000/api/orderReposicion/fecha';
            await this.axios.post(url,data).then(response => {
              this.fecha = response.data[0].fecha_orden;
            }).catch(error => {
              console.log(error);
            });
        },
       
    }
  }
</script>