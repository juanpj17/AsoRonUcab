<template>
    <section class="container" style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
        <div class="row content d-flex justify-content-center align-items-center">
            <div class="col-md-12  mr-5 principal mb-4">
              <div class="box  bg-white p-4 ">    
                <h3 class="mb-4 text-center fs-1">Registrar Producto</h3>
                
                <form  class="mb-3">
                  <div class="row">
                    <div class=" col form-group form-floating mb-3">
                        <input type="text"  class="form-control rounded-2 altura" v-model="nombre" />
                        <label >Nombre</label>
                        <b-form-text  v-if="!$v.nombre.required" class="form-floating mb-3" text-variant="danger">Debe llenar el campo</b-form-text > 
                    </div>
                    <div class=" col form-group form-floating mb-3">
                        <input type="text" class="form-control rounded-2 altura" v-model="descripcion"/>
                        <label>Descripcion</label>
                        <b-form-text  v-if="!$v.descripcion.required" class="form-floating mb-3" text-variant="danger">Debe llenar el campo</b-form-text > 
                    </div>
                  </div>
                  <div class="row">
                    <div  class=" col form-group form-floating mb-3">
                        <input type="text" class="form-control rounded-2 altura"  v-model="grados"  />
                        <label >Grados de alcohol</label>
                        <b-form-text  v-if="!$v.grados.required" class="form-floating mb-3" text-variant="danger">Debe llenar el campo</b-form-text > 
                        <b-form-text  v-if="!$v.grados.numeric" class="form-floating mb-3" text-variant="danger">Formato invalido, solo se aceptan numeros positivos</b-form-text > 
                            <b-form-text  v-if="!$v.grados.between&&this.grados=='0'" class="form-floating mb-3" text-variant="danger">El grado de alcoholdebe ser mayor quee 0 </b-form-text > 
                        </div>
                    <div class=" col form-group form-floating mb-3">
                        <input type="text" class="form-control rounded-2 altura" v-model="proveedor" />
                        <label >Codigo del proveedor</label>
                        <b-form-text  v-if="!$v.proveedor.required" class="form-floating mb-3" text-variant="danger">Debe llenar el campo</b-form-text > 
                        <b-form-text  v-if="!$v.proveedor.numeric" class="form-floating mb-3" text-variant="danger">Formato invalido, solo se aceptan numeros positivos</b-form-text >  

                    </div>
                  </div>
                    <div class=" col form-group form-floating mb-3">
                      <input type="text"  class="form-control rounded-2 altura"  v-model=" añejamiento" />
                      <label >Codigo del añejamiento</label>
                      <b-form-text  v-if="!$v.añejamiento.required" class="form-floating mb-3" text-variant="danger">Debe llenar el campo</b-form-text > 
                    </div>


                    <div > 
                        <b-form-group label="Selecciona los sabores" label-for="tags-component-select">
                          <!-- Prop `add-on-change` is needed to enable adding tags vie the `change` event -->
                          <b-form-tags
                            id="tags-component-select"
                            v-model="sabor"
                            size="lg"
                            class="mb-2"
                            add-on-change
                            no-outer-focus
                          >
                            <template v-slot="{ tags, inputAttrs, inputHandlers, disabled, removeTag }">
                              <ul v-if="tags.length > 0" class="list-inline d-inline-block mb-2">
                                <li v-for="tag in tags" :key="tag" class="list-inline-item">
                                  <b-form-tag
                                    @remove="removeTag(tag)"
                                    :title="tag"
                                    :disabled="disabled"
                                    style="background-color: black;"
                                  >{{ tag }}</b-form-tag>
                                </li>
                              </ul>
                              <b-form-select
                                v-bind="inputAttrs"
                                v-on="inputHandlers"
                                :disabled="disabled || availableOptions.length === 0"
                                :options="availableOptions"
                              >
                                <template #first>
                                  <!-- This is required to prevent bugs with Safari -->
                                  <option disabled sabor="" style="background-color: bisque;">Seleccione</option>
                                </template>
                              </b-form-select>
                            </template>
                          </b-form-tags>
                        </b-form-group>
                    </div>

                    <div > 
                        <b-form-group label="Seleccione colores" label-for="tags-component-select">
                          <!-- Prop `add-on-change` is needed to enable adding tags vie the `change` event -->
                          <b-form-tags
                            id="tags-component-select"
                            v-model="color"
                            size="lg"
                            class="mb-2"
                            add-on-change
                            no-outer-focus
                          >
                            <template v-slot="{ tags, inputAttrs, inputHandlers, disabled, removeTag }">
                              <ul v-if="tags.length > 0" class="list-inline d-inline-block mb-2">
                                <li v-for="tag in tags" :key="tag" class="list-inline-item">
                                  <b-form-tag
                                    @remove="removeTag(tag)"
                                    :title="tag"
                                    :disabled="disabled"
                                    style="background-color: black;"
                                  >{{ tag }}</b-form-tag>
                                </li>
                              </ul>
                              <b-form-select
                                v-bind="inputAttrs"
                                v-on="inputHandlers"
                                :disabled="disabled || availableOptions2.length === 0"
                                :options="availableOptions"
                              >
                                <template #first>
                                  <!-- This is required to prevent bugs with Safari -->
                                  <option disabled color="" style="background-color: bisque;">Seleccione</option>
                                </template>
                              </b-form-select>
                            </template>
                          </b-form-tags>
                        </b-form-group>
                    </div>

                    <div > 
                      <b-form-group label="Selecciona la materia prima" label-for="tags-component-select">
                        <!-- Prop `add-on-change` is needed to enable adding tags vie the `change` event -->
                        <b-form-tags
                          id="tags-component-select"
                          v-model="materiaPrima"
                          size="lg"
                          class="mb-2"
                          add-on-change
                          no-outer-focus
                        >
                          <template v-slot="{ tags, inputAttrs, inputHandlers, disabled, removeTag }">
                            <ul v-if="tags.length > 0" class="list-inline d-inline-block mb-2">
                              <li v-for="tag in tags" :key="tag" class="list-inline-item">
                                <b-form-tag
                                  @remove="removeTag(tag)"
                                  :title="tag"
                                  :disabled="disabled"
                                  style="background-color: black;"
                                >{{ tag }}</b-form-tag>
                              </li>
                            </ul>
                            <b-form-select
                              v-bind="inputAttrs"
                              v-on="inputHandlers"
                              :disabled="disabled || availableOptions3.length === 0"
                              :options="availableOptions"
                            >
                              <template #first>
                                <!-- This is required to prevent bugs with Safari -->
                                <option disabled materiaPrima="" style="background-color: bisque;">Seleccione</option>
                              </template>
                            </b-form-select>
                          </template>
                        </b-form-tags>
                      </b-form-group>
                    </div>

                    <div > 
                        <b-form-group label="Selecciona las imagenes" label-for="tags-component-select">
                          <!-- Prop `add-on-change` is needed to enable adding tags vie the `change` event -->
                          <b-form-tags
                            id="tags-component-select"
                            v-model="imagenes"
                            size="lg"
                            class="mb-2"
                            add-on-change
                            no-outer-focus
                          >
                            <template v-slot="{ tags, inputAttrs, inputHandlers, disabled, removeTag }">
                              <ul v-if="tags.length > 0" class="list-inline d-inline-block mb-2">
                                <li v-for="tag in tags" :key="tag" class="list-inline-item">
                                  <b-form-tag
                                    @remove="removeTag(tag)"
                                    :title="tag"
                                    :disabled="disabled"
                                    style="background-color: black;"
                                  >{{ tag }}</b-form-tag>
                                </li>
                              </ul>
                              <b-form-select
                                v-bind="inputAttrs"
                                v-on="inputHandlers"
                                :disabled="disabled || availableOptions5.length === 0"
                                :options="availableOptions"
                              >
                                <template #first>
                                  <!-- This is required to prevent bugs with Safari -->
                                  <option disabled imagenes="" style="background-color: bisque;">Seleccione</option>
                                </template>
                              </b-form-select>
                            </template>
                          </b-form-tags>
                        </b-form-group>
                    </div>

                    <div > 
                      <b-form-group label="Selecciona las presentaciones" label-for="tags-component-select">
                        <!-- Prop `add-on-change` is needed to enable adding tags vie the `change` event -->
                        <b-form-tags
                          id="tags-component-select"
                          v-model="presentaciones"
                          size="lg"
                          class="mb-2"
                          add-on-change
                          no-outer-focus
                        >
                          <template v-slot="{ tags, inputAttrs, inputHandlers, disabled, removeTag }">
                            <ul v-if="tags.length > 0" class="list-inline d-inline-block mb-2">
                              <li v-for="tag in tags" :key="tag" class="list-inline-item">
                                <b-form-tag
                                  @remove="removeTag(tag)"
                                  :title="tag"
                                  :disabled="disabled"
                                  style="background-color: black;"
                                >{{ tag }}</b-form-tag>
                              </li>
                            </ul>
                            <b-form-select
                              v-bind="inputAttrs"
                              v-on="inputHandlers"
                              :disabled="disabled || availableOptions4.length === 0"
                              :options="availableOptions"
                            >
                              <template #first>
                                <!-- This is required to prevent bugs with Safari -->
                                <option disabled presentaciones="" style="background-color: bisque;">Seleccione</option>
                              </template>
                            </b-form-select>
                          </template>
                        </b-form-tags>
                      </b-form-group>
                    </div>

                        </div>
                      </div>
                      <div class=" col form-group form-floating mb-3">
                        <input type="text"  class="form-control rounded-2"  v-model=" añejamiento" />
                        <label >Codigo del añejamiento</label>
                        <b-form-text  v-if="!$v.añejamiento.required" class="form-floating mb-3" text-variant="danger">Debe llenar el campo</b-form-text > 
                      </div>

                      <b-container>
                        <b-row>
                                <b-col cols="11"><p style="text-align: left;">Registrar Sabores</p></b-col>
                                <b-col cols="1" style="margin-bottom: 25px;">   <b-button @click="RegistrarSabores()" style="border-radius: 110%;"  variant="light">  <b-icon icon="plus-circle" scale="2"></b-icon></b-button></b-col>
                        </b-row>
                      </b-container > 
                      <div v-for="(elemento, index) in sabores" :key="index">
                        <b-container style="margin-bottom: 10px;">
                          <b-row>
                              <b-col cols="11">
                                <div class="col form-group form-floating mb-2">
                                  <b-form-select class="custom-select mr-sm-2  form-control" v-model="elemento.Sabor" :options="options"></b-form-select>
                                  <label>Seleccione el Sabor</label>
                                </div>
                              </b-col>
                              <b-col cols="1" ><b-button @click=" EliminarSaborSeleccionado(index)"  variant="light"><b-icon icon="trash"></b-icon></b-button></b-col>
                          </b-row>
                        </b-container>
                      </div>

                      <b-container>
                        <b-row>
                                <b-col cols="11"><p style="text-align: left;">Registrar Colores</p></b-col>
                                <b-col cols="1" style="margin-bottom: 25px;">   <b-button @click="RegistrarColores()" style="border-radius: 110%;"  variant="light">  <b-icon icon="plus-circle" scale="2"></b-icon></b-button></b-col>
                        </b-row>
                      </b-container > 
                      <div v-for="(elemento, index) in colores" :key="index">
                        <b-container style="margin-bottom: 10px;">
                          <b-row>
                              <b-col cols="11">
                                <div class="col form-group form-floating mb-2">
                                  <b-form-select class="custom-select mr-sm-2  form-control" v-model="elemento.Color" :options="options"></b-form-select>
                                  <label>Seleccione el Color</label>
                                </div>
                              </b-col>
                              <b-col cols="1" ><b-button @click=" EliminarColorSeleccionado(index)"  variant="light"><b-icon icon="trash"></b-icon></b-button></b-col>
                          </b-row>
                        </b-container>
                      </div>
  
                      <b-container>
                        <b-row>
                                <b-col cols="11"><p style="text-align: left;">Registrar Materias Primas</p></b-col>
                                <b-col cols="1" style="margin-bottom: 25px;">   <b-button @click="RegistrarMateriaPrima()" style="border-radius: 110%;"  variant="light">  <b-icon icon="plus-circle" scale="2"></b-icon></b-button></b-col>
                        </b-row>
                      </b-container > 
                      <div v-for="(elemento, index) in materiasPrima" :key="index">
                        <b-container style="margin-bottom: 10px;">
                          <b-row>
                              <b-col cols="11">
                                <div class="col form-group form-floating mb-2">
                                  <b-form-select class="custom-select mr-sm-2  form-control" v-model="elemento.MateriaPrima" :options="options"></b-form-select>
                                  <label>Seleccione la Materia Prima</label>
                                </div>
                              </b-col>
                              <b-col cols="1" ><b-button @click=" EliminarMateriaSeleccionado(index)"  variant="light"><b-icon icon="trash"></b-icon></b-button></b-col>
                          </b-row>
                        </b-container>
                      </div>

                      <b-container>
                        <b-row>
                                <b-col cols="11"><p style="text-align: left;">Registrar Presentaciones</p></b-col>
                                <b-col cols="1" style="margin-bottom: 25px;">   <b-button @click="RegistrarPresentacion()" style="border-radius: 110%;"  variant="light">  <b-icon icon="plus-circle" scale="2"></b-icon></b-button></b-col>
                        </b-row>
                      </b-container > 
                      <div v-for="(elemento, index) in presentaciones" :key="index">
                        <b-container style="margin-bottom: 10px;">
                          <b-row>
                              <b-col cols="11">
                                <div class="col form-group form-floating mb-2">
                                  <b-form-select class="custom-select mr-sm-2  form-control" v-model="elemento.Presentacion" :options="options"></b-form-select>
                                  <label>Seleccionar Presentacion</label>
                                </div>
                              </b-col>
                              <b-col cols="1" ><b-button @click=" EliminarPresentacionSeleccionado(index)"  variant="light"><b-icon icon="trash"></b-icon></b-button></b-col>
                          </b-row>
                        </b-container>
                      </div>

                      <b-container>
                        <b-row>
                                <b-col cols="11"><p style="text-align: left;">Registrar Imagenes</p></b-col>
                                <b-col cols="1" style="margin-bottom: 25px;">   <b-button @click="RegistrarImagenes()" style="border-radius: 110%;"  variant="light">  <b-icon icon="plus-circle" scale="2"></b-icon></b-button></b-col>
                        </b-row>
                      </b-container > 
                      <div v-for="(elemento, index) in imagenes" :key="index">
                        <b-container style="margin-bottom: 10px;">
                          <b-row>
                              <b-col cols="11">
                                <div class="col form-group form-floating mb-2">
                                  <b-form-select class="custom-select mr-sm-2  form-control" v-model="elemento.imagen" :options="options"></b-form-select>
                                  <label>Seleccionar Imagen</label>
                                </div>
                              </b-col>
                              <b-col cols="1" ><b-button @click=" EliminarImagenSeleccionado(index)"  variant="light"><b-icon icon="trash"></b-icon></b-button></b-col>
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

 /*Cambio el color de los label*/
