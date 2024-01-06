<template>
  
  <section class="container" style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; ">
      <div  style="background-color: var(--carne)" class="row content d-flex justify-content-center align-items-center" >
          <div class="col-md-12  mr-5 principal mb-4" style="z-index: 50;">
              <div class="box  bg-white p-4 ">    
              
                <form  class="mb-3">
                  <div class="row">
                    <div class=" col form-group form-floating mb-3">
                        <input type="text" id="nombre" class="form-control rounded-2 altura" placeholder="jugo de naranja" v-model="nombre" />
                        <label for="nombre">Nombre</label>
                        <b-form-text  v-if="!$v.nombre.required" class="form-floating mb-3" text-variant="danger">Debe llenar el campo</b-form-text > 
                    </div>
                                        <div  class=" col form-group form-floating mb-3">
                        <input type="text" id="gradosa"   class="form-control rounded-2 altura" placeholder="precio" v-model="gradosa"  />
                        <label for="precio">Grados de alcohol</label>
                        <b-form-text  v-if="!$v.gradosa.required" class="form-floating mb-3" text-variant="danger">Debe llenar el campo</b-form-text > 
                        <b-form-text  v-if="!$v.gradosa.numeric" class="form-floating mb-3" text-variant="danger">Formato invalido, solo se aceptan numeros positivos</b-form-text > 
                        <b-form-text  v-if="!$v.gradosa.between&&this.precio=='0'" class="form-floating mb-3" text-variant="danger">El precio debe ser mayor que 0 bs </b-form-text > 
                    </div>
                  </div>
                  <div class="row">

                    <b-container style="margin-bottom: 15px;">
                                            <div class=" col form-group form-floating mb-3">
                        <input type="text" id="descripcion"   class="form-control rounded-2 altura" placeholder="descripcion" v-model="descripcion"/>
                        <label for="descripcion">Descripción</label>
                        <b-form-text  v-if="!$v.descripcion.required" class="form-floating mb-3" text-variant="danger">Debe llenar el campo</b-form-text > 
                    </div>
                      <b-row>
                        <b-col cols="6">
                          <label>Proveedor</label>
                        </b-col>
                        <b-col cols="6">
                          <label>Tipo de ron</label>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col cols="6">
                          <b-form-select class="custom-select mr-sm-2 form-control altura" id="per-page-select"  placeholder="Proveedor"  v-model="proveedor" :options="cod_proveedor"></b-form-select>
                        </b-col>
                        <b-col cols="6">
                          <b-form-select class="custom-select mr-sm-2 form-control altura" id="per-page-select"  placeholder="tipo"  v-model="tipo" :options="cod_tipo"></b-form-select>
                        </b-col>
                      </b-row>
                    </b-container>
                     
                  </div>
                    <b-container>
                      <b-row>
                        <b-col cols="6">
                          <label>Añejamiento</label>
                        </b-col>
                        <b-col cols="6">
                          <label>Parroquia</label>
                        </b-col>
                      </b-row>
                      <b-row>
                    <b-col cols="6">
                        <b-form-select class="custom-select mr-sm-2 form-control altura" v-model="añejamiento" :options="cod_añejamiento"></b-form-select>
                    </b-col>
                    <b-col cols="6">
                        <b-form-select   class="custom-select mr-sm-2  form-control " v-model="parroquia" :options="parroquias"> </b-form-select>  
                    </b-col>
                    </b-row>
                      <b-row>
                        <b-col cols="6">
                          <label>Categoria</label>
                        </b-col>
                        <b-col cols="6">
                          <label>Variedad</label>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col cols="6">
                          <b-form-select class="custom-select mr-sm-2 form-control altura" id="per-page-select" v-model="categoria" :options="cod_categorias"></b-form-select>
                        </b-col>
                        <b-col cols="6">
                          <b-form-select class="custom-select mr-sm-2 form-control altura" id="per-page-select" v-model="variedad" :options="cod_variedad"></b-form-select>
                        </b-col>
                      </b-row>
                    </b-container>

                  <b-container>
                    <b-row>
                        <b-col cols="11"><p style="text-align: left;">Selecciona los sabores</p></b-col>
                        <b-col cols="1" style="margin-bottom: 25px;">   <b-button @click="registrarSabor()" style="border-radius: 110%;"  variant="light">  <b-icon icon="plus-circle" scale="2" style="height: 20px !important; color: var(--verde) "></b-icon></b-button></b-col>
                      </b-row>
                  </b-container> 
                  <div v-for="(elemento, index) in sabor" :key="index">
                    <b-container style="margin-bottom: 10px;">
                      <b-row>
                        <b-col cols="11">
                            <b-form-select class="custom-select mr-sm-2 form-control altura" id="per-page-select"  v-model="elemento.valor" :options="cod_sabores"></b-form-select>
                        </b-col>
                        <b-col cols="1" ><b-button @click="eliminarSaborSeleccionado(index)"  variant="light"><b-icon icon="trash" style="color: #df5b5b"></b-icon></b-button></b-col>
                      </b-row>
                    </b-container>
                  </div>
                  
                  <b-container>
                    <b-row>
                        
                        <b-col cols="11"><p style="text-align: left;">Selecciona los colores</p></b-col>
                        <b-col cols="1" style="margin-bottom: 25px;">   <b-button style="border-radius: 110%;"  variant="light">  <b-icon   @click="registrarColor()" icon="plus-circle" scale="2" style="height: 20px !important; color: var(--verde) "></b-icon></b-button></b-col>
                      </b-row>
                  </b-container> 
                  <div v-for="(elemento, index) in color" :key="index">
                    <b-container style="margin-bottom: 10px;">
                      <b-row>
                        <b-col cols="11">
                            <b-form-select class="custom-select mr-sm-2 form-control altura" id="per-page-select"  v-model="elemento.valor" :options="cod_colores"></b-form-select>
                        </b-col>
                        <b-col cols="1" ><b-button @click="eliminarColorSeleccionado(index)"  variant="light"><b-icon icon="trash" style="color: #df5b5b"></b-icon></b-button></b-col>
                      </b-row>
                    </b-container>
                  </div>

                  <b-container>
                    <b-row>
                        
                        <b-col cols="11"><p style="text-align: left;">Selecciona las materias primas</p></b-col>
                        <b-col cols="1" style="margin-bottom: 25px;">   <b-button style="border-radius: 110%;"  variant="light">  <b-icon   @click="registrarmateriaPrima()" icon="plus-circle" scale="2" style="height: 20px !important; color: var(--verde) "></b-icon></b-button></b-col>
                      </b-row>
                  </b-container> 
                  <div v-for="(elemento, index) in materiaPrima" :key="index">
                    <b-container style="margin-bottom: 10px;">
                      <b-row>
                        <b-col cols="11">
                           <b-form-select class="custom-select mr-sm-2 form-control altura" id="per-page-select"  v-model="elemento.valor" :options="cod_materia"></b-form-select>
                        </b-col>
                        <b-col cols="1" ><b-button @click="eliminarmateriaPrimaSeleccionado(index)"  variant="light"><b-icon icon="trash" style="color: #df5b5b"></b-icon></b-button></b-col>
                      </b-row>
                    </b-container>
                  </div>

                  <b-container>
                    <b-row>
                        
                        <b-col cols="11"><p style="text-align: left;">Selecciona las imagenes</p></b-col>
                        <b-col cols="1" style="margin-bottom: 25px;">   <b-button style="border-radius: 110%;"  variant="light">  <b-icon   @click="registrarImagenes()" icon="plus-circle" scale="2" style="height: 20px !important; color: var(--verde) "></b-icon></b-button></b-col>
                      </b-row>
                  </b-container> 
                  <div v-for="(elemento, index) in imagenes" :key="index">
                    <b-container style="margin-bottom: 10px;">
                      <b-row>
                        <b-col cols="11">
                          <b-form-select class="custom-select mr-sm-2 form-control altura" id="per-page-select"  v-model="elemento.valor" :options="cod_imagenes"></b-form-select>
                        </b-col>
                        <b-col cols="1" ><b-button @click="eliminarImagenesSeleccionado(index)"  variant="light"><b-icon icon="trash" style="color: #df5b5b"></b-icon></b-button></b-col>
                      </b-row>
                    </b-container>
                  </div>


                  <b-container>
                    <b-row>
                        
                        <b-col cols="11"><p style="text-align: left;">Selecciona las presentaciones</p></b-col>
                        <b-col cols="1" style="margin-bottom: 25px;">   <b-button style="border-radius: 110%;"  variant="light">  <b-icon   @click="registrarPresentaciones()" icon="plus-circle" scale="2" style="height: 20px !important; color: var(--verde) "></b-icon></b-button></b-col>
                      </b-row>
                  </b-container> 
                  <div v-for="(elemento, index) in presentaciones" :key="index">
                    <b-container style="margin-bottom: 10px;">
                      <b-row>
                        <b-col cols="11">
                          <b-form-select class="custom-select mr-sm-2 form-control altura" id="per-page-select"  v-model="elemento.valor" :options="cod_presesentaciones"></b-form-select>
                        </b-col>
                        <b-col cols="1" ><b-button @click="eliminarPresentacionesSeleccionado(index)"  variant="light"><b-icon icon="trash" style="color: #df5b5b"></b-icon></b-button></b-col>
                      </b-row>
                    </b-container>
                  </div>
                  

                  
              
                  
                  <div class="d-grid gap-2 mb-3">
                      <button type="button" class="btn btn-primary btn-lg border-0 rounded-3" v-on:click="validaciones"  >Registrar</button>
                  </div>

                </form>
              </div> 
          </div>
      </div>
  </section>
