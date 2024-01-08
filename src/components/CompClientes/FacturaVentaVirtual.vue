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
        cod_tipo_usuario:''
    },
    data() {
      
      return {
        // Note `isActive` is left out and will not appear in the rendered table
        fields: ['Cantidad','Precio','Descripcion', 'Subtotal', ],
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
        fechaActual: '',
        total:'',
      }
    },
    created(){
      this.carrito()
    },
    methods: {
        carrito(){
          const cod=this.cod_tipo_usuario.split('_')
          const url = 'http://localhost:3000/api/producto/carrito';
          const datos ={cod1: parseInt(cod[0],10) ,cod2:cod[1],}
          this.axios.post(url,datos).then(response => {
               this.llenarCarrito(response.data);
             }).catch(error => {
               console.log(error.response.data); });},
               llenarCarrito(data){
          for (let i = 0; i < data.length; i++) {
            const item = {
            Descripcion: data[i].pro_nombre+' '+data[i].pre_nombre,
              Precio:data[i].precio_unitario,
              Cantidad:parseInt(data[i].cantidad, 10),
              Subtotal:parseInt(data[i].cantidad, 10)*data[i].precio_unitario
            };
            this.total=this.total+item.Cantidad*item.Precio
            this.items.push(item)
            console.log(this.items)
          }
        },
     
        
      
     
      
    }

  }
</script>