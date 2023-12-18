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
           <h1 style="font-family: 'Times New Roman', Times, serif;" >Santa Teresa 1796®</h1>
           <h3 style="color: var(--verde)">26.50$ (incluye IVA)</h3>
           <br>
           <br>
   <b-form-select v-model="selected" :options="options"></b-form-select>
   


<b-container class="bv-example-row">
   <hr>
 <b-row>
   <b-col > <b-form-input v-model="text" placeholder=""></b-form-input></b-col>
   <b-col style="background-color: rgb(220, 69, 69) ;"> <b-button variant="danger" @click="Carrito()">Añadir  al  carrito</b-button></b-col>
 </b-row>
</b-container>
<hr>
   <b-row>
       <b-button  v-b-toggle="'collapse-2'" class="m-1" squared variant="outline-dark" ><b-icon icon="chevron-right" shift-h="-4"  rotate="90"  font-scale = "0.90"></b-icon> Descripcion  </b-button>
       <b-button  v-b-toggle="'collapse-2'" class="m-1" squared variant="outline-dark" ><b-icon icon="chevron-right" shift-h="-4"  rotate="90"  font-scale = "0.90"></b-icon> Ficha tecnica </b-button>
       <!-- Element to collapse -->
           <b-collapse id="collapse-2">
           <b-card>{{ options }}</b-card>
       </b-collapse>
   </b-row>
       </b-card-body>
     </b-col>
   </b-row>
 </b-card>
 

</div>

  
</template>
<script>
import { numeric } from 'vuelidate/lib/validators';

 export default {
  props:{
    idProducto:'',
    tipoUsuario:''
  },
   data() {
     return {
       slides: ["https://i.ibb.co/WW33Dwc/gran-reserva-1.jpg" , "https://picsum.photos/1024/480/?image=51", "https://picsum.photos/1024/480/?image=50", "https://picsum.photos/1024/480/?image=50"],
       selected: null,
       options: [
         { value: null, text: 'Please select an option' },
         { value: 'a', text: 'This is First option' },
         { value: 'b', text: 'Selected Option' },
         { value: { C: '3PO' }, text: 'This is an option with object value' },
         { value: 'd', text: 'This one is disabled', disabled: true }
       ],
       currentSlideIndex: 0,
       items: [
         { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
         { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
         { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
         { age: 38, first_name: 'Jami', last_name: 'Carney' }
       ],
       value:0
       
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
      if(this.tipoUsuario=='$')
        this.$router.push('/PrincipalCarrito')
      else
      this.Advertencia()
   },
   Advertencia(){
  Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Debe Iniciar Sesion como cliente antes de continuar con la compra",
});
   }
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