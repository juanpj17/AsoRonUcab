<template>
    <div class="contenedor">
      <br>
      <h1 class="titulos">Nuestros productos</h1>
      <div class="m-5">
        <b-row class="mt-5">
          <b-col cols="12" md="3" v-for="producto in Productos" :key="producto.id">
            <b-card style="max-width: 20rem;margin-left: 10PX;" class="mb-2">
              <img :src="producto.Imagen" class="card-img-top" style="border-bottom: 2px solid var(--vinotinto);">
              <b-card-title ><h3 >{{ producto.Nombre }}</h3></b-card-title>
              <div class="d-flex justify-content-evenly align-items-center mb-2">
                <h5 class="card-subtitle mb-2 mr-5 text-body-secondary" >{{ producto.Presentacion }} lts</h5>
                <h5 class="card-subtitle mb-2 mr-5 text-body-secondary" >{{ producto.GradosA }}</h5>
              </div>
              <h3 class="card-subtitle mb-2 mr-5 text-body-secondary" style="color: var(--verde) !important">{{ producto.Precio }} Bs</h3>
              <!-- Botón desplegable de opciones -->
              <b-button href="#" style="background-color: var(--vinotinto)" @click="verMas(producto.Id)" >Ver más</b-button>
            </b-card>
          </b-col>
        </b-row>
      </div>
    </div>
  </template>
  
  <script>
  
  export default{
    props:{
      tipoUsuario:'',
    },
    mounted(){
    this.tipoUsuario=this.$route.params.tipoUsuario;},
  
      data(){
          return{
              Productos:[
                {
                  Id:1,
                  Nombre:'Santa teresa',
                  Precio:20,
                  Presentacion:'0,75',
                  GradosA: '40°', 
                  Imagen:'https://i.ibb.co/WW33Dwc/gran-reserva-1.jpg'
                }, 
                {
                  Id:2,
                  Nombre:'Santa teresa',
                  Precio:20,
                  Presentacion:'0,75',
                  GradosA: '40°', 
                  Imagen:'https://i.ibb.co/WW33Dwc/gran-reserva-1.jpg'
                }, 
                {
                  Id:3,
                  Nombre:'Santa teresa',
                  Precio:20,
                  Presentacion:'0,75',
                  GradosA: '40°', 
                  Imagen:'https://i.ibb.co/WW33Dwc/gran-reserva-1.jpg'
                },
                {
                  Id:4,
                  Nombre:'Santa teresa',
                  Precio:20,
                  Presentacion:'0,75',
                  GradosA: '40°', 
                  Imagen:'https://i.ibb.co/WW33Dwc/gran-reserva-1.jpg'
                },
                {
                  Id:5,
                  Nombre:'Santa teresa',
                  Precio:20,
                  Presentacion:'0,75',
                  GradosA: '40°', 
                  Imagen:'https://i.ibb.co/WW33Dwc/gran-reserva-1.jpg'
                }
              ]
          }
  
      }, 
         methods:{
          verMas(id){
              this.$router.push('/DetalleProducto/'+this.tipoUsuario+'/'+id);
          },
         },
  
      
  
  }
  </script>
  
  <style  scoped>
  @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,700;0,800;1,400&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&display=swap');
   
   h1{
      font-family: 'Libre Baskerville', serif;
   }
  
   .contenedor{
     background-color: #f1e1e9;
     
   }
  
   h3, h5, h6{
    font-family: 'Georgia', sans-serif;
   }
  
  .card-options {
    position: absolute;
    top: 10px;
    right: 10px;
  }
  
  </style>