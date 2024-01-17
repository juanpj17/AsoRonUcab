<template>
  <div>
 <b-card no-body class="overflow-hidden" style="border: none; max-width: 2300px; margin-left: 30px; margin-right: 30px; margin-top: 50px; padding-top: 50px; padding-bottom: 30px; " >
   <b-row no-gutters>
     <b-col md="6">
       <div class="carousel">
       <b-button @click="prevSlide" class="custom-btn-v"><b-icon icon="arrow-left"></b-icon></b-button>
       <div class="slide-container">
         <transition-group name="slide" tag="div">
           <div :key="index" v-for="(slide, index) in slides" class="slide" v-show="currentSlideIndex === index">
             <img :src="slide">
           </div>
         </transition-group>
       </div>
       <b-button @click="nextSlide" class="custom-btn-v"><b-icon icon="arrow-right"></b-icon></b-button>
     </div>
     </b-col>

     <b-col md="6">
       <b-card-body >
           <h1 style="font-family: 'Times New Roman', Times, serif;" >{{ nombre }}</h1>
           <h3 style="color: var(--verde)"> {{ precio }}$ (incluye IVA)</h3>
           <p style="color: var(--verde)">Varia por presentacion </p>
           <br>
           <br>
   <b-form-select v-model="presentacion" :options="options"></b-form-select>
    <b-button @click="ver_Ficha()">Ver Ficha</b-button>
   


<b-container class="bv-example-row">
   <hr>
 <b-row>
   <b-col > <b-form-input v-model="cantidad" placeholder=""></b-form-input></b-col>
   <b-col style="background-color: rgb(220, 69, 69) ;"> <b-button variant="danger" @click="CrearOrden()">Añadir  al  carrito</b-button></b-col>
 </b-row>
</b-container>
<hr>
   <b-row>
       <b-button  v-b-toggle="'collapse-2'" class="m-1" squared variant="outline-dark" ><b-icon icon="chevron-right" shift-h="-4"  rotate="90"  font-scale = "0.90"></b-icon> Descripcion  </b-button>
       <!-- Element to collapse -->
           <b-collapse id="collapse-2">
           <b-card style="text-align: left;">
            <b-card-text>
             Descripcion: {{ descripcion }}
            </b-card-text>
            <b-card-text>
              Grados de Alcohol: {{ grados }}
            </b-card-text>
            <b-card-text>
              Tipo: {{ tipo }}
            </b-card-text>
            <b-card-text>
              Categoria: {{ categoria }}
            </b-card-text>
            <b-card-text>
              Variedad: {{ variedad }}
            </b-card-text>
            <b-card-text>
              Origen: {{ direccion }}
            </b-card-text>
           
           </b-card>
       </b-collapse>
   </b-row>
       </b-card-body>
     </b-col>
   </b-row>
 </b-card>
 <div v-if="ficha==true">
  
    <FichaVue></FichaVue>
  
 </div>

</div>

  
</template>
<script>
import { numeric } from 'vuelidate/lib/validators';
import FichaVue from './Comunes/Ficha.vue';

 export default {
  components:{FichaVue},
  props:{
    idProducto:'',
    tipoUsuario:''
  },
  created()
{ this.obtenerDetalle()
  this.CategoriaVariedadDireccion()

},   data() {
     return {
       slides: [],
       presentacion:'null',
       options: [],
       currentSlideIndex: 0,
       value:0,
       nombre:'',
       descripcion:'',
       grados:'',
       tipo:'',
       categoria:'',
       direccion:'',
       variedad:'',
       precio:'',
       cantidad:0,
       Ficha:false
     };
   },
   methods: {
     nextSlide() {
       this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
     },
     prevSlide() {
       this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
     },
     Carrito(){
        this.$router.push('/PrincipalCarrito/'+ this.tipoUsuario)
     
   },
   ver_Ficha(){
          this.$router.push('/Ficha/'+this.idProducto+'/'+this.presentacion)
        },
   
   async obtenerDetalle() {
    console.log(this.idProducto)
         console.log(parseInt(this.idProducto, 10))
          const data={
            id:parseInt(this.idProducto,10)
          }
            const url = 'http://localhost:3000/api/producto/productoId';
            await this.axios.post(url,data).then(response => {
              this.nombre = response.data[0].nombre;
              this.descripcion=response.data[0].descripcion;
              this.grados=response.data[0].grados_alcohol;
              this.tipo = response.data[0].tipo;
              this.slides.push(response.data[0].url)
              this.precio=response.data[0].precio;
              this.llenarPresentaciones(response.data)
            }).catch(error => {
              console.log(error);
            });
        },
        llenarPresentaciones(data){
          for (let i = 0; i < data.length; i++) {
            const item = {
             value: data[i].codigo_presentacion,
             text: data[i].capacidad,
            };
            this.options.push(item)
          }
        },
        async CategoriaVariedadDireccion() {
         console.log(parseInt(this.idProducto, 10))
          const data={
            id:parseInt(this.idProducto,10)
          }
            const url = 'http://localhost:3000/api/producto/detalle';
            await this.axios.post(url,data).then(response => {
             this.variedad=response.data[0].variedad;
             this.categoria=response.data[0].categoria;
             this.direccion=response.data[0].direccion;

            }).catch(error => {
              console.log(error);
            });
        },
       
        async CrearOrden() {
          console.log('estas en crear oren')
          const aux=this.tipoUsuario.split('_')
         console.log(parseInt(aux[0], 10))
         console.log(parseInt(aux[1], 10))
         console.log(this.presentacion)
          const data={
            cod1:parseInt(aux[0],10),
            cod2:aux[1],
            presentacion:this.presentacion,
            cantidad:this.cantidad
          }
            const url = 'http://localhost:3000/api/producto/crearOrden';
            await this.axios.post(url,data).then(response => {
             console.log(response.data)
             console.log('crea la orden')
            }).catch(error => {
              console.log(error);
            });
        },
       





 }}
 </script>
 
 <style>
 .carousel {
   display: flex;
   justify-content: left;
   align-items: center;
 }
 
 .slide-container {
   width: 1000px;
   height: 500px;
   overflow: hidden;
 }
 
 .slide {
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 100%;
   transition: all 0.5s;
 }
 
 .slide-enter-active,
 .slide-leave-active {
   transition: all 0.5s;
 }
 
 .slide-enter,
 .slide-leave-to {
   opacity: 0;
 }

 .custom-btn-v{
  color: var(--vinotinto) !important;
  background-color: white !important;
  border-color: var(--vinotinto) !important;
}

.custom-btn-v:hover {
  color: white !important;
  background-color: var(--vinotinto) !important;
  border-color: var(--vinotinto) !important;
}
 
 </style>