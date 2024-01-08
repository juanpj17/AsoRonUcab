<template>
  <div class="contenedor">
    <br />
    <h1 class="titulos">Nuestros productos</h1>

    <b-row class="mt-5">
      <b-col cols="12" md="3" v-for="producto in Productos" :key="producto.Id">
        <b-card style="max-width: 20rem;margin-left: 10PX;" class="mb-2">
          <img :src="producto.Imagen" class="card-img-top" style="border-bottom: 2px solid var(--vinotinto);">
          <b-card-title><h3>{{ producto.Nombre }}</h3></b-card-title>
          <h5 class="card-subtitle mb-2 mr-5 text-body-secondary">{{ producto.Presentacion }}</h5>
          <h5 class="card-subtitle mb-2 mr-5 text-body-secondary">{{ producto.Precio }} Bs</h5>
          
          <b-button
            href="#"
            variant="primary"
            @click="verMas(producto.Id)"
            style="background-color: var(--vinotinto) !important; border-color: var(--vinotinto) !important;"
          >
            Ver más
          </b-button>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
  <script>
  
  export default{
    props:{
      tipoUsuario:'',
    },
    mounted(){
    this.tipoUsuario=this.$route.params.tipoUsuario;},
    created() {
    this.ObtenerProductos();
  },
  
      data(){
          return{
              Productos:[]
          }
  
      }, 
         methods:{
          verMas(id){
              this.$router.push('/DetalleProducto/'+this.tipoUsuario+'/'+id);
          },
          async ObtenerProductos() {
      const url = 'http://localhost:3000/api/producto';
      await this.axios
        .get(url)
        .then((response) => {
          this.Productos = response.data.map((producto) => {
            return {
              Id: producto.codigo,
              Nombre: producto.nombre,
              Precio: parseInt(producto.precio),
              Presentacion: parseInt(producto.capacidad, 10)/1000 + ' lts', 
              Imagen: producto.url, 
            };
          });
          console.log(this.Productos)
          this.insertarAuditoria('Consultar')
        })
        .catch((error) => {
          console.log(error);
        });
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