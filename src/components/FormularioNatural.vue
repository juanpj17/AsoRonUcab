<template>
    <div style="margin-top: -50px;">
        <br>
        <section class="container" style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
            <div style="background-color: var(--carne)" class="row content d-flex justify-content-center align-items-center">
                <div class="col-md-9 principal" style="z-index: 50;">
               
                  <div class="box  bg-white p-4 " >
                        
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
                           <div style="height: 25px"></div>
                            
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
                            <div style="height: 25px"></div>
                            
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

                      <b-container>
                          <b-row>
                            <b-col cols="1">
                              <b-form-select :options="tipoCedula"  v-model="tipCed"  class="custom-select mr-sm-2  form-control altura"></b-form-select>
                            </b-col>
                            <b-col cols="5">
                              <b-input placeholder="Cedula" v-model="ci" ></b-input> 
                            </b-col>
                            <b-col  cols="1">
                              <b-form-select :options="tipoRif" v-model="tipRif" class="custom-select mr-sm-2  form-control altura"></b-form-select>
                            </b-col>
                            <b-col cols="5">
                              <b-input placeholder="Rif" v-model="rif" ></b-input>
                            </b-col>
                          </b-row>
                      </b-container>

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


                      <b-container>
                            <b-row>
                                
                                <b-col cols="11"><p style="text-align: left;">Registrar teléfonos</p></b-col>
                                <b-col cols="1" style="margin-bottom: 25px;">   <b-button @click=" RegistrarTelefonos()" style="border-radius: 110%;"  variant="light">  <b-icon icon="plus-circle" scale="2" style="height: 20px !important; color: var(--verde) "></b-icon></b-button></b-col>
                              </b-row>
                        </b-container> 
                        <div v-for="(elemento, index) in telefonos" :key="index">
                          <b-container style="margin-bottom: 10px;">
                            <b-row>
                              <b-col cols="11">
                                  <div class="col form-group form-floating mb-2">
                                   <b-input v-model="elemento.numero" class="altura"></b-input>
                                    <label>El teléfono debe tener entre 12 a 15 caracteres y empezar con 0.</label>
                                  </div>
                              </b-col>
                              <b-col cols="1" ><b-button @click=" EliminarTelefonoSeleccionado(index)"  variant="light"><b-icon icon="trash" style="color: #df5b5b"></b-icon></b-button></b-col>
                            </b-row>
                            </b-container>
                            </div>

                     

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
                        <b-container>
                            <b-row>
                                  <b-col cols="6">
                                    <b-form-select v-model="parroquia"  class="custom-select mr-sm-2  form-control altura" :options="parroquias">  </b-form-select>  
                                  </b-col>
                                  <b-col cols="6">
                                    <b-input  placeholder="direccion" v-model="direccion"></b-input>
                                  </b-col>
                            </b-row>
                            <b-row style="margin-top: 10px;" v-if="tipo=='%Cliente'">
                                <b-col>
                                  <b-form-select :options="Roles" v-model="rol" class="custom-select mr-sm-2  form-control altura" ></b-form-select>
                                </b-col>
                                <b-col v-if="tipo=='%Empleado'">
                                  <b-input v-model="Sueldo"  placeholder="Sueldo" ></b-input>
                                </b-col>
                            </b-row>
                        </b-container>
                      
                        <div class="d-grid gap-2 mb-3">
                            <b-button @click=" registrarEmpleado()" > Registrar</b-button>
                        </div>
                      </form>
                  
                  </div>
              </div>
           </div>
        </section>
      </div>  
  </template>
  <style>
  
 
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
    id:'',
    tipo:''
  
},
    data: function() {
      return {
          email: '',
          password: '',
          rif:'',
          ci:'',
          pnombre:'',
          snombre:'',
          papellido:'',
          sapellido:'',
          direccion:'',
        telefonos:[],
        Roles:['Administrador','vendedor','cajero','cliente'],
        tipoCedula:['V','E'],
        tipoRif:['N'],
        tipCed:'V',
        tipRif:'N',
        rol:'cliente',
        parroquia:'parroqia1',
        parroquias:['parroqia1','parroquia2'],
        Sueldo:''


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
             this.telefonos.splice(index,1)}})},
    registrar()
    {console.log('f')},
    registrarEmpleado(){
        const url = 'http://localhost:3000/empleado';
        const datos = {
            primerNombre: this.pnombre,
            segundoNombre: this.snombre,
            primerApellido: this.papellido,
            segundoApellido: this.sapellido,
            cedula: this.ci,
            rif: this.rif,
            direccion: this.direccion,
            email: this.email,
            password: this.password,
            estado: this.estado,
            telefonos: this.telefonos
        }
        console.log(datos);
        this.axios.post(url, datos).then(response => {
            console.log(response.data);
            this.enviado=true;
            this.$router.push('/PrincipalRegistroNatural/*/%');
        }).catch(error => {
            console.log(error);
        });
    },

               
    },

    
    

    }
</script>
