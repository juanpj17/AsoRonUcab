<template>
  <div style="background-color: var(--fondo);">
      <NavbarAdm v-if="tipoEmpleado" :cod_tipo_usuario="registrado"></NavbarAdm>
      <NavbarCli v-if="tipoCliente"  :tipo_codigo_registro="registrado"> </NavbarCli>

         <b-carousel id="carousel-1"  v-model="slide" :interval="3000" controls indicators background="#ababab" img-width="1024" img-height="300" style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
      <!-- Text slides with image -->
          <b-carousel-slide  v-for="item in arrayImagenes" :key="item.index"
             :img-src=item>
          </b-carousel-slide>
        </b-carousel>
        <!--Ofertas-->
        <b-container>
          <div class="diario"></div>
        </b-container>
        
        <b-container style="margin-top:20px">
              <b-row>
                <b-col cols="4"  v-for="producto in Productos" :key="producto.id">
                  <b-card style="max-width: 50rem;margin-left: 50PX;" class="mb-2">
                    <b-row>
                      <b-col></b-col>
                      <b-col></b-col>
                      <b-col> <b-alert show variant="light" class="oferta">{{ producto.Dto }}%</b-alert></b-col>
                    </b-row>
                    <img :src="producto.Imagen" class="card-img-top" style="border-bottom: 2px solid var(--vinotinto);">
                    <b-card-title><h3>{{ producto.Nombre }}</h3></b-card-title>
                    <div class="d-flex justify-content-evenly align-items-center mb-2">
                      <h5 class="card-subtitle mb-2 mr-5 text-body-secondary" >{{ producto.Presentacion }} lts</h5>
                      <h5 class="card-subtitle mb-2 mr-5 text-body-secondary" >{{ producto.GradosA }}</h5>
                    </div>
                    <div class="d-flex justify-content-evenly align-items-center mb-2">
                      <h3 class="card-subtitle mb-2 mr-5 text-body-secondary previo" style="color: #4f4949  !important;">{{ producto.Precio }} Bs</h3>
                      <h3 class="card-subtitle mb-2 mr-5 text-body-secondary" style="color: var(--verde) !important;">{{ descuento(producto.Dto, producto.Precio)}} Bs</h3>
                    </div>
                    
                    <!-- Botón desplegable de opciones -->
                    <b-button href="#" variant="primary" @click="verMas(producto.Id)">Ver mas</b-button>
                  </b-card>
                </b-col>
              </b-row>
          </b-container>
          <!--PIE DE PAGINA-->
          <footer class="footer-style">
            <div class="column">
              <b-icon icon="people" style="color: var(--dorado)"></b-icon>
              <h4>ASORON C.A</h4>
              <p>Sabores que destilan pasión</p>
              <p>J-2531343012</p>
              <p>La compañía de Ron más grande de Venezuela</p>
            </div>
            <div class="divider"></div>
            <div class="column">
              <b-icon icon="shop" style="color: var(--dorado)"></b-icon>
              <h4>Compra sin moverte</h4>
              <p>Encuentra lo que necesitas, coordina el pago y la entrega. Es fácil y rápido. ¡Todos podemos hacerlo!</p>
            </div>
            <div class="divider"></div>
            <div class="column">
              <b-icon icon="truck" style="color: var(--dorado)"></b-icon>
              <h4>El mejor Ron</h4>
              <p>La mayor variedad de rones al mejor precio</p>
              <p>en todas las presentaciones que te imagines.</p>
            </div>
          </footer>

  </div>
</template>

<style>

.footer-style{
  
  margin-top: 10px;
  color: white;
}

/*no agarra la clase 'principal'*/
.header{
  position: sticky !important;
  z-index: 100 !important;
  top: 0 !important;
}

.img-fluid {
  height: 300px !important;
}

.previo{
  text-decoration: line-through;
  font-size: 25px !important;
}

.btn-primary {
  background-color: var(--vinotinto) !important;
  border-color: var(--vinotinto) !important;
  background-color: var(--dorado) !important;
  border-color: var(--dorado) !important;
}


.carousel-control-prev, .carousel-control-next {
  opacity: -1.1 !important;
}

