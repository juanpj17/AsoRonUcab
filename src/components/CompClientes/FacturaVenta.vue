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
              <h6 style="text-align: left;">RIF: J-315531182</h6>
          </b-col>
          <b-col></b-col>
          <b-col></b-col>
      </b-row>
      <b-row>
          <b-col><h4 style="font-weight: bold; text-align: left;">A</h4></b-col>
          <b-col></b-col>
          <b-col><h5 style="font-weight: bold;">N de recibo:0001</h5>
          <h5 style="font-weight: bold;">Fecha: 12/12/2023</h5> </b-col>
      </b-row>
      <b-row>
          <b-col>
              <H6 style="text-align: left;">Nombre:Gabriela Martinez</H6>
              <h6 style="text-align: left;" >CI: 29919287</h6>
              <h6 style="text-align: left;">Direccion: Edif Toscana, Parroquia San Agustín en el Municipio Libertador.</h6>
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
    data() {
      return {
        // Note `isActive` is left out and will not appear in the rendered table
        fields: ['Cantidad','Descripcion', 'Subtotal', ],
        items: [
          {  Cantidad: 40, Descripcion: 'Santa teresa', Subtotal: 800 },
          {  Cantidad: 21, Descripcion: 'Casique 500', Subtotal: 500 },
          {  Cantidad: 89, Descripcion: 'Pampero', Subtotal: 200 },
          {  Cantidad: 38, Descripcion: 'Santa tereza linaje', Subtotal: 987 }
        ],
        total:1500,
        
      }
    }
  }
</script>