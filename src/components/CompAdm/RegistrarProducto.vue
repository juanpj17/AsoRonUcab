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
                    <div class=" col form-group form-floating mb-3">
                        <input type="text" id="stock"   class="form-control rounded-2 altura" placeholder="stock"  v-model="stock" />
                        <label for="stock">Código del proveedor</label>
                        <b-form-text  v-if="!$v.stock.required" class="form-floating mb-3" text-variant="danger">Debe llenar el campo</b-form-text > 
                        <b-form-text  v-if="!$v.stock.numeric" class="form-floating mb-3" text-variant="danger">Formato invalido, solo se aceptan numeros positivos</b-form-text > 
                        <b-form-text  v-if="!$v.stock.between&&this.stock=='0'" class="form-floating mb-3" text-variant="danger">El stock debe ser mayor que 0 </b-form-text > 
                    </div>
                  </div>
                  <div class=" col form-group form-floating mb-3">
                      <input type="text" id="añejamiento"   class="form-control rounded-2 altura" placeholder="añejamiento"  v-model=" añejamiento" />
                      <label for="añejamiento">Código del añejamiento</label>
                      <b-form-text  v-if="!$v.añejamiento.required" class="form-floating mb-3" text-variant="danger">Debe llenar el campo</b-form-text > 
                  </div>
                  <div> 
                    <b-form-group label="Selecciona los saboras" label-for="tags-component-select">
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

                  <div> 
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
                              >{{ tag }}
                              </b-form-tag>
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
                              >{{ tag }}
                              </b-form-tag>
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
              añejamiento:'',
              nombre:'',
              descripcion:'',
              precio:'',
              stock:'',
              imagenes:[],
              Productos: '',
              options: ['Apple', 'Orange', 'Banana', 'Lime', 'Peach', 'Chocolate', 'Strawberry'],
              sabor: [],
              color:[],
              materiaPrima:[],
              presentaciones:[],
          }
      },
      created(){               
          this.mostrar()
          console.log(this.idProducto)
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
          }
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
      
  }
</script>