label{
  color: black !important;
}

 /*cambia la altura y el color del borde de los inputs*/
 .altura{
  border:1px solid rgb(0, 0, 0);
  margin-bottom: 25px;
  min-height: 0px !important;
  height: 50px !important;
}

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
        idProducto:''
      },
        data(){
            return{
                añejamiento:'',
                nombre:'',
                descripcion:'',
                grados:'',
                proveedor:'',
                imagenes:[],
                Productos: '',
                options: ['Apple', 'Orange', 'Banana', 'Lime', 'Peach', 'Chocolate', 'Strawberry'],
                sabores:[],
                colores:[],
                materiasPrima:[],
                presentaciones:[],
            }
        },
        created(){
            this.RegistrarColores(),
            this.RegistrarImagenes(),
            this.RegistrarMateriaPrima(),
            this.RegistrarPresentacion(),
            this.RegistrarSabores()
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
                this.grados='';
                this.proveedor='';
                this.nombreImagen='';
                this.añejamiento='';
            },
            RegistrarSabores(){
            this.sabores.push({ Sabor: ''}); },

            EliminarSaborSeleccionado(indice){
            this.sabores.forEach((elemento,index) => { 
            if (indice==index){
             this.sabores.splice(index,1)}})},

             RegistrarColores(){
            this.colores.push({ Color: ''}); },

            EliminarColorSeleccionado(indice){
            this.colores.forEach((elemento,index) => { 
            if (indice==index){
             this.colores.splice(index,1)}})},
             RegistrarMateriaPrima(){
            this.materiasPrima.push({ MateriaPrima: ''}); },

            EliminarMateriaSeleccionado(indice){
            this.materiasPrima.forEach((elemento,index) => { 
            if (indice==index){
             this.materiasPrima.splice(index,1)}})},
             RegistrarPresentacion(){
            this.presentaciones.push({ presentacion: ''}); },

            EliminarPresentacionSeleccionado(indice){
            this.presentaciones.forEach((elemento,index) => { 
            if (indice==index){
             this.presentaciones.splice(index,1)}})},
             RegistrarImagenes(){
            this.imagenes.push({ imagen: ''}); },

            EliminarImagenSeleccionado(indice){
            this.imagenes.forEach((elemento,index) => { 
            if (indice==index){
             this.imagenes.splice(index,1)}})},
        },

        validations: {
            nombre: {required},
            descripcion: { 
                required,
                maxLengthValue: maxLength(100)
            },
            grados:{
                required,
                numeric,
                maxLengthValue: maxLength(1000000),
                between: between(1,1000000)
            },
            proveedor:{
                required,
                numeric,
                maxLengthValue: maxLength(1000000),
              
            },
            nombreImagen:{required},
            añejamiento: {required},
        },   
        
    }
</script>