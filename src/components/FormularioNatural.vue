<template>
    <div style="margin-top: -50px;">
        <br>
        <section class="container" style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
            <div style="background-color: var(--carne)" class="row content d-flex justify-content-center align-items-center">
                <div class="col-md-9 principal">
               
                  <div class="box  bg-white p-4 ">
                    <b-alert show variant="danger" v-if="enviado">Campos vacios</b-alert>
                        
                    <form class="mb-3">

                      <div class="row">
    
                          <div class=" col form-group form-floating mb-3">
                           <input 
                              type="text" 
                              class="form-control rounded-2 custom-input-height altura" 
                              id="pnombre" 
                              placeholder="pnombre" 
                              v-model="pnombre"
                            >
                           <label for="pnombre">Primer nombre</label> 
                           <div style="height: 25px">
                              <b-form-text  v-if=" !$v.pnombre.required" class="form-floating mb-3" text-variant="danger">Campo requerido</b-form-text >
                            </div>
                          </div>

                          <div class=" col form-group form-floating mb-3">
                           <input 
                              type="text" 
                              class="form-control rounded-2 altura" 
                              id="snombre" 
                              placeholder="snombre"
                              v-model="snombre"
                            >
                           <label for="snombre" >Segundo nombre</label> 
                            <div style="height: 25px">
                              <b-form-text  v-if=" !$v.snombre.required" class="form-floating mb-3" text-variant="danger">Campo requerido</b-form-text >
                            </div>
                          </div>

                      </div>

                      <div class="row">
                      
                          <div class=" col form-group form-floating mb-3">
                            <input 
                              type="text" 
                              class="form-control rounded-2 altura" 
                              id="papellido" 
                              placeholder="papellido"
                              v-model="papellido"
                            >
                            <label for="papellido"> Primer apellido</label> 
                            <div style="height: 25px">
                              <b-form-text  v-if=" !$v.papellido.required" class="form-floating mb-3" text-variant="danger">Campo requerido</b-form-text >
                            </div>
                          </div>

                          <div class=" col form-group form-floating mb-3">
                             <input 
                                type="text" 
                                class="form-control rounded-2 altura" 
                                id="sapellido"
                                placeholder="sapellido"
                                v-model="sapellido"
                              >
                             <label for="sapellido" > Segundo apellido</label> 
                             <div style="height: 25px">
                                <b-form-text  v-if=" !$v.sapellido.required" class="form-floating mb-3" text-variant="danger">Campo requerido</b-form-text >
                             </div>
                          </div>

                      </div>

                      <div class="row">

                        <div class="col form-group ">
                            <label style="color: gray; font-size: 16px">Ej:29919287</label>

                            <div class="form-floating mb-3">
                                <input 
                                  type="text" 
                                  class="form-control rounded-2 altura" 
                                  id="numDoc"
                                  placeholder="numDoc"
                                  v-model="numDoc"
                                >
                                <label for="numDoc">Cedula</label>
                                <div style="height: 25px">
                                  <b-form-text  v-if=" !$v.numDoc.required" class="form-floating mb-3" text-variant="danger">Campo requerido</b-form-text > 
                                </div>
                            </div>
                        </div>

                        <div class="col form-group">
                            <label style="color: gray; font-size: 16px">Ej:29919287</label>
                            <div class="form-floating mb-3">
                                <input 
                                  type="text" 
                                  class="form-control rounded-2 altura" 
                                  id="numDoc"  
                                  placeholder="numDoc" 
                                  v-model="numDoc"
                                >
                                <label for="numDoc">Rif</label>
                                <div style="height: 25px">
                                  <b-form-text  v-if=" !$v.numDoc.required" class="form-floating mb-3" text-variant="danger">Campo requerido</b-form-text >
                                </div>
                            </div>
                        </div>

                      </div>
                        <label style="color: gray; font-size: 16px">Ej: example@gmail.com</label>
                        <div class="form-floating mb-3">
                           <input 
                              type="email" 
                              class="form-control rounded-2 altura" 
                              id="email"  
                              placeholder="name@example.com"
                              v-model="email"
                            >
                           <label for="email">Email</label>
                          <b-form-text  v-if=" !$v.email.required" class="form-floating mb-3" text-variant="danger">Campo requerido</b-form-text >
                        </div>

                        
                      <div class="col form-group " style="color: white">
                        <label style="color: gray; font-size: 16px"> El teléfono debe tener entre 12 a 15 caracteres y empezar con 0.</label>
                          <b-form-group label-for="tags-validation"  :state="state">
                            <b-form-tags
                              input-id="tags-validation"
                              v-model="tags"
                              tag-variant="dark"
                              :input-attrs="{ 'aria-describedby': 'tags-validation-help' }"
                              :tag-validator="tagValidator"
                              :state="state"
                              separator=" "
                              placeholder="Ingrese sus números de teléfono"
                              style="background-color: var(--vinotinto); color:var(--carne)"
                              input-class="white-text" 
                            >
                            </b-form-tags>
                            
                          </b-form-group>
                      </div>
                      <div style="height: 25px;"></div>

                        <label style="color: gray; font-size: 16px">Debe estar en el rango de 6-15 caracteres</label>
                        <div class="form-floating mb-3">
                           <input 
                              type="password"
                              class="form-control rounded-2 altura"
                              id="floatingPassword"  
                              placeholder="password"
                              v-model="password">
                           <label for="floatingPassword">Password</label>
                           <b-form-text  v-if=" !$v.password.required" class="form-floating mb-3" text-variant="danger">Campo requerido</b-form-text >
                        </div>
      
                        <div class="row">
                            <div class="col form-group form-floating mb-3">
                              <b-form-select v-model="estado" id="estado"  class="custom-select mr-sm-2  form-control" :options="[ 'Amazonas', 'Anzoátegui', 'Apure', 'Aragua', 'Barinas', 'Bolívar', 'Carabobo', 'Cojedes', 'Delta Amacuro', 'Dependencias Federales',' Distrito Federal',' Falcón', 'Guárico', 'Lara', 'Mérida', 'Miranda', 'Monagas', 'Nueva Esparta', 'Portuguesa', 'Sucre', 'Táchira', 'Trujillo', 'Vargas', 'Yaracuy', 'Zulia']" :value="null"> 
                              </b-form-select>  
                              <label for="estado">Seleccione</label>
                                        <b-form-text  v-if="!$v.estado.required" class="form-floating mb-3" text-variant="danger"> Debe selecionar un estado</b-form-text >                
                            </div>
                          <div class="col form-group">
                              <div class="form-floating mb-3">
                                  <input type="text" class="form-control rounded-2" id="direccion"  placeholder="direccion" v-model="direccion">
                                  <label for="direccion">Direccion</label>
                                  <b-form-text  v-if=" !$v.direccion.required" class="form-floating mb-3" text-variant="danger">Campo requerido</b-form-text >
                              </div>
                          </div>
                        </div>
                        <div class="d-grid gap-2 mb-3">
                            <button type="button" class="btn btn-primary btn-lg border-0 rounded-3"  v-on:click="validar" >Guardar</button>
                        </div>
                      </form>
                  
                  </div>
              </div>
           </div>
        </section>
      </div>  
  </template>
  <style>
  /*cambia la altura de los inputs*/
  .altura{
    min-height: 0px !important;
    height: 50px !important;
  }
 
  /*Modifica el color de la X para eliminar números de teléfono*/
  .b-form-tag > button.b-form-tag-remove {
    color: red !important;
  }

  /*ajusta el div del formulario*/
  .bg-white {
    margin: 25px 0;
    --bs-bg-opacity: 1;
    background-color:var(--carne)!important; 
  }

  /*saca del input la palabra del recuadro (Primer nombre, email, etc)*/
  .form-floating > .form-control:focus ~ label, .form-floating > .form-control:not(:placeholder-shown) ~ label, .form-floating > .form-control-plaintext ~ label, .form-floating > .form-select ~ label {
    color: rgba(var(--bs-body-color-rgb), 0.65);
    transform: scale(0.85) translateY(-2.0rem) translateX(0.15rem) !important;;
  }

  /*ubica correctamente el nombre del recuadro en el input*/
  .form-floating > label {
    padding: 0.5rem 0.75rem !important;
    left: 7px !important;
  } 

  /* Ajusta el color del texto a blanco mientras escribes, antes estaba en gris */
  .white-text {
    color: white !important; 
  }
  

