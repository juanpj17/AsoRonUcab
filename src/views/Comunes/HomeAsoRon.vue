<template>
  <div>
    <NavbarAdm v-if="registrado=='%'"></NavbarAdm>
    <NavbarCli v-if="registrado=='$'"> </NavbarCli>
         <b-carousel id="carousel-1"  v-model="slide" :interval="4000" controls indicators background="#ababab" img-width="1024" img-height="300" style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
      <!-- Text slides with image -->
          <b-carousel-slide  v-for="(item, index) in arrayImagenes" :key="index"
             :img-src=item>
          </b-carousel-slide>
        </b-carousel>
        <!--Ofertas-->
        <b-container>
          <b-row>
            <b-col><h3 style="color:#833440;margin-top:10px"> ~NUESTRAS OFERTAS~</h3></b-col>
          </b-row>
        </b-container>
        
          <b-container style="margin-top:20px">
              <b-row>
                <b-col cols="4"  v-for="producto in Productos" :key="producto.id">
          <b-card style="max-width: 50rem;margin-left: 50PX;" class="mb-2">
            <b-row>
              <b-col></b-col>
              <b-col></b-col>
              <b-col> <b-alert show variant="light">-10%</b-alert></b-col>
            </b-row>
            <img :src="producto.Imagen" class="card-img-top">
            <b-card-title><h3>{{ producto.Nombre }}</h3></b-card-title>
            <h5 class="card-subtitle mb-2 mr-5 text-body-secondary">{{ producto.Precio }} Bs</h5>
            <!-- Botón desplegable de opciones -->
            <b-button href="#" variant="primary" >Ver mas</b-button>
          </b-card>
        </b-col>
              </b-row>
          </b-container>
          <!--PIE DE PAGINA-->
          <footer style="background-color:#833440; margin-top:10px">
            <h4>ASORONUCAB CA</h4>
            <h5>J-314561282</h5>
            <h6>Caracas,Municipio Librtador-Parroquia Antimano, Edificio Cincuentenario</h6>
          </footer>

  </div>
</template>

<script>

import NavbarCli from '@/components/CompClientes/Navbar.vue'
import NavbarAdm from '@/components/CompAdm/Navbar.vue'

  export default {
    props:{
      registrado:''
    },
    components:{
      NavbarCli,NavbarAdm
    },

  mounted(){
 this.registrado=this.$route.params.registrado
  },
    
    data() {
      return {
        tipo:'',
        slide: 0,
        sliding: null,
        arrayImagenes:['https://i.ibb.co/CnvGVzR/portafolio-santa-teresa.jpg','https://picsum.photos/1024/300/?image=54','https://picsum.photos/1024/300/?image=20'],
        Productos:[{ Id:1,Nombre:'Santa teresa',Precio:20,Presentacion:'0,75',Imagen:'https://i.ibb.co/WW33Dwc/gran-reserva-1.jpg'},{ Id:1,Nombre:'Santa teresa',Precio:20,Presentacion:'0,75',Imagen:'https://i.ibb.co/WW33Dwc/gran-reserva-1.jpg'},
        { Id:1,Nombre:'Santa teresa',Precio:20,Presentacion:'0,75',Imagen:'https://i.ibb.co/WW33Dwc/gran-reserva-1.jpg'}]
        
      }
    },
    
    
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>