</template>

<style  scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,700;0,800;1,400&display=swap');

h3, h5, h6{
font-family: 'Nunito', sans-serif;
}

.letra{
font-size: 40px;
}
</style>

<script>
  import {required, numeric, maxLength, between} from 'vuelidate/lib/validators';

  export default{
    props:{
      idProducto:'',
      cod_tipo_usuario:''
      
    },
      data(){
          return{
              tipo:'',
              añejamiento:'',
              nombre:'',
              descripcion:'',
              precio:'',
              proveedor:'',
              categoria:'',
              variedad:'',
              parroquia:'',
              gradosa:'',
              imagenes:[],
              sabor: [],
              color: [],
              materiaPrima: [],
              imagenes: [],
              presentaciones: [],
              cod_añejamiento:[],
              parroquias: [],
              cod_sabores:[],
              cod_colores:[],
              cod_materia:[],
              cod_presesentaciones:[],
              cod_imagenes:[],
              cod_tipo:['Agricola','Industrial'],
              cod_proveedor:[],
              cod_categorias:[],
              cod_variedad:[]
          }
      },
        async created(){               
            await this.obtenerParroquias();
            await this.obtenerProveedores();
           await this.obtenerAnejamiento();
           await this.obtenerCategoria();  
           await this.obtenerVariedad();
           await this.obtenerSabor();
           await this.obtenerColor();
            await this.obtenerMateria();
            await this.obtenerImagenes();
           await this.obtenerPresentaciones();
        },

      validations: {
          nombre: {required},
          descripcion: { 
              required,
              maxLengthValue: maxLength(100)
          },
          precio:{
              required,
              numeric,
              maxLengthValue: maxLength(1000000),
              between: between(1,1000000)
          },
          stock:{
              required,
              numeric,
              maxLengthValue: maxLength(1000000),
              between: between(1,1000000)
          },
          nombreImagen:{required},
          añejamiento: {required},
          gradosa: {required, numeric},
          parroquia: {required, numeric},
      },
      mounted(){
    this.cod_tipo_usuario=this.$route.params.cod_tipo_usuario;},
      methods:{
         
          
          validaciones(){
              this.$v.$touch();
              if(!this.$v.$invalid){
                  this.mensajeValidacion('Debe llenar todos los campos');
              }else{
                  this.registrarProducto();
              }
          },

          mensajeValidacion(mensaje){
                  Swal.fire({
                  icon: 'error',
                  title: 'Error de registro',
                  text: mensaje,
              })
          } ,

        LimpiarCampos() {
            this.campos = {
                nombre: '',
                descripcion: '',
                precio: '',
                proveedor: '',
                // ... otros campos
            };
            this.sabor = [{ valor: '' }];
            this.color = [{ valor: '' }];
            this.materiaPrima = [{ valor: '' }];
            this.imagenes = [{ valor: '' }];
            this.presentaciones = [{ valor: '' }];
        },
         
        registrarSabor() {
            this.sabor.push( {valor:''} );
        },

        eliminarSaborSeleccionado(indice) {
            this.sabor.splice(indice, 1);
        },

        registrarColor(){
            this.color.push({valor: ''})
        },

        eliminarColorSeleccionado(indice){
            this.color.splice(indice, 1);
        },
          registrarmateriaPrima(){
            this.materiaPrima.push({valor: ''})
          },
          eliminarmateriaPrimaSeleccionado(indice){
            this.materiaPrima.splice(indice, 1);
          },
          registrarImagenes(){
            this.imagenes.push({valor: ''})
          },
          eliminarImagenesSeleccionado(indice){
            this.imagenes.splice(indice, 1);
          },
          registrarPresentaciones(){
            this.presentaciones.push({valor: ''})
          },
          eliminarPresentacionesSeleccionado(indice){
            this.presentaciones.splice(indice, 1);
          },
          
        async obtenerParroquias() {
            const url = 'http://localhost:3000/api/producto/parroquias';

            try {
                const response = await this.axios.get(url);
                const parroquia = response.data;

                for (let i = 0; i < parroquia.length; i++) {
                    const item = {
                        text: parroquia[i].nombre,
                        value: parroquia[i].id
                    };
                    this.parroquias.push(item);
                }
                this.insertarAuditoria('Consultar','Lugar')
            } catch (error) {
                console.log(error);
            }
        },

        async obtenerProveedores() {
            const url = 'http://localhost:3000/api/producto/proveedor';

            try {
                const response = await this.axios.get(url);
                const proveedor = response.data;
                
                for (let i = 0; i < proveedor.length; i++) {
                    const item = {
                        value: proveedor[i].rif,
                        text: proveedor[i].nombre
                    };
                    this.cod_proveedor.push(item);
                }
                this.insertarAuditoria('Consultar','Proveedor')
            } catch (error) {
                console.log(error);
            }
        },

        async obtenerAnejamiento() {
            const url = 'http://localhost:3000/api/producto/anejamiento';

            try {
                const response = await this.axios.get(url);
                const anejamiento = response.data;
                
                for (let i = 0; i < anejamiento.length; i++) {
                    const item = {
                        text: anejamiento[i].nombre,
                        value: anejamiento[i].id
                    };
                    this.cod_añejamiento.push(item);
                }
                this.insertarAuditoria('Consultar','Añejamiento')
            } catch (error) {
                console.log(error);
            }
        },

        async obtenerCategoria() {
            const url = 'http://localhost:3000/api/producto/categoria';

            try {
                const response = await this.axios.get(url);
                const categoria = response.data;
                console.log(categoria)
                for (let i = 0; i < categoria.length; i++) {
                    const item = {
                        text: categoria[i].nombre,
                        value: categoria[i].id
                    };
                    this.cod_categorias.push(item);
                }
                this.insertarAuditoria('Consultar','Categoria')
            } catch (error) {
                console.log(error);
            }
        },

        async obtenerVariedad() {
            const url = 'http://localhost:3000/api/producto/variedad';

            try {
                const response = await this.axios.get(url);
                const variedad = response.data;
        
                for (let i = 0; i < variedad.length; i++) {
                    const item = {
                        text: variedad[i].nombre,
                        value: variedad[i].codigo
                    };
                    this.cod_variedad.push(item);
                }
                this.insertarAuditoria('Consultar','Variedad')
            } catch (error) {
                console.log(error);
            }
        },

        async obtenerSabor(){
            const url = 'http://localhost:3000/api/producto/sabor';
    
            try {
                const response = await this.axios.get(url);
                const sabor = response.data;
    
                for (let i = 0; i < sabor.length; i++) {
                    const item = {
                        text: sabor[i].nombre,
                        value: sabor[i].codigo
                    };
                    this.cod_sabores.push(item);
                }
                this.insertarAuditoria('Consultar','Sabor')
            } catch (error) {
                console.log(error);
            }
        },

        async obtenerColor(){
            const url = 'http://localhost:3000/api/producto/color';
    
            try {
                const response = await this.axios.get(url);
                const color = response.data;
    
                for (let i = 0; i < color.length; i++) {
                    const item = {
                        text: color[i].nombre,
                        value: color[i].codigo
                    };
                    this.cod_colores.push(item);
                }
                this.insertarAuditoria('Consultar','Color')
            } catch (error) {
                console.log(error);
            }
        },

        async obtenerMateria(){
            const url = 'http://localhost:3000/api/producto/materia';
    
            try {
                const response = await this.axios.get(url);
                const materia = response.data;
    
                for (let i = 0; i < materia.length; i++) {
                    const item = {
                        text: materia[i].nombre,
                        value: materia[i].codigo
                    };
                    this.cod_materia.push(item);
                }
            } catch (error) {
                console.log(error);
            }
        },

        async obtenerImagenes(){
            const url = 'http://localhost:3000/api/producto/imagen';
    
            try {
                const response = await this.axios.get(url);
                const imagen = response.data;
    
                for (let i = 0; i < imagen.length; i++) {
                    const item = {
                        text: imagen[i].url,
                        value: imagen[i].codigo
                    };
                    this.cod_imagenes.push(item);
                }
                this.insertarAuditoria('Consultar','Materia')
            } catch (error) {
                console.log(error);
            }
        },

        async obtenerPresentaciones(){
            const url = 'http://localhost:3000/api/producto/presentacion';
    
            try {
                const response = await this.axios.get(url);
                const presentacion = response.data;
    
                for (let i = 0; i < presentacion.length; i++) {
                    const item = {
                        text: parseInt(presentacion[i].capacidad)/1000 + ' L',
                        value: presentacion[i].codigo
                    };
                    this.cod_presesentaciones.push(item);
                }
                this.insertarAuditoria('Consultar','Presentacion')
            } catch (error) {
                console.log(error);
            }
        },

        async registrarProducto(){
            const url = 'http://localhost:3000/api/producto';
            console.log(this.parroquia)
            const data = {
                nombre: this.nombre,
                descripcion: this.descripcion,
                tipo: this.tipo,    
                gradosa: this.gradosa,
                añejamiento: this.añejamiento,
                proveedor: this.proveedor,
                categoria: this.categoria,
                variedad: this.variedad,
                parroquia: this.parroquia,
                sabor: this.sabor.map((item) => item.valor),
                color: this.color.map((item) => item.valor),
                materiaPrima: this.materiaPrima.map((item) => item.valor),
                imagenes: this.imagenes.map((item) => item.valor),
                presentaciones: this.presentaciones.map((item) => item.valor),
            };

            console.log(data)

            try {
                const response = await this.axios.post(url, data);
                const respuesta = response.data;
                if (respuesta.estado === 'ok') {
                    this.mensajeValidacion('Producto registrado con exito');
                    this.LimpiarCampos();
                    this.insertarAuditoria('Registrar','Producto')
                } else {
                    this.mensajeValidacion('Error al registrar el producto');
                }
            } catch (error) {
                console.log(error);
            }
        },
        async  insertarAuditoria(Accion,Tabla){
          console.log(this.cod_tipo_usuario)
            const dato={
              cod_tipo_usuario:this.cod_tipo_usuario,accion:Accion,tabla:Tabla}
            const url = 'http://localhost:3000/api/usuario/insertarAuditoria';
            await this.axios.post(url,dato).then(response => {
            console.log('auditoria realizada')
            }).catch(error => {
              console.log(error);
            });
          }
        
    },


 
  }
</script>