.footer-style {
  align-items: center;
  background-color: var(--vinotinto);
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.column {
  flex: 1;
}

.divider {
  width: 1px;
  height: 200px; 
  background-color: #ccc; 
  margin: 0 10px; 
}

.oferta{
  color: red !important; 
  border: transparent !important;
  height: 2rem !important;
}

.diario{
  background-image: url('../../assets/DiarioRonero.png'); 
  background-size: cover;
  padding: 25px 0; 
  margin-top: 10px;
  height: 99px;
}

/*iconos más grandes*/
.b-icon.bi {
  font-size: 45px !important;
}

p{
  margin-bottom: 0 !important;
}

</style>

<script>

import NavbarCli from '@/components/CompClientes/Navbar.vue'
import NavbarAdm from '@/components/CompAdm/Navbar.vue'

import { required } from 'vuelidate/lib/validators';


  export default {
    props:{
      registrado:''
    },
    components:{
      NavbarCli,NavbarAdm
    },
    created(){
      this.obtenerOfertas()
    },
  mounted(){
 this.registrado=this.$route.params.registrado
 console.log(this.registrado)
 this.tipoCliente=this.registrado.includes('Cliente')  
 this.tipoEmpleado=this.registrado.includes('Empleado')
 
  },
    
    data() {
      return {
        tipoCliente:'',
        tipoEmpleado:'',
        slide: 0,
        sliding: null,
        arrayImagenes:[
          require('../../assets/carrusel-img/ron.jpg'),
          require('../../assets/carrusel-img/ron1.jpg'),
          require('../../assets/carrusel-img/ron2.jpg'),
          require('../../assets/carrusel-img/ron3.jpeg'),
          require('../../assets/carrusel-img/ron5.jpg'),
          require('../../assets/carrusel-img/ron6.jpg'),
          require('../../assets/carrusel-img/ron7.jpg')
        ],
       
        Productos:[
                // {
                //   Id:1,
                //   Nombre:'Santa teresa',
                //   Precio:20,
                //   Presentacion:'0,75',
                //   GradosA: '40°', 
                //   Imagen:'https://i.ibb.co/WW33Dwc/gran-reserva-1.jpg',
                //   Dto: 7
                // }, 
                // {
                //   Id:2,
                //   Nombre:'Santa teresa',
                //   Precio:20,
                //   Presentacion:'0,75',
                //   GradosA: '40°', 
                //   Imagen:'https://i.ibb.co/WW33Dwc/gran-reserva-1.jpg',
                //   Dto:5,
                // }, 
                // {
                //   Id:3,
                //   Nombre:'Santa teresa',
                //   Precio:20,
                //   Presentacion:'0,75',
                //   GradosA: '40°', 
                //   Imagen:'https://i.ibb.co/WW33Dwc/gran-reserva-1.jpg',
                //   Dto:10,
                // },
                // {
                //   Id:4,
                //   Nombre:'Santa teresa',
                //   Precio:20,
                //   Presentacion:'0,75',
                //   GradosA: '40°', 
                //   Imagen:'https://i.ibb.co/WW33Dwc/gran-reserva-1.jpg',
                //   Dto: 25,
                // },
                // {
                //   Id:5,
                //   Nombre:'Santa teresa',
                //   Precio:20,
                //   Presentacion:'0,75',
                //   GradosA: '40°', 
                //   Imagen:'https://i.ibb.co/WW33Dwc/gran-reserva-1.jpg',
                //   Dto:10
                // }
              ]
      }
    },
    
    
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      },
      descuento(dto, precio){
        const descuentoCalculado = precio - ((dto / 100) * precio);
        return descuentoCalculado.toFixed(2);
      },
      verMas(id){
              this.$router.push('/DetalleProducto/'+'$'+'/'+id);
      },
      async obtenerOfertas(){
        const url = 'http://localhost:3000/api/diario';
        await this.axios
        .get(url)
        .then((response) => {
          this.Productos = response.data.map((producto) => {
            const precio = parseFloat(producto.inv_vir_precio)
            const descuento = parseInt(producto.ofe_valor, 10)
            return {
              Id:producto.pro_codigo,
              Precio:precio,
              Presentacion:producto.bot_capacidad,
              GradosA: producto.pro_grados_alcohol+'°', 
              Imagen:producto.ima_url,
              Dto:descuento,
              Nombre:producto.pro_nombre,
             
            };
          });
         console.log(response.data)
        })
        .catch((error) => {
          console.log(error);
        });
      }
    }
  }
</script>
