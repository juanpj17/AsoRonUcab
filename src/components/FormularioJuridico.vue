<template>
    <div style="margin-top: -50px;">
        <br>
        <section class="container" style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
            <div style="background-color: var(--carne)" class="row content d-flex justify-content-center align-items-center">
                <div class="col-md-9 principal" style="z-index: 50;">
               
                    <div class="box  bg-white p-4 ">
                        
                        <b-alert show variant="danger" v-if="enviado">Campos vacíos</b-alert>
                        
                      <form class="mb-3">
                        <div class="row">
                        <div class=" col form-group form-floating mb-3">
                           <input type="text" class="form-control rounded-2 altura" placeholder="nombre" v-model="nombre">
                           <label>  Denominación Comercial</label> 
                           <div style="height: 25px"></div>
                        </div>
                        <div class=" col form-group form-floating mb-3">
                           <input type="text" class="form-control rounded-2 altura"  placeholder="RazonSocial" v-model="apellido">
                           <label>Razón social</label> 
                           <div style="height: 25px"></div>
                      </div>
                    </div>
                    <div class="row">
    
                        <div class=" col form-group form-floating mb-3">
                            <input type="text" class="form-control rounded-2 altura"  placeholder="PagWeb" v-model="nombre">
                            <label> Página web</label> 
                            <div style="height: 25px"></div>
                        </div>
                        <div class=" col form-group form-floating mb-3">
                             <input type="text" class="form-control rounded-2 altura"  placeholder="CapDip" v-model="apellido">
                             <label > Capital Disponible</label> 
                             <div style="height: 25px"></div>
       
                        </div>
                    </div>

                        <div class="row">
                          <div class="col form-group">
                            <label style="color: gray; font-size: 16px">Ej:314531181</label>
                              <div class="form-floating mb-3">
                                  <input type="text" class="form-control rounded-2 altura"  placeholder="rif" v-model="numDoc">
                                  <label>Rif</label>
                              </div>
                          </div>
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
                                    <label>Ingrese el número</label>
                                  </div>
                              </b-col>
                              <b-col cols="1" ><b-button @click=" EliminarTelefonoSeleccionado(index)"  variant="light"><b-icon icon="trash" style="color: #df5b5b"></b-icon></b-button></b-col>
                            </b-row>
                            </b-container>
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
      
                        <div class="row">
                            <div class="col form-group form-floating mb-3">
                              <b-form-select v-model="estado"  class="custom-select mr-sm-2  form-control altura" :options="[ 'Amazonas', 'Anzoátegui', 'Apure', 'Aragua', 'Barinas', 'Bolívar', 'Carabobo', 'Cojedes', 'Delta Amacuro', 'Dependencias Federales',' Distrito Federal',' Falcón', 'Guárico', 'Lara', 'Mérida', 'Miranda', 'Monagas', 'Nueva Esparta', 'Portuguesa', 'Sucre', 'Táchira', 'Trujillo', 'Vargas', 'Yaracuy', 'Zulia']" :value="null"> 
                              </b-form-select>  
                              <label>Seleccione</label>
                                                       
                            </div>
                          <div class="col form-group">
                              <div class="form-floating mb-3">
                                  <input type="text" class="form-control rounded-2 altura"   placeholder="direccion" v-model="direccion">
                                  <label >Dirección</label>
                                  
                              </div>
                          </div>
                        </div>

                        
                        <div class="row">
                            <div class="col form-group form-floating mb-3">
                              <b-form-select v-model="estado"   class="custom-select mr-sm-2  form-control altura" :options="[ 'Amazonas', 'Anzoátegui', 'Apure', 'Aragua', 'Barinas', 'Bolívar', 'Carabobo', 'Cojedes', 'Delta Amacuro', 'Dependencias Federales',' Distrito Federal',' Falcón', 'Guárico', 'Lara', 'Mérida', 'Miranda', 'Monagas', 'Nueva Esparta', 'Portuguesa', 'Sucre', 'Táchira', 'Trujillo', 'Vargas', 'Yaracuy', 'Zulia']" :value="null"> 
                              </b-form-select>  
                              <label >Seleccione</label>
                                      
                            </div>
                          <div class="col form-group">
                              <div class="form-floating mb-3">
                                  <input type="text" class="form-control rounded-2 altura"  placeholder="direccion" v-model="direccion">
                                  <label>Dirección</label>
                              </div>
                          </div>
                        </div>
                  

                        <div class="d-grid gap-2 mb-3">
                            <button type="button" class="btn btn-primary btn-lg border-0 rounded-3"  @click="RegistroNatural()" >Registrar</button>
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
    id:''
  },
    data() {
      return {
          correos: [],
          password: '',
          nombreCompleto:'',
          numDoc:'',
          direccion:'',
          enviado:false,
          tipDoc:'',
          estado:'',
          nombre:'',
          apellido:'',
          telefonos:[]


        }
      },
      created(){
       this.RegistrarCorreo()
       this.RegistrarTelefonos() 
      },
    
    
     
        
    methods: {
       RegistroNatural(){
        if (this.$route.path!='/PrincipalRegistroNatural/*/*')
           this.$router.push('/PrincipalRegistroNatural/*/*');
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

      }
         
               
    },
    

    }
</script>
