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

                      <div v-if="isModify">
                        <b-container >
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
                                
                            </b-row>


                        </b-container>
                      
                        <div class="d-grid gap-2 mb-3" v-if="tipo=='%Empleado'">
                            <b-button @click=" registrarEmpleado()" style="background-color: var(--dorado)">Registrar</b-button>
                        </div>
                        <div class="d-grid gap-2 mb-3" v-if="['%Cliente', '*Nuevo'].includes(tipo)">
                          <b-button @click=" registrarCliente()" style="background-color: var(--dorado)">Registrar</b-button>
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
    tipo:'',
    cod_tipo_usuario:''
  
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
        parroquia:null,
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
        this.cod_tipo_usuario=this.$route.params.cod_tipo_usuario;
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
      
//----------------------------------------------------EMPLEADO---------------------------------------------------
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
            this.password = response.data.
            this.insertarAuditoria('Consultar','Rol')
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
          this.insertarAuditoria('Consultar','Telefono')
          }).catch(error => {
            console.log(error);
        });
      },

      buscarCorreo(data){
        const url = 'http://localhost:3000/api/empleado/consultarcorreo';
        const datos = {
            cedula: data
        };
        console.log(datos);
        this.axios.post(url, datos).then(response => {
            console.log(response.data.correo);
            this.email = response.data.correo
            this.insertarAuditoria('Consultar','Correo')
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
              this.eliminarTelefonos()
              this.modificarCorreo()
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
                this.insertarAuditoria('Modificar','Usuario')
              }).catch(error => {
            console.log(error);
              }   );
          },
        
          modificarCorreo(){
              const url = 'http://localhost:3000/api/empleado/correo';
              const datos = {
                cedula: this.$route.query.id,
                correo: this.email
              };
   
                console.log(datos);
                this.axios.put(url, datos).then(response => {
                console.log(response.data);
                this.insertarAuditoria('Modificar','Correo')
              }).catch(error => {
            console.log(error);
              }   );
          },



      eliminarTelefonos(){
            const url = 'http://localhost:3000/api/telefono/empleado';
            const datos = {
              cedula: this.$route.query.id
            }

            console.log(datos);
            this.axios.delete(url,{ data: datos }).then(response => {
                console.log(response.data);
          
            }).catch(error => {
                console.log(error.response.data);
            });
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

                  // Esto es para que el array deje de ser reactivo, puesto que me mandan el objeto Observer
                  const num = this.telefonos.map(t => t.numero).slice();
                  console.log(num)
                  if(this.telefonos.length>= 1 && num[0] !=''){
                    for (let i = 0; i < this.telefonos.length; i++) {
                      console.log(num[i])
                      this.regTelefonos(num[i])
                    }
                  }
               
                   console.log(datos, typeof datos);
                   this.axios.put(url, datos).then(response => {
                       console.log(response.data);
                       this.insertarAuditoria('Modificar','Empleado')
                      //  this.enviado=true;
                      //  this.$router.push('/PrincipalRegistroNatural/*/%');
                   }).catch(error => {
                       console.log(error.response.data);
                   });
              }else{
                console.log('aca')
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
                      
                   }
               
                   console.log(datos, typeof datos);
                   this.axios.post(url, datos).then(response => {
                       console.log(response.data);
                       this.enviado=true;
                      //  this.insertarAuditoria('Crear','Empleado')
                       this.$router.push('/PrincipalRegistroNatural/*/%');
                   }).catch(error => {
                       console.log(error.response.data);
                   });
                
                }
             },
