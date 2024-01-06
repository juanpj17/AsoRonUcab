<template>
    <div class="contenedor">
      <b-container class="bv-example-row">
        <h1>Carrito <b-icon icon="cart4" animation="cylon" font-scale="2"></b-icon></h1>
        <b-row>
          <b-col cols="12" md="12">
            <br>
            <b-card class="mt-5" style="max-width: 1200px;" bg-variant="info" text-variant="white">
              <b-card-title><h2>Total 100 Bs</h2></b-card-title>
              <b-card-text><h5>Carrito de articulos</h5></b-card-text>
            </b-card>
          </b-col>
          <b-col cols="12" md="12">
            <b-card no-body class="overflow-hidden" style="max-width: 1200px;" border-variant="primary">
              <b-row no-gutters v-for="producto in orden" :key="producto.id">
                <b-col md="6" cols="12">
                  <b-card-img :src="producto.nombreImagen" alt="Image" class="rounded-0"></b-card-img>
                </b-col>
                <b-col md="6">
                  <b-card-body>
                    <b-card-title><h1>{{ producto.nombre }}</h1></b-card-title>
                    <b-card-text><h4>{{ producto.precio }} Bs c/u</h4></b-card-text>
                    <div>
                      <b-form-spinbutton id="sb-inline" inline size="lg" v-model="producto.cantidad"></b-form-spinbutton>
                      <b-button variant="link"><h4>Eliminar</h4></b-button>
                    </div>
                  </b-card-body>
                </b-col>
                <hr>
              </b-row>
            </b-card>
          </b-col>
          <b-col cols="12" md="12">
            <b-card style="max-width: 1200px;" border-variant="primary">
              <b-button variant="primary" size="lg" @click="Pagar()" >Ir a la caja</b-button>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </template>
  
  <script>
  
  
  export default {
      props:{
        cod_tipo_usuario:''
      },
  
  
      data() {
          return {

          orden:[{idProducto:1,nombre:'Producto1',precio:22,nombreImagen: 'https://i.ibb.co/WW33Dwc/gran-reserva-1.jpg',cantidad:2,total:0},
                {idProducto:1,nombre:'Producto2',precio:22,nombreImagen: 'https://i.ibb.co/WW33Dwc/gran-reserva-1.jpg',cantidad:2,total:0}]
          };

      },
      mounted(){
       this.cod_tipo_usuario=this.$route.params.cod_tipo_usuario;
      },
  
      
  
      methods: {
         
          contar(){
            return this.cont++
          },
          Pagar(){
            this.$router.push('/PrincipalPago/'+this.cod_tipo_usuario+'/'+'Cliente')
          }
  
          
         
  
  
      },
  };
  </script>
  
  <style  scoped>
      @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,700;0,800;1,400&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&display=swap');
   
      h1{
          font-family: 'Libre Baskerville', serif;
      }
      .contenedor{
          background-color:#Fff;
      }
      h3{
          font-family: 'Libre Baskerville', serif;
      }
      h6{
      font-family: 'Nunito', sans-serif;
      }
      h5{
          font-family: 'Nunito', sans-serif;
      }
      .titulo{
          color: #090;
      }
  </style>