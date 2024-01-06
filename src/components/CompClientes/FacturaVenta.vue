<template>
    
    <section class="container" style=" box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset; margin-top: 20px;"  >


  <b-container>
      <b-row>
          <b-col style="margin-left: 30PX;"><h1 style="font-weight: bold; text-align: left;">Recibo</h1></b-col>
          <b-col></b-col>
          <b-col></b-col>
      </b-row>
      <b-row>
          
          <b-col style="margin-left: 30PX;">
              <H4 style="text-align: left;" >ASORONUCAB C.A</H4>
              <h6  style="text-align: left;">Avenida Teherán, Caracas 1020, Distrito Capital</h6>
              <h6 style="text-align: left;">RIF: J-2531343012</h6>
          </b-col>
          <b-col></b-col>
          <b-col></b-col>
      </b-row>
      <b-row>
          <b-col><h4 style="font-weight: bold; text-align: left;">A</h4></b-col>
          <b-col></b-col>
          <b-col><h5 style="font-weight: bold;">N de recibo: {{ facturaNum }}</h5>
          <h5 style="font-weight: bold;">Fecha: {{ fechaActual }}</h5> </b-col>
      </b-row>
      <b-row>
          <b-col>
              <H6 style="text-align: left;">Nombre: {{ nombre }}</H6>
              <h6 style="text-align: left;" >CI: {{ doc }}</h6>
              <h6 style="text-align: left;">Direccion:  {{ direccion }}</h6>
          </b-col>
          <b-col></b-col>
          <b-col></b-col>
      </b-row>  
      <div>
    <b-table striped hover :items="items" :fields="fields"></b-table>
  </div>
  <b-row>
    <b-col></b-col>
    <b-col></b-col>
    <b-col></b-col>
    <b-col><h3 style="font-weight: bold;">Total</h3></b-col>
    <b-col><h3 style="font-weight: bold;">{{ total }}bs</h3></b-col>
  </b-row>
  </b-container>
</section>
   
</template>
<script>

  export default {
    props: {
      datosPestanaPagar: Object 
    },
    mounted() {
    console.log('Datos recibidos desde el padre:', this.datosPestanaPagar);
    },
    data() {
      
      return {
        // Note `isActive` is left out and will not appear in the rendered table
        fields: ['Cantidad','Descripcion', 'Subtotal', ],
        items: [
          // {  Cantidad: 40, Descripcion: 'Santa teresa', Subtotal: 800 },
          // {  Cantidad: 21, Descripcion: 'Casique 500', Subtotal: 500 },
          // {  Cantidad: 89, Descripcion: 'Pampero', Subtotal: 200 },
          // {  Cantidad: 38, Descripcion: 'Santa tereza linaje', Subtotal: 987 }
        ],
        total:'',
        nombre:'',
        direccion: '',
        doc: '',
        tipoV: '',
        num : 1,
        monitorData : 0,
        facturaNum: '',
        fechaActual: ''
      }
    },
    created(){
      console.log(this.datosPestanaPagar)
      this.llenarDatos()
      this.obtenerFecha_Factura()
    },
    methods: {
      llenarDatos(){
        console.log(this.datosPestanaPagar.items.length)
        const float = parseFloat(this.datosPestanaPagar.dolar);
        console.log(float)
        for (let i = 0; i < this.datosPestanaPagar.items.length; i++) {
            this.items.push({
              Cantidad: this.datosPestanaPagar.items[i].stock,
              Descripcion: this.datosPestanaPagar.items[i].Nombre,
              Subtotal: (this.datosPestanaPagar.items[i].Precio*this.datosPestanaPagar.items[i].stock*float).toFixed(2)
            })
          }
          console.log(this.datosPestanaPagar)
        this.total = this.datosPestanaPagar.total
        this.nombre = this.datosPestanaPagar.nombre
        this.direccion = this.datosPestanaPagar.direccion
        this.doc = this.datosPestanaPagar.doc
        this.tipoV = this.datosPestanaPagar.tipoV
      },
      async obtenerFecha_Factura(){
        console.log(this.tipoV)
        if(this.tipoV == '----Entrada----'){
          this.num = 0
        }
        try {
            const response = await this.axios.post('http://localhost:3000/api/tiendafisica/factura', {
               tipo: this.num
            });
            console.log(response)
            console.log(response.data[0].resultado)
            this.facturaNum = response.data[0].resultado
          } catch (error) {
            console.error('Error al obtener el cliente natural:', error);
          }
        this.fechaActual = new Date()
        const fechaString = this.fechaActual.toISOString()
        const fecha_cortada_final = fechaString.slice(0, 10);
        this.fechaActual = fecha_cortada_final
        console.log(this.fechaActual)
      },
     
      
    }

  }
</script>