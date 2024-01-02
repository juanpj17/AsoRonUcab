<template>
    <div style="margin-top: -50px;">
        <br>
        <section class="container" style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
            <div style="background-color: var(--carne)" class="row content d-flex justify-content-center align-items-center">
                <div class="col-md-9 principal" style="z-index: 50;">
               
                    <div class="box  bg-white p-4 ">
                        
                      <form class="mb-3">
                        <div class="row">
                        <div class=" col form-group form-floating mb-3">
                           <input type="text" class="form-control rounded-2 altura" placeholder="nombre" v-model="denominacionCom">
                           <label>  Denominación Comercial</label> 
                           <div style="height: 25px"></div>
                        </div>
                        <div class=" col form-group form-floating mb-3">
                           <input type="text" class="form-control rounded-2 altura"  placeholder="RazonSocial" v-model="RazonSoc">
                           <label>Razón social</label> 
                           <div style="height: 25px"></div>
                      </div>
                    </div>
                    <div class="row">
    
                        <div class=" col form-group form-floating mb-3">
                            <input type="text" class="form-control rounded-2 altura"  placeholder="PagWeb" v-model="PaginaW">
                            <label> Página web</label> 
                            <div style="height: 25px"></div>
                        </div>
                        <div class=" col form-group form-floating mb-3">
                             <input type="text" class="form-control rounded-2 altura"  placeholder="CapDip" v-model="Capital">
                             <label > Capital Disponible</label> 
                             <div style="height: 25px"></div>
       
                        </div>
                    </div>

                    <b-container>
                      <b-row>
                          <b-col>
                              <b-form-select :options="tipoRif" v-model="tipRif" class="custom-select mr-sm-2  form-control altura" ></b-form-select>
                          </b-col>
                          <b-col cols="11">
                              <b-input  placeholder="Rif" v-model="numDoc"></b-input>
                          </b-col>
                        </b-row>
                      </b-container>
                      <div v-if="isModify">
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
                                    <label>Ingrese el número</label>
                                  </div>
                              </b-col>
                              <!-- <b-col cols="1" ><b-button @click=" EliminarTelefonoSeleccionado(index)"  variant="light"><b-icon icon="trash" style="color: #df5b5b"></b-icon></b-button></b-col> -->
                            </b-row>
                            </b-container>
                            </div>


  
                          </div>
                          <b-container>
                            <b-row>
                                
                                <b-col cols="11"><p style="text-align: left;">Registrar correos</p></b-col>
                                <b-col cols="1" style="margin-bottom: 25px;">   <b-button @click=" RegistrarCorreo()" style="border-radius: 110%;"  variant="light">  <b-icon icon="plus-circle" scale="2" style="height: 20px !important; color: var(--verde) "></b-icon></b-button></b-col>
                              </b-row>
                            </b-container> 
                        <div v-for="(elemento, index) in correos" :key="index">
                          <b-container style="margin-bottom: 10px;">
                            <b-row>
                              <b-col cols="11">
                                  <div class="col form-group form-floating mb-2">
                                   <b-input v-model="elemento.direccion" class="altura"></b-input>
                                    <label>Ingrese la dirección de correo electrónico</label>
                                  </div>
                              </b-col>
                              <b-col cols="1" ><b-button @click=" EliminarCorreoSeleccionado(index)"  variant="light"><b-icon icon="trash" style="color: #df5b5b"></b-icon></b-button></b-col>
                            </b-row>
                            </b-container>
                            </div>
                        <label>Debe estar en el rango de 6-15 caracteres</label>
                        <div class="form-floating mb-3">
                           <input type="password" class="form-control rounded-2 altura"   placeholder="password" v-model="password">
                           <label >Password</label>
                        
                        </div>
      
                        <b-container>
                          <b-row>
                            <b-col cols="6">
                              <b-form-select  class="custom-select mr-sm-2 form-control " v-model="parroquiaFisica" :options="parroquias.map(item => ({ text: item.nombre_parroquia, value: item.id }))"> </b-form-select>  
                              <!-- <b-form-select v-model="parroquiaFisica"   class="custom-select mr-sm-2  form-control altura"  :options="parroquias"> </b-form-select> -->
                            </b-col>
                            <b-col cols="6">
                              <b-input  placeholder="Direccion fisica" v-model="direccionFisica"></b-input>
                            </b-col>
                          </b-row>
                          <b-row style="margin-top: 10px;">
                              <b-col cols="6">
                                <b-form-select   class="custom-select mr-sm-2  form-control " v-model="parroquiaFiscal" :options="parroquias.map(item => ({ text: item.nombre_parroquia, value: item.id }))"> </b-form-select>  
                                <!-- <b-form-select v-model="parroquiaFiscal"   class="custom-select mr-sm-2  form-control altura" :options="parroquias" > </b-form-select> -->
                              </b-col>
                              <b-col cols="6">
                              <b-input  placeholder="Direccion fiscal" v-model="direccionFiscal" ></b-input>
                            </b-col>
                          </b-row>
                          <!-- <b-row style="margin-top: 10px;">
                              <b-col v-if="tipoUsuario=='%ClienteJ'">
                                <b-form-select :options="Roles" v-model="rol" class="custom-select mr-sm-2  form-control altura" ></b-form-select>
                              </b-col>
                          </b-row> -->
                        </b-container>
                  

                        <div class="d-grid gap-2 mb-3" style="margin-top: 10px;">
                            <button type="button" class="btn btn-primary btn-lg border-0 rounded-3"  @click="registrarCliente()" >Registrar</button>
                        </div>
                      </form>

                  </div>
              </div>
           </div>
        </section>
      </div>  
      </template>