</style>
<script>
import { required, minLength,maxLength,alpha,numeric,email} from 'vuelidate/lib/validators';
import '../assets/styles.css'
export default {
    data: function() {
      return {
          email: '',
          password: '',
          nombreCompleto:'',
          rif:'',
          ci:'',
          pnombre:'',
          snombre:'',
          papellido:'',
          sapellido:'',
          direccion:'',
          enviado:false,
          tipDoc:'',
          estado:'',
          tags: [],
        dirty: false


        }
      },
      computed: {
      
    },
    watch: {
      tags(newValue, oldValue) {
        // Set the dirty flag on first change to the tags array
        this.dirty = true
      }
    },
    
    validations: {
        
        email: { required,email},
        password: { required,  minLengthValue: minLength(6),maxLengthValue: maxLength(15), },
        pnombre:{required,alpha},
        snombre:{required,alpha},
        numDoc:{required,numeric, minLengthValue: minLength(7),maxLengthValue: maxLength(10),},
        direccion:{required},
        tipDoc:{required},
        estado:{required},
        papellido:{required,alpha},
        sapellido:{required,alpha},
        ClienteEncontrado:'',
    },
    methods: {
        validar(){
          this.buscarClienteEnServidor();
          if(this.ClienteEncontrado.length!=0){this.mensajeValidacion('El correo ingresado ya se encuentra registrado')}
            if (this.$v.$invalid || (this.tipDoc==='V'&&this.numDoc.length>8)|| this.ClienteEncontrado.length!=0) {
              if(this.email==''||this.password==''||this.pnombre==''||this.snombre==''||this.numDoc==''||this.direccion==''||this.tipDoc==''||this.papellido==''||this.sapellido==''||this.estado=='')
                {this.mensajeValidacion('Hay campos vacios') }
              if(!this.$v.email.email){this.mensajeValidacion(`Formato de correo invalido. 
                Ejemplo de formato: ejemplo@gmail.com `)}
              if(!this.$v.pnombre.alpha){this.mensajeValidacion('Los nombres no aceptan caracteres especiales,numeros ni espacios en blanco')}
              if(!this.$v.snombre.alpha){this.mensajeValidacion('Los nombres no aceptan caracteres especiales,numeros ni espacios en blanco')}
              if(!this.$v.papellido.alpha){this.mensajeValidacion('Los apellidos no aceptan caracteres especiales,numeros ni espacios en blanco')}
              if(!this.$v.sapellido.alpha){this.mensajeValidacion('Los apellidos no aceptan caracteres especiales,numeros ni espacios en blanco')}
              if(!this.$v.numDoc.numeric){this.mensajeValidacion('Los documentos de identidad no aceptan letras ni caracteres especiales')}
              if(!this.$v.numDoc.minLengthValue){this.mensajeValidacion('Los documentos de identidad tienen minimo 6 numeros')}
              if(!this.$v.numDoc.maxLengthValue){this.mensajeValidacion('Los documentos de identidad tienen maximo 10 numeros')}
              if(this.tipDoc==='V'&&this.numDoc.length>8){this.mensajeValidacion('La cedula de identidad tiene como maximo 8 digitos')}
              if(!this.$v.password.minLengthValue){this.mensajeValidacion('El password debe tener tener minimo 6 caracteres y maximo 15')}
              if(!this.$v.password.maxLengthValue){this.mensajeValidacion('El password debe tener tener minimo 6 caracteres y maximo 15')}
            
              return;
            }
            else
            {this.crear();}
        },
        
            mensaje(){
              Swal.fire('Usted se ha registrado con exito')
            },
            mensajeValidacion(mensaje){
              Swal.fire({
              icon: 'error',
              title: 'Error de registro',
              text: mensaje,})
            },
            
            tagValidator(tag) {
        // Individual tag validator function
        return tag === tag.toLowerCase() && tag.length > 10 && tag.length < 16
      }
               
    },
    

    }
</script>
