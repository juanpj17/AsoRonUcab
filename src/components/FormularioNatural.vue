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
                                    <b-form-select   class="custom-select mr-sm-2  form-control " v-model="parroquia" :options="parroquias.map(item => ({ text: item.nombre_parroquia, value: item.id }))"> </b-form-select>  
                                    <!-- <b-form-select v-model="parroquia"  class="custom-select mr-sm-2  form-control altura" :options="parroquias">  </b-form-select>   -->
                                  </b-col>
                                  <b-col cols="6">
                                    <b-input  placeholder="direccion" v-model="direccion"></b-input>
                                  </b-col>
                            </b-row>
                            <b-row style="margin-top: 10px;" v-if="tipo=='%Empleado'" >
                                <b-col>
                                  <b-form-select   class="custom-select mr-sm-2  form-control " v-model="rol" :options="roles.map(item => ({ text: item.nombre_rol, value: item.id }))"> </b-form-select>  
                                </b-col>
                                <b-col >
                                  <b-input v-model="sueldo"  placeholder="Sueldo" ></b-input>
                                </b-col>
                                <!--  -->
                            </b-row>


                        </b-container>
                      
                        <div class="d-grid gap-2 mb-3" v-if="tipo=='%Empleado'">
                            <b-button @click=" registrarEmpleado()" > RegistrarE</b-button>
                        </div>
                        <div class="d-grid gap-2 mb-3" v-if="tipo=='%Cliente'">
                          <b-button @click=" registrarCliente()" > RegistrarC</b-button>
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
          sueldo:'',
          pnombre:'',
          snombre:'',
          papellido:'',
          sapellido:'',
          direccion:'',
        telefonos:[],
        roles:[],
        tipoCedula:['V','E'],
        tipoRif:['N'],
        tipCed:'V',
        tipRif:'N',
        rol:'',
        parroquia:'',
        parroquias:[],
        numeros:[],
        rolBuscado:'',
        passwordBuscado: '',
        sueldo:'',
        isModify: false


        }
      },
      mounted() {
        const cod = this.$route.query.id;
        const page = this.$route.query.proviene;
      },
      created(){
        this.obtenerParroquias()
        this.obtenerRoles()
        this.verificarModificar(this.$route.query.id)
        this.RegistrarTelefonos()
    
        console.log(this.tipo +'johohoho')
        this.id=this.$route.params.id
      },
     
    methods: {
      verificarModificar(data){
        console.log(typeof data)
        if (typeof data !== 'object') {
          console.log('modificar');
          this.isModify= true;
          this.llenarCampos(data)
        } else {
          this.isModify= false;
          console.log('agregar');
        }
     
      },
      
      buscarRol(data){
        const url = 'http://localhost:3000/api/empleado/usuario';
        const datos = {
            codigo: data
        };
        console.log(datos);
        this.axios.post(url, datos).then(response => {
            console.log(response.data);
            this.rol = response.data.rol
            console.log(this.rol)
            this.password = response.data.contrasena
        }).catch(error => {
            console.log(error);
        });
      },

      buscarTelefono(data){
        console.log(data)
        const url = 'http://localhost:3000/api/empleado/consultartelefono';
        const datos = {
            codigo: data
        };
        console.log(datos);
        this.axios.post(url, datos).then(response => {
            console.log(response.data);
            console.log(response.data.length)
            this.telefonos = []
            for (let i = 0; i < data.length; i++) {
            const item = {
              numero: response.data[i].telefono,
              id: response.data[i].telf_id
            };
            this.telefonos.push(item)
            console.log(this.telefonos)
          }
          }).catch(error => {
            console.log(error);
        });
      },
      
      llenarCampos(data){
        this.buscarRol(data)
        this.buscarTelefono(data)
        console.log(data)
        const url = 'http://localhost:3000/api/empleado/consultar';
        const datos = {
            codigo: data
        };
        console.log(datos);
        this.axios.post(url, datos).then(response => {
            console.log(response.data);
            this.ci = response.data.cedula,
            this.rif = response.data.rif,
            this.pnombre = response.data.p_nombre,
            this.snombre = response.data.s_nombre,
            this.papellido = response.data.p_apellido,
            this.sapellido = response.data.s_apellido,
            this.direccion = response.data.direccion,
            this.sueldo = response.data.sueldo,
            this.parroquia = response.data.parroquia

        }).catch(error => {
            console.log(error);
        });
      },


         
      RegistrarTelefonos(){
      this.telefonos.push({ numero: ''});
      
      },
      EliminarTelefonoSeleccionado(indice){
      this.telefonos.forEach((elemento,index) => { 
          if (indice==index){
             this.telefonos.splice(index,1)}})
      },
               
    llenarParroquias(data){
          for (let i = 0; i < data.length; i++) {
            const item = {
              nombre_parroquia: data[i].lug_nombre,
              id: data[i].lug_id
            };
            console.log(data[i].lug_nombre)            
            this.parroquias.push(item)
            console.log(item)
          }
      },

    async obtenerParroquias() {
            const url = 'http://localhost:3000/api/parroquia';
            await this.axios.get(url).then(response => {
              const parroquia = response.data;
              this.llenarParroquias(parroquia)
            }).catch(error => {
              console.log(error);
            });
        },


        llenarRoles(data){
          for (let i = 0; i < data.length; i++) {
            const item = {
              nombre_rol: data[i].nombre,
              id: data[i].codigo
            };
            console.log(data[i].nombre)            
            this.roles.push(item)
            console.log(item)
          }
      },

    async obtenerRoles() {
            const url = 'http://localhost:3000/api/roles';
            await this.axios.get(url).then(response => {
              const rol = response.data;
              
              console.log(rol)
              console.log(rol.length)
              this.llenarRoles(rol)
            }).catch(error => {
              console.log(error);
            });
        },
            modificarUsuario(){
              console.log('paso por aca')

              const url = 'http://localhost:3000/api/empleado/modificarUsuario';
              const datos = {
                clave: this.password,
                cliente1: 0,
                cliente2: '',
                codigo: this.$route.query.id,
                juridico: '',
                rol: this.rol
              };
   
                console.log(datos);
                this.axios.put(url, datos).then(response => {
                console.log(response.data);
              }).catch(error => {
            console.log(error);
              }   );
          },

          regTelefonos(data){

            console.log(data)
            const url = 'http://localhost:3000/api/empleado/telefono';
            const datos = {
              numero: data,
              codigo1: this.$route.query.id
            }

            console.log(datos);
            this.axios.post(url, datos).then(response => {
                console.log(response.data);
          
            }).catch(error => {
                console.log(error.response.data);
            });
          },
         
             registrarEmpleado(){
              
              if(this.isModify){
                this.modificarUsuario()
                const url = 'http://localhost:3000/api/empleado/modificar';
                   const datos = {
                     cedula: this.ci,
                     rif: this.rif,
                     p_nombre: this.pnombre,
                     s_nombre: this.snombre,
                     p_apellido: this.papellido,
                     s_apellido: this.sapellido,
                     direccion: this.direccion,
                     sueldo: this.sueldo,
                     parroquia: this.parroquia,
                      
                   }
               
                   console.log(datos, typeof datos);
                   this.axios.put(url, datos).then(response => {
                       console.log(response.data);
                       this.enviado=true;
                       this.$router.push('/PrincipalRegistroNatural/*/%');
                   }).catch(error => {
                       console.log(error.response.data);
                   });
              }else{

               // Esto es para que el array deje de ser reactivo, puesto que me mandan el objeto Observer
                const num = this.telefonos.map(t => t.numero).slice();
                console.log(num)
                if(this.telefonos.length>= 1 && num[0] !=''){
                  for (let i = 0; i < this.telefonos.length; i++) {
                    console.log(num[i])
                    this.regTelefonos(num[i])
                  }
                }
                   const url = 'http://localhost:3000/api/empleado';
                   const datos = {
                     cedula: this.ci,
                     rif: this.rif,
                     p_nombre: this.pnombre,
                     s_nombre: this.snombre,
                     p_apellido: this.papellido,
                     s_apellido: this.sapellido,
                     direccion: this.direccion,
                     sueldo: this.sueldo,
                     parroquia: this.parroquia,
                     contraseña: this.password,
                     rol: this.rol,
                     correo: this.email,
                     telefonos: num,
                      
                   }
               
                   console.log(datos, typeof datos);
                   this.axios.post(url, datos).then(response => {
                       console.log(response.data);
                       this.enviado=true;
                       this.$router.push('/PrincipalRegistroNatural/*/%');
                   }).catch(error => {
                       console.log(error.response.data);
                   });

              }
             },

             registrarCliente(){
                const url = 'http://localhost:3000/api/cliente/natural';
                const datos = {
                   ced: this.ci,
                   rif: this.rif,
                   p_nombre: this.pnombre,
                   s_nombre: this.snombre,
                   p_apellido: this.papellido,
                   s_Apellido: this.sapellido,
                   direccion: this.direccion,
                   parroquia: this.parroquia,
                };

                this.axios.post(url, datos).then(response => {
                  console.log(response.data);

                }).catch(error => {
                  console.log(error);
                });

            },

    },


    

    }
</script>
