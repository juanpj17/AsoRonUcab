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
                                  placeholder="ci"
                                  v-model="ci"
                                >
                                <label>Cedula</label>
                                <div style="height: 25px">
                                </div>
                            </div>
                        </div>

                        <div class="col form-group">
                            <label style="color: gray; font-size: 16px">Ej:314531193</label>
                            <div class="form-floating mb-3">
                                <input 
                                  type="text" 
                                  class="form-control rounded-2 altura" 
                                  placeholder="numDoc" 
                                  v-model="rif"
                                >
                                <label>Rif</label>
                                <div style="height: 25px">
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
                              placeholder="correo"
                              v-model="email"
                            >
                           <label for="email">Email</label>
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

                      <b-container>
                            <b-row>
                                
                                <b-col cols="11"><p style="text-align: left;">Registrar telefonos</p></b-col>
                                <b-col cols="1" style="margin-bottom: 25px;">   <b-button @click=" RegistrarTelefonos()" style="border-radius: 110%;"  variant="light">  <b-icon icon="plus-circle" scale="2"></b-icon></b-button></b-col>
                              </b-row>
                        </b-container> 
                        <div v-for="(elemento, index) in telefonos" :key="index">
                          <b-container style="margin-bottom: 10px;">
                            <b-row>
                              <b-col cols="11">
                                  <div class="col form-group form-floating mb-2">
                                   <b-input v-model="elemento.numero"></b-input>
                                    <label>Ingrese el numero</label>
                                  </div>
                              </b-col>
                              <b-col cols="1" ><b-button @click=" EliminarTelefonoSeleccionado(index)"  variant="light"><b-icon icon="trash"></b-icon></b-button></b-col>
                            </b-row>
                            </b-container>
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
                        </div>
      
                        <div class="row">
                            <div class="col form-group form-floating mb-3">
                              <b-form-select v-model="estado" id="estado"  class="custom-select mr-sm-2  form-control" :options="[ 'Amazonas', 'Anzoátegui', 'Apure', 'Aragua', 'Barinas', 'Bolívar', 'Carabobo', 'Cojedes', 'Delta Amacuro', 'Dependencias Federales',' Distrito Federal',' Falcón', 'Guárico', 'Lara', 'Mérida', 'Miranda', 'Monagas', 'Nueva Esparta', 'Portuguesa', 'Sucre', 'Táchira', 'Trujillo', 'Vargas', 'Yaracuy', 'Zulia']" :value="null"> 
                              </b-form-select>  
                              <label for="estado">Seleccione</label>
                            </div>
                          <div class="col form-group">
                              <div class="form-floating mb-3">
                                  <input type="text" class="form-control rounded-2" id="direccion"  placeholder="direccion" v-model="direccion">
                                  <label for="direccion">Direccion</label>
                              </div>
                          </div>
                        </div>
                        <div class="d-grid gap-2 mb-3">
                            <button type="button" class="btn btn-primary btn-lg border-0 rounded-3">Guardar</button>
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
import '../assets/styles.css'
export default {
  props:{
    id:''
  
},
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
          estado:'',
        telefonos:[]

        }
      },
      created(){
        this.RegistrarTelefonos()
      },
    methods: {
         
      RegistrarTelefonos(){
      this.telefonos.push({ numero: ''});
      },
      EliminarTelefonoSeleccionado(indice){
      this.telefonos.forEach((elemento,index) => { 
          if (indice==index){
             this.telefonos.splice(index,1)}})}
               
    },
    

    }
</script>
