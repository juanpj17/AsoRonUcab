<template>
  <div class="contenedor">
    <br />
    <h1 class="titulos">Nuestros productos</h1>

    <b-button block variant="primary" @click="RegistrarProducto('*')">Registrar nuevo producto</b-button>
    <b-row class="mt-5">
      <b-col cols="12" md="3" v-for="producto in Productos" :key="producto.Id">
        <b-card style="max-width: 20rem;margin-left: 10PX;" class="mb-2">
          <img :src="producto.Imagen" class="card-img-top" style="border-bottom: 2px solid var(--vinotinto);">
          <b-card-title><h3>{{ producto.Nombre }}</h3></b-card-title>
          <h5 class="card-subtitle mb-2 mr-5 text-body-secondary">{{ producto.Presentacion }}</h5>
          <h5 class="card-subtitle mb-2 mr-5 text-body-secondary">{{ producto.Precio }} Bs</h5>
          <b-dropdown class="card-options" right text="Opciones" variant="outline-secondary">
            <template #button-content>
              <b-icon icon="gear-fill"></b-icon>
            </template>
            <b-dropdown-item @click="RegistrarProducto(producto.Id)">Modificar</b-dropdown-item>
            <b-dropdown-item @click="EliminarProducto(producto.Id)">Eliminar</b-dropdown-item>
            <b-dropdown-item @click="RegistrarPremio()">Agregar Premio</b-dropdown-item>
            <b-dropdown-item @click="RegistrarNotaCata(producto.Id)">Agregar nota de cata</b-dropdown-item>
            <b-dropdown-item v-b-modal.modal-center @click="mostrar(producto.Id)">Añadir a Dirario Ronero</b-dropdown-item>
          </b-dropdown>
          <b-button
            href="#"
            variant="primary"
            @click="verMas(producto)"
            style="background-color: var(--vinotinto) !important; border-color: var(--vinotinto) !important;"
          >
            Ver más
          </b-button>
        </b-card>
      </b-col>
    </b-row>
    <!-- <div > -->
    <b-modal id="modal-center" centered title="Descuento a aplicar" v-if="modal">
      <b-input-group prepend="Descuento" class="mt-3">
           <b-form-input v-model="dcto"></b-form-input>
             <b-input-group-append>
                <b-button variant="info" @click="agregarDR()">Aceptar</b-button>
            </b-input-group-append>
          </b-input-group>
    </b-modal>
  <!-- </div> -->
  </div>
</template>

<script>
export default {
  props:{
   cod_tipo_usuario:''
  },
  data() {
    return {
      Productos: [],
      modal: false,
      dcto: 0,
      id_actual: 'andi'
    };
  },
  mounted(){
    this.cod_tipo_usuario=this.$route.params.cod_tipo_usuario;},

  methods: {
    async RegistrarProducto(id) {
      this.$router.push('/RegistrarProductoView/' + id +'/'+this.cod_tipo_usuario);
    },
    //RegistrarPremio() {
     // this.$router.push('/RegistrarPremio/');
   // },
    RegistrarNotaCata(id) {
      this.$router.push('/NotaCata/' + id +'/'+this.cod_tipo_usuario);
    },
    verMas(producto) {
      this.$router.push({ path: '/DetalleProducto', query: { producto: JSON.stringify(producto) } });
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

    async EliminarProducto(id) {
      const url = 'http://localhost:3000/api/producto/' + id;
      await this.axios
        .delete(url)
        .then((response) => {

          //console.log(response);
          this.insertarAuditoria('Eliminar')
          this.ObtenerProductos();
        })
        .catch((error) => {
          console.log(error);
        });
    },
      async  insertarAuditoria(Accion){
            const dato={
              cod_tipo_usuario:this.cod_tipo_usuario,accion:Accion,tabla:'Producto'}
            const url = 'http://localhost:3000/api/usuario/insertarAuditoria';
            await this.axios.post(url,dato).then(response => {
            console.log('auditoria realizada')
            }).catch(error => {
              console.log(error);
            });
      },
      agregarDiarioRonero(id){
        console.log('se llama')
        console.log(id)
        // this.mostrar()
        // if(id != 'andi'){
        //   this.agregarDR(id)
        // }
      
      },
      agregarDR(){
        console.log(this.id_actual)
        if(this.id_actual != 'andi'){
          this.agregarOferta()
        }
        this.mostrar('andi')
      },
      mostrar(id){
        this.id_actual = id
        console.log(this.id_actual)
        if(this.modal == false){
          this.modal = true
        }else{
          this.modal=false
          // this.agregarDiarioRonero(this.id_actual)
        }
        
      },
      async agregarOferta(){
        console.log(this.dcto, this.id_actual)
        try {
            console.log('aca')
            const response = await this.axios.post('http://localhost:3000/api/diario', {
               descuento: this.dcto,
               producto: this.id_actual 
            
              });
            const result = response.data;
            console.log(result);
          } catch (error) {
            console.error('Error al obtener el cliente natural:', error);
          }
      }

  

  },

  created() {
    this.ObtenerProductos();
  },
  
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,700;0,800;1,400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&display=swap');

h1 {
  font-family: 'Libre Baskerville', serif;
}

.contenedor {
  background-color: #f4efee;
}

h3,
h5,
h6 {
  font-family: 'Nunito', sans-serif;
}

.card-options {
  position: absolute;
  top: 10px;
  right: 10px;
}

.icono {
  color: var(--dorado);
}

.icono:hover {
  color: white;
}
</style>