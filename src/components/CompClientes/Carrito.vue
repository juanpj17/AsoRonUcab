<template>
    <div class="contenedor">
      <b-container class="bv-example-row">
        <h1>Carrito <b-icon icon="cart4" animation="cylon" font-scale="2"></b-icon></h1>
        <b-row>
          <b-col cols="12" md="12">
            <br>
            <b-card class="mt-5" style="max-width: 1200px;" bg-variant="info" text-variant="white">
              <b-card-title><h2>Total {{ total }} Bs</h2></b-card-title>
              <b-card-text><h5>Carrito de articulos</h5></b-card-text>
            </b-card>
          </b-col>
          <b-col cols="12" md="12">
            <b-card no-body class="overflow-hidden" style="max-width: 1200px;" border-variant="primary">
              <b-row no-gutters v-for="producto in orden" :key="producto.idPresentacion">
                <b-col md="6">
                  <b-card-body>
                    <b-card-title><h1>{{ producto.NombreProducto }}</h1></b-card-title>
                    <b-card-text><h4>{{ producto.NombrePresentacion }}</h4></b-card-text>
                    <b-card-text><h4>{{ producto.precio }}  Bs c/u</h4></b-card-text>
                    <div>
                      <b-form-spinbutton id="sb-inline" inline size="lg" v-model="producto.cantidad"></b-form-spinbutton>
                      <b-button variant="link"><h4>Eliminar</h4></b-button>
                    </div>
                  </b-card-body>
                </b-col>
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

          orden:[],
          total:'',
          };

      },
      mounted(){
       this.cod_tipo_usuario=this.$route.params.cod_tipo_usuario;
      },
      created(){
        this.carrito()
      },
  
      
  
      methods: {
         
          contar(){
            return this.cont++
          },
          Pagar(){
            this.$router.push('/PrincipalPago/'+this.cod_tipo_usuario+'/'+'Cliente_'+this.orden[0].idVenta+'_'+this.total)
          },
          carrito(){
          const cod=this.cod_tipo_usuario.split('_')
          const url = 'http://localhost:3000/api/producto/carrito';
          const datos ={cod1: parseInt(cod[0],10) ,cod2:cod[1], estatus:3}
          this.axios.post(url,datos).then(response => {
               this.llenarCarrito(response.data);
             }).catch(error => {
               console.log(error.response.data); });},

          llenarCarrito(data){
          for (let i = 0; i < data.length; i++) {
            const item = {
              idVenta: data[i].codigo_venta,
              idPresentacion: data[i].codigo_presentacion,
              NombreProducto: data[i].pro_nombre,
              NombrePresentacion:data[i].pre_nombre,
              precio:data[i].precio_unitario,
              cantidad:parseInt(data[i].cantidad, 10),
            };
            this.total=this.total+item.cantidad*item.precio
            this.orden.push(item)
            console.log(this.items)
          }
        },
          
         
  
  
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