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
                    <div class=" col form-group form-floating mb-3">
                        <input type="text" id="descripcion"   class="form-control rounded-2 altura" placeholder="descripcion" v-model="descripcion"/>
                        <label for="descripcion">Descripción</label>
                        <b-form-text  v-if="!$v.descripcion.required" class="form-floating mb-3" text-variant="danger">Debe llenar el campo</b-form-text > 
                    </div>
                  </div>
                  <div class="row">
                    <div  class=" col form-group form-floating mb-3">
                        <input type="text" id="precio"   class="form-control rounded-2 altura" placeholder="precio" v-model="precio"  />
                        <label for="precio">Grados de alcohol</label>
                        <b-form-text  v-if="!$v.precio.required" class="form-floating mb-3" text-variant="danger">Debe llenar el campo</b-form-text > 
                        <b-form-text  v-if="!$v.precio.numeric" class="form-floating mb-3" text-variant="danger">Formato invalido, solo se aceptan numeros positivos</b-form-text > 
                        <b-form-text  v-if="!$v.precio.between&&this.precio=='0'" class="form-floating mb-3" text-variant="danger">El precio debe ser mayor que 0 bs </b-form-text > 
                    </div>
                    <b-container style="margin-bottom: 15px;">
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
                          <b-form-select class="custom-select mr-sm-2 form-control altura" id="per-page-select"  placeholder="Tipo"  v-model="tipo" :options="cod_tipo"></b-form-select>
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
                          <b-form-select class="custom-select mr-sm-2 form-control altura" id="per-page-select" v-model="añejamiento" :options="cod_añejamiento"></b-form-select>
                        </b-col>
                        <b-col cols="6">
                          <b-form-select class="custom-select mr-sm-2 form-control altura" id="per-page-select" v-model="parroquia" :options="parroquias"></b-form-select>
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
    },
      data(){
          return{
              añejamiento:'cod1',
              nombre:'',
              descripcion:'',
              precio:'',
              proveedor:'',
              categoria:'',
              variedad:'',
              imagenes:[],
              Productos: '',
              options: ['Apple', 'Orange', 'Banana', 'Lime', 'Peach', 'Chocolate', 'Strawberry'],
              sabor: [],
              color:[],
              materiaPrima:[],
              presentaciones:[],
              cod_añejamiento:['cod1','cod2'],
              parroquias:['pa1','pa2'],
              cod_sabores:['sab1','sab_2'],
              cod_colores:['col1','COL2'],
              cod_materia:['mat1','mat2'],
              cod_presesentaciones:['p1','p2'],
              cod_imagenes:['im1','im2'],
              cod_tipo:['Agricola','Industrial'],
              cod_proveedor:['p1','p2'],
              cod_categorias:['cat','cat2'],
              cod_variedad:['var1','var2']
          }
      },
      created(){               
          this.mostrar()
          console.log(this.idProducto)
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
      },   

      methods:{
         
          
          validaciones(){
              this.$v.$touch();
             
              if(!this.$v.$invalid){
                  this.mensajeValidacion('Debe llenar todos los campos');
               
              }
              
          },

          mensajeValidacion(mensaje){
                  Swal.fire({
                  icon: 'error',
                  title: 'Error de registro',
                  text: mensaje,
              })
          } ,

          LimpiarCampos(){
              this.nombre='';
              this.descripcion='';
              this.precio='';
              this.stock='';
              this.nombreImagen='';
              this.añejamiento='';
          },
         
          registrarSabor(){
            this.sabor.push({valor: ''})
          },
          eliminarSaborSeleccionado(indice){
            this.sabor.forEach((elemento,index) => { 
                if (indice==index){
                  this.sabor.splice(index,1)}}
              )
          },
          registrarColor(){
            this.color.push({valor: ''})
          },
          eliminarColorSeleccionado(indice){
            this.color.forEach((elemento,index) => { 
                if (indice==index){
                  this.color.splice(index,1)}}
              )
          },
          registrarmateriaPrima(){
            this.materiaPrima.push({valor: ''})
          },
          eliminarmateriaPrimaSeleccionado(indice){
            this.materiaPrima.forEach((elemento,index) => { 
                if (indice==index){
                  this.materiaPrima.splice(index,1)}}
              )
          },
          registrarImagenes(){
            this.imagenes.push({valor: ''})
          },
          eliminarImagenesSeleccionado(indice){
            
            this.imagenes.forEach((elemento,index) => { 
                if (indice==index){
                  this.imagenes.splice(index,1)}}
              )
          },
          registrarPresentaciones(){
            this.presentaciones.push({valor: ''})
          },
          eliminarPresentacionesSeleccionado(indice){
            
            this.presentaciones.forEach((elemento,index) => { 
                if (indice==index){
                  this.presentaciones.splice(index,1)}}
              )
          }
          
      },

     
      
  }
</script>