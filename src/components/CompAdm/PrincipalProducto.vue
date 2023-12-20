<template>
    <div class="contenedor">
      <br>
      <h1 class="titulos">Nuestros productos</h1>
     
      <b-button block variant="primary" @click="RegistrarProducto()">Registrar nuevo producto</b-button>
      <b-row class="mt-5">
        <b-col cols="12" md="3" v-for="producto in Productos" :key="producto.Id">
          <b-card style="max-width: 20rem;margin-left: 10PX;" class="mb-2">
            <img :src="producto.Imagen" class="card-img-top" style="border-bottom: 2px solid var(--vinotinto);">
            <b-card-title><h3>{{ producto.Nombre }}</h3></b-card-title>
            <h5 class="card-subtitle mb-2 mr-5 text-body-secondary">{{ producto.Presentacion }}</h5>
            <h5 class="card-subtitle mb-2 mr-5 text-body-secondary">{{ producto.Precio }} Bs</h5>
            <!-- Botón desplegable de opciones -->
            <b-dropdown class="card-options" right text="Opciones" variant="outline-secondary" >
              <template #button-content style="height: 85%; " >
                <b-icon icon="gear-fill" ></b-icon>
              </template>
              <b-dropdown-item @click="RegistrarProducto(producto.Id)">Modificar</b-dropdown-item>
              <b-dropdown-item >Eliminar</b-dropdown-item>
              <b-dropdown-item @click="RegistrarPremio()" >Agregar Premio</b-dropdown-item>
              <b-dropdown-item @click="RegistrarNotaCata()">Agregar nota de cata</b-dropdown-item>

            </b-dropdown>
            <b-button href="#" variant="primary" @click="verMas()" style="background-color: var(--vinotinto) !important; border-color: var(--vinotinto) !important;">Ver más</b-button>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </template>
  
  <script>
  
  export default{

  
      data(){
          return{
              Productos:[{ Id:1,Nombre:'Santa teresa',Precio:20,Presentacion:'0,75',Imagen:'https://i.ibb.co/WW33Dwc/gran-reserva-1.jpg'}]
          }
  
      }, 
         methods:{
          RegistrarProducto(id) {
            this.$router.push('/RegistrarProductoView/'+id);
          },
          RegistrarPremio(){
            this.$router.push('/RegistrarPremio/');
          },
          RegistrarNotaCata(){
            this.$router.push('/NotaCata/');
          },
              
          verMas(){
              this.$router.push('/DetalleProducto');
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
     background-color:#F4EFEE;
   }
  
   h3, h5, h6{
    font-family: 'Nunito', sans-serif;
   }
  
  .card-options {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  .icono{
    color: var(--dorado);
  }

  .icono:hover{
    color: white
  }
  
  </style>