<script>;
export default {
  props:{
    id:'',
    tipoUsuario:''
  },
    data() {
      return {
          denominacionCom:'',
          RazonSoc:'',
          PaginaW:'',
          Capital:'',
          correos:[],
          password: '',
          numDoc:'',
          tipDoc:'',
          telefonos:[],
          tipoRif:['J','G'],
          tipRif:'J',
          parroquias:[],
          parroquiaFiscal:'',
          parroquiaFisica:'',
          direccionFisica:'',
          direccionFiscal:'',
          Roles:['Administrador','vendedor','cajero','cliente'],
          rol:'cliente',
          numAntiguos: []


        }
      },
      mounted() {
        const cod = this.$route.query.id;
        const page = this.$route.query.proviene;
      },
      created(){

        this.obtenerParroquias()
        this.verificarModificar(this.$route.query.id)
         this.RegistrarCorreo()
         this.RegistrarTelefonos() 
     
      },

 
    
     
        
    methods: {
//---------------AQUI ES AL REVES LA CONDICION QUE EN EL NATURAL AQUI SI ES UN OBJECT ES MODIFICAR-----------------
      verificarModificar(data){
        console.log(data)
        console.log(typeof data)
        if (typeof data == 'object') {
          console.log('modificar');
          this.isModify= true;
          this.llenarCampos(data)
        } else {
          this.isModify= false;
          console.log('agregar');
        }
     
      },

      obtenerClave(id){
        const url = 'http://localhost:3000/api/cliente/consultarUsuarioJ'; 
          const datos = {
            rif: id
          };
          console.log(datos);
          this.axios.post(url, datos).then(response => {
            console.log(response.data);
            this.password = response.data.clave
         
          }).catch(error => {
            console.log(error);
          });
      },

      buscarTelefono(id){
        const url = 'http://localhost:3000/api/cliente/consultarTelefonoJ'; 
          const datos = {
            codigo: id
          };
          console.log(datos);
          this.axios.post(url, datos).then(response => {
            console.log(response.data);
            for (let i = 0; i < response.data.length; i++) {
              this.telefonos.push({ numero: response.data[i].telefono})
            }
            this.numAntiguos = this.this.telefonos.map(t => t.numero).slice();
            console.log(this.numAntiguos)
          }).catch(error => {
            console.log(error);
          });
      },


      llenarCampos(data){
        this.lugarPersona(data.Documento, 'Fisica')
        this.lugarPersona(data.Documento, 'Fiscal')
        this.obtenerClave(data.Documento)
        this.buscarTelefono(data.Documento)
          console.log(data)
          const url = 'http://localhost:3000/api/cliente/consultarJ'; 
          const datos = {
            rif: data.Documento
          };
          console.log(datos);
          this.axios.post(url, datos).then(response => {
            console.log(response.data);
 
            this.numDoc = data.Documento,
            this.denominacionCom = response.data.denominacion_comercial,
            this.RazonSoc = response.data.razon_social,
            this.PaginaW= response.data.pagina_web,
            this.direccionFiscal = response.data.direccion_fiscal,
            this.direccionFisica = response.data.direccion_fisica,
            this.Capital  = response.data.capital

          }).catch(error => {
            console.log(error);
          });

      },


       RegistroNatural(){
        if (this.$route.path!='/PrincipalRegistroNatural/*/NuevoPersonaC')
           this.$router.push('/PrincipalRegistroNatural/*/NuevoPersonaC');
       },
        
            
            RegistrarTelefonos(){
      this.telefonos.push({ numero: ''});
      },
      EliminarTelefonoSeleccionado(indice){
      this.telefonos.forEach((elemento,index) => { 
          if (indice==index){
             this.telefonos.splice(index,1)
          }
      })

      },
      RegistrarCorreo(){
      this.correos.push({ direccion: ''});
      },

      EliminarCorreoSeleccionado(indice){
      this.correos.forEach((elemento,index) => { 
          if (indice==index){
             this.correos.splice(index,1)
          }
      })

      },


      regTelefonos(data){
            console.log(data)
            const num = this.numAntiguos.map(t => t.numero).slice();
            console.log(num[1])
            console.log(this.$route.query.id)
            const num1 = this.telefonos.map(t => t.numero).slice();
            console.log(num1)
            for (let i = 0; i < num1.length; i++) {
              const url = 'http://localhost:3000/api/cliente/insertarTelefonoJ';
              if(num[i] == undefined){
                num[i] = ''
              }
              console.log(num[i])
              const datos = {
                num1: num[i],
                num2: num1[i],
                codigo: this.$route.query.id.Documento
              }

            console.log(datos);
            this.axios.post(url, datos).then(response => {
                console.log(response.data);
          
            }).catch(error => {
                console.log(error.response.data);
            });
            };
            
        },


      lugarPersona(id, direc){
        const url = 'http://localhost:3000/api/cliente/lugarPersona'; 
          const datos = {
            tipo: direc,
            rif: id
          };
          console.log(datos);
          this.axios.post(url, datos).then(response => {
            console.log(response.data);
            if(direc == 'Fisica'){
              this.parroquiaFisica = response.data.lugar
            }else{
              this.parroquiaFiscal = response.data.lugar
            }

          
          }).catch(error => {
            console.log(error);
          });
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
            }).catch(error => {
              console.log(error);
            });
        },
        registrarCliente(){
          if(this.isModify){
            console.log(this.telefonos)
            console.log(this.correos)
          //  Esto es para que el array deje de ser reactivo, puesto que me mandan el objeto Observer
            const num = this.telefonos.map(t => t.numero).slice();
            console.log(num)
            const correo = this.correos.map(c => c.direccion).slice();
            console.log(correo)
            // this.regTelefonos(this.$route.query.id)
            const url = 'http://localhost:3000/api/cliente/modificarPostJ';
               const datos = {
                 denominacion_comercial: this.denominacionCom,
                 razon_social: this.RazonSoc,
                 pagina_web: this.PaginaW,
                 capital_disponible: this.Capital,   
                 rif: this.numDoc,
                 clave: this.password,
                 parroquia_fisica: this.parroquiaFisica,
                 direccion_fisica: this.direccionFisica,
                 parroquia_fiscal: this.parroquiaFiscal,
                 direccion_fiscal: this.direccionFiscal,
                 paraNull: null,
                 tipoFa : 'Fisica',
                 tipoFl: 'Fiscal'
               }
               console.log(datos, typeof datos);
               this.axios.post(url, datos).then(response => {
                   console.log(response.data);
                   this.enviado=true;
                
               }).catch(error => {
                   console.log(error.response.data);
               });
          }else{
        
            console.log(this.parroquia)
               const url = 'http://localhost:3000/api/cliente/juridico';
             
               const datos = {
                 denominacion_comercial: this.denominacionCom,
                 razon_social: this.RazonSoc,
                 pagina_web: this.PaginaW,
                 capital_disponible: this.Capital,   
                 rif: this.numDoc,
                 clave: this.password,
                 parroquia_fisica: this.parroquiaFisica,
                 direccion_fisica: this.direccionFisica,
                 parroquia_fiscal: this.parroquiaFiscal,
                 direccion_fiscal: this.direccionFiscal,
                 tipo_fisica: 'Fisica',
                 tipo_fiscal: 'Fiscal'
               }
           
               console.log(datos, typeof datos);
               this.axios.post(url, datos).then(response => {
                   console.log(response.data);
                   this.enviado=true;
                
               }).catch(error => {
                   console.log(error.response.data);
               });

          }
             },
     
               
    },
    

    }
</script>
