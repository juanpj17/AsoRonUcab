<template>
    <div>
        <!--Registro de datos-->
        <section class="container" style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
            <div class="row content d-flex justify-content-center align-items-center">
                <div class="col-md-10 principal">
                    <div class="box  bg-white p-4 ">
                        <form class="mb-3">
                        <div class="row">
                             <div class=" col form-group form-floating mb-3">
                                 <input type="text" class="form-control rounded-2" v-model="nombre">
                                 <label>  Nombre del Evento</label> 
                             </div>
                             <div class=" col form-group form-floating mb-3">
                                 <input type="text" class="form-control rounded-2" v-model="descripcion">
                                 <label>Descripcion</label> 
                             </div>
    
                         </div>
                        <div class="row">
                            <div class=" col form-group form-floating mb-3">
                                 <input type="date" class="form-control rounded-2" v-model="fecha_inicio">
                                 <label> Fecha de inicio</label> 
                                 
                            </div>
                            <div class=" col form-group form-floating mb-3">
                                 <input type="date" class="form-control rounded-2" v-model="fecha_fin">
                                 <label> Fecha de fin</label> 
                            </div>
                        </div>

                        <div class="row">
                            <div class="col form-group form-floating mb-3 ">
                                 <input type="text" class="form-control rounded-2 " v-model="numEnt">
                                 <label>Cantidad de entradas disponibles</label>
                            </div>
                        </div>
                        
                        <div class="row">
                            <div class="col form-group form-floating mb-3">
                                 <b-form-select  class="custom-select mr-sm-2  form-control" v-model="estado" :options="Estados"> </b-form-select>  
                                 <label>Seleccione</label>
                                              
                            </div>
                            <div class="col form-group form-floating mb-3">
                                 <b-form-select  class="custom-select mr-sm-2  form-control" v-model="municipio" :options="Municipios"> </b-form-select>  
                                 <label>Seleccione</label>
                                              
                            </div>
                            <div class="col form-group form-floating mb-3">
                                 <b-form-select   class="custom-select mr-sm-2  form-control" v-model="parroquia" :options="Parroquias"> </b-form-select>  
                                 <label>Seleccione</label>
                                        
                            </div>
                        </div>
                        <div class="col form-group">
                            <div class="form-floating mb-3">
                                  <input type="text" class="form-control rounded-2"  v-model="direccion">
                                  <label>Direccion</label>
                                
                            </div>
                          </div>
                        
<!--Todo a partir de aqui es solo para el input de seleccion de provedores-->

                        <div>
                            <b-form-group label-for="tags-with-dropdown">
                                <b-form-tags id="tags-with-dropdown" v-model="value" no-outer-focus class="mb-2">
                                    <template v-slot="{ tags, disabled, addTag, removeTag }">
                                        <ul v-if="tags.length > 0" class="list-inline d-inline-block mb-2">
                                            <li v-for="tag in tags" :key="tag" class="list-inline-item">
                                                <b-form-tag
                                                @remove="removeTag(tag)"
                                                :title="tag"
                                                :disabled="disabled"
                                                style="color: black;"
                                                 >{{ tag }}</b-form-tag>
                                            </li>
                                     </ul>

                                        <b-dropdown size="sm" variant="outline-secondary" block menu-class="w-100">
                                            <template #button-content>
                                                <b-icon icon="tag-fill"></b-icon> Seleccione prveedores
                                            </template>
                                            <b-dropdown-form @submit.stop.prevent="() => {}">
                                                 <b-form-group
                                                    label="Busqueda de proveedores"
                                                    label-for="tag-search-input"
                                                    label-cols-md="auto"
                                                    class="mb-0"
                                                    label-size="sm"
                                                    :description="searchDesc"
                                                    :disabled="disabled"
                                                                                    >
                                                    <b-form-input
                                                    v-model="search"
                                                    id="tag-search-input"
                                                    type="search"
                                                    size="sm"
                                                    autocomplete="off"
                                                    ></b-form-input>
                                                </b-form-group>
                                            </b-dropdown-form>
                                            <b-dropdown-divider></b-dropdown-divider>
                                            <b-dropdown-item-button
                                            v-for="option in availableOptions"
                                            :key="option"
                                             @click="onOptionClick({ option, addTag })"
                                            >
                                            {{ option }}
                                            </b-dropdown-item-button>
                                            <b-dropdown-text v-if="availableOptions.length === 0">Sin coincidencias</b-dropdown-text>
                                        </b-dropdown>
                                     </template>
                                </b-form-tags>
                         </b-form-group>
                    </div>