//----------------------------------------------------Cliente---------------------------------------------------
            buscarCorreoC(data){
                    const url = 'http://localhost:3000/api/cliente/correoN';
                    const datos = {
                        cedula: data
                    };
                    console.log(datos);
                    this.axios.post(url, datos).then(response => {
                        console.log(response.data.correo);
                        this.email = response.data.correo
                        this.insertarAuditoria('Consultar','Correo')
                    }).catch(error => {
                        console.log(error);
                    });
                  },


            eliminarTelefonosC(){
                const url = 'http://localhost:3000/api/telefono/clienteN';
                const datos = {
                  cedula: this.$route.query.id
                }
                console.log(datos);
                this.axios.delete(url,{ data: datos }).then(response => {
                    console.log(response.data);
              
                }).catch(error => {
                    console.log(error.response.data);
                });
            },

          modificarUsuarioC(){
            this.eliminarTelefonosC()
            this.modificarCorreoC()
              console.log('paso por aca')
              const url = 'http://localhost:3000/api/cliente/modificarUsuarioN';
              const datos = {
                clave: this.password,
                cliente2: this.$route.query.id,
                empleado1: 0,
                empleado2: '',
                juridico: '',
                rol: 9
              };
   
                console.log(datos);
                this.axios.put(url, datos).then(response => {
                console.log(response.data);
                this.insertarAuditoria('Modificar','Usuario')
              }).catch(error => {
            console.log(error);
              }   );
          },

           regTelefonosCliente(data){

            console.log(data)
            const url = 'http://localhost:3000/api/cliente/telefono';
            const datos = {
              numero: data,
              codigo1: this.ci
            }

            console.log(datos);
            this.axios.post(url, datos).then(response => {
            console.log(response.data);
            this.insertarAuditoria('Crear','Telefono')

            }).catch(error => {
              console.log(error.response.data);
            });
          },

          buscarClaveC(data){
            const url = 'http://localhost:3000/api/cliente/usuarioN';
            const datos = {
                codigo: data
            };
            console.log(datos);
            this.axios.post(url, datos).then(response => {
                console.log(response.data);
                this.password = response.data.contrasena
            }).catch(error => {
                console.log(error);
            });
          },

          modificarCorreoC(){
              const url = 'http://localhost:3000/api/cliente/correoNatural';
              const datos = {
                cedula: this.$route.query.id,
                correo: this.email
              };
   
                console.log(datos);
                this.axios.put(url, datos).then(response => {
                console.log(response.data);
                this.insertarAuditoria('Modificar','Correo')
              }).catch(error => {
            console.log(error);
              }   );
          },
          
          registrarCliente(){
              console.log('aca')
              if(this.isModify){
                console.log('la llamo')
                this.modificarUsuarioC()
                const url = 'http://localhost:3000/api/cliente/modificarclienteN';
                   const datos = {
                     ced: this.ci,
                     rif: this.rif,
                     p_nombre: this.pnombre,
                     s_nombre: this.snombre,
                     p_apellido: this.papellido,
                     s_apellido: this.sapellido,
                     direccion: this.direccion,
                     parroquia: this.parroquia,   
                   }
                    // Esto es para que el array deje de ser reactivo, puesto que me mandan el objeto Observer
                    const num = this.telefonos.map(t => t.numero).slice();
                    console.log(num)
                    if(this.telefonos.length>= 1 && num[0] !=''){
                      for (let i = 0; i < this.telefonos.length; i++) {
                        console.log(num[i])
                        this.regTelefonosCliente(num[i])
                      }
                    }
                   console.log(datos, typeof datos);
                   this.axios.put(url, datos).then(response => {
                    this.insertarAuditoria('Modificar','Cliente_Natural')
                       console.log(response.data);
                   }).catch(error => {
                       console.log(error.response.data);
                   });
              
              }else{
                const url = 'http://localhost:3000/api/cliente/natural';
              
                const datos = {
                  p_nombre: this.pnombre,
                  s_nombre: this.snombre,
                  p_apellido: this.papellido,
                  s_apellido: this.sapellido,
                  cedula: this.ci,
                  rif: this.rif,
                  email: this.email,
                  clave: this.password,
                  parroquia: this.parroquia,
                  direccion: this.direccion,
                };
                console.log(datos)
                this.axios.post(url, datos).then(response => {
                  console.log(response.data);
                  this.insertarAuditoria('Crear','Cliente_Natural')

                }).catch(error => {
                  console.log(error);
                });
                
              }
            },

            llenarTelefonosCliente(data) {
              this.telefonos = []
              const url = 'http://localhost:3000/api/telefono/obtenerClienteN';
              const datos = {
                  cedula: data
              };
              console.log(datos);
              this.axios.post(url, datos).then(response => {
                  console.log(response.data);
              for (let i = 0; i < response.data.length; i++) {
                console.log(response.data[i].numero)
                this.telefonos.push({ numero: response.data[i].numero })
                console.log(this.telefonos)
              }
              this.telefonos.shift()
              console.log(this.telefonos)
              }).catch(error => {
                  console.log(error);
              });
            },
//----------------------------------------------------COMUNES---------------------------------------------------


      verificarModificar(data){
        console.log(data)
        console.log(typeof data)
        if (typeof data !== 'object' && data !=='*' && data !==undefined) {
          console.log('modificar');
          this.isModify= true;
          this.llenarCampos(data)
        } else {
          this.isModify= false;
          console.log('agregar');
        }
     
      },

      
      

      
      llenarCampos(data){
        if(this.$route.query.proviene == 'empleado'){
          this.buscarRol(data)
          this.buscarTelefono(data)
          this.buscarCorreo(data)
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
        }else{
          console.log(data)
          this.llenarTelefonosCliente(data)
          this.buscarCorreoC(data)
          this.buscarClaveC(data)
          const url = 'http://localhost:3000/api/cliente/natural1';
          const datos = {
            cedula: data
          };
          console.log(datos);
          this.axios.post(url, datos).then(response => {
          
            console.log(response.data);
            this.ci = data,
            this.rif = response.data.rif,
            this.pnombre = response.data.p_nombre,
            this.snombre = response.data.s_nombre,
            this.papellido = response.data.p_apellido,
            this.sapellido = response.data.s_apellido,
            this.direccion = response.data.direccion,
            this.parroquia = response.data.parroquia

          }).catch(error => {
            console.log(error);
          });
        }
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
              
              console.log(parroquia)
              console.log(parroquia.length)
              this.llenarParroquias(parroquia)
              this.insertarAuditoria('Consultar','Lugar')
            }).catch(error => {
              console.log(error);
            });
        },

        async  insertarAuditoria(Accion,Tabla){
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