<!--Se acabo el boton select y empiaza el boton de guardar-->

                    <div class="d-grid gap-2 mb-3">
                        <button type="button" class="btn btn-primary btn-lg border-0 rounded-3">Guardar</button>
                    </div>
                    <!--Cierre de etiquetas-->
                        </form>
                    </div>
                </div>
           </div>
        </section>
        <!--Termina el formulario y empliaza el registro de inventario para el evento-->
        <div>
            <b-button @click="agregarElemento" style="margin-bottom: 20px;margin-right: 10px;">Agregar Elemento</b-button>
            <b-button @click="guardarInformacion" style="margin-bottom: 20px;">Guardar Información</b-button>
                <div v-for="(inventario, index) in inventario" :key="index" >
                <b-container class="bv-example-row">
                     <b-row style="margin-top: 30px;">
                        <b-col> <b-form-select v-model="inventario.Proveedor" :options="productos" ></b-form-select></b-col>
                        <b-col><b-input v-model="inventario.cantidad" ></b-input></b-col>
                        <b-col><b-input  v-model="inventario.precio"></b-input></b-col>
                        </b-row>
                        </b-container>
                </div>
       </div>

        <!--termina el inventario y se cierra la vista-->
    </div>  
</template>
<script>
import { required, minLength,maxLength,alpha,numeric,email} from 'vuelidate/lib/validators';
export default {
    data: function() {
      return {
         numEnt:0,
         direccion:'',
          descripcion:'',
          estado:'',
          municipio:'',
          parroquia:'',
          nombre:'',
          fecha_fin:'',
          fecha_inicio:'',
          tags: [],
        dirty: false,
        options: ['Apple', 'Orange', 'Banana', 'Lime', 'Peach', 'Chocolate', 'Strawberry'],
        Estados:[ 'Amazonas', 'Anzoátegui', 'Apure', 'Aragua', 'Barinas', 'Bolívar', 'Carabobo', 'Cojedes', 'Delta Amacuro', 'Dependencias Federales',' Distrito Federal',' Falcón', 'Guárico', 'Lara', 'Mérida', 'Miranda', 'Monagas', 'Nueva Esparta', 'Portuguesa', 'Sucre', 'Táchira', 'Trujillo', 'Vargas', 'Yaracuy', 'Zulia'],
        Municipios:['1','2','3'],
        Parroquias:['a','b','c'],
        search: '',
        value: [],
        productos:['1','1','a'],
        inventario:[],


        }
      },
      computed: {
      criteria() {
        // Compute the search criteria
        return this.search.trim().toLowerCase()
      },
      availableOptions() {
        const criteria = this.criteria
        // Filter out already selected options
        const options = this.options.filter(opt => this.value.indexOf(opt) === -1)
        if (criteria) {
          // Show only options that match criteria
          return options.filter(opt => opt.toLowerCase().indexOf(criteria) > -1);
        }
        // Show all options available
        return options
      },
      searchDesc() {
        if (this.criteria && this.availableOptions.length === 0) {
          return 'Proveedor no registrado'
        }
        return ''
      }
    },
    watch: {
      tags(newValue, oldValue) {
        // Set the dirty flag on first change to the tags array
        this.dirty = true
      }
    },
    
    methods: {
        onOptionClick({ option, addTag }) {
        addTag(option)
        this.search = ''
      },
        tagValidator(tag) {
        // Individual tag validator function
        return tag === tag.toLowerCase() && tag.length > 10 && tag.length < 16
      },
      agregarElemento() {
      this.inventario.push({Proveedor:'',cantidad:'',precio:''})
    },
    guardarInformacion() {
      console.log(this.inventario)
    }
               
    },
    

    }
</script>
