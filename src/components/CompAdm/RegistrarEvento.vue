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
                        <div class="row" style="margin-top: 10px;">
                            <div class=" col form-group form-floating mb-3">
                                 <input type="date" class="form-control rounded-2" v-model="fecha_inicio">
                                 <label> Fecha de inicio</label> 
                                 
                            </div>
                            <div class=" col form-group form-floating mb-3">
                                 <input type="date" class="form-control rounded-2" v-model="fecha_fin">
                                 <label> Fecha de fin</label> 
                            </div>
                        </div>

                        <div class="row"  style="margin-top: 10px;">
                            <div class="col form-group form-floating mb-3 ">
                                 <input type="text" class="form-control rounded-2 " v-model="numEnt">
                                 <label>Cantidad de entradas disponibles</label>
                            </div>
                        </div>
                        
                        <div class="row"  style="margin-top: 10px;">
                            <div class="col form-group form-floating mb-3">
                                 <b-form-select  class="custom-select mr-sm-2  form-control" v-model="estado" :options="Estados"> </b-form-select>  
                                 <label>Seleccione/Estado</label>
                                              
                            </div>
                            <div class="col form-group form-floating mb-3">
                                 <b-form-select  class="custom-select mr-sm-2  form-control" v-model="municipio" :options="Municipios"> </b-form-select>  
                                 <label>Seleccione/Municipo</label>
                                              
                            </div>
                            <div class="col form-group form-floating mb-3">
                                 <b-form-select   class="custom-select mr-sm-2  form-control" v-model="parroquia" :options="Parroquias"> </b-form-select>  
                                 <label>Seleccione/Parroquia</label>
                                        
                            </div>
                        </div>
                        <div class="col form-group"  style="margin-top: 10px;">
                            <div class="form-floating mb-3">
                                  <input type="text" class="form-control rounded-2"  v-model="direccion">
                                  <label>Direccion</label>
                                
                            </div>
                          </div>
                        <b-container>
                            <b-row>
                                
                                <b-col cols="11"><p style="text-align: left;">Provedores Participantes</p></b-col>
                                <b-col cols="1" style="margin-bottom: 25px;">   <b-button @click=" RegistrarInventario()" style="border-radius: 110%;"  variant="light">  <b-icon icon="plus-circle" scale="2"></b-icon></b-button></b-col>
                              </b-row>
                        </b-container>
                                                
                        <div v-for="(elemento, index) in inventario" :key="index">
                          <b-container style="margin-bottom: 10px;">
                            <b-row>
                              <b-col cols="4">
                                  <div class="col form-group form-floating mb-2">
                                    <b-form-select  class="custom-select mr-sm-2  form-control" v-model="elemento.Proveedor"  :options="Estados"> </b-form-select>  
                                    <label>Seleccione/Proveedor</label>
                                  </div>
                              </b-col>
                              <b-col cols="3">
                                <div class="col form-group form-floating mb-3">
                                  <b-form-select  class="custom-select mr-sm-2  form-control" v-model="elemento.Proveedor" :options="Estados"> </b-form-select>
                                  <label>Seleccione/Producto</label>
                                </div>
                               </b-col>
                              <b-col cols="2">
                                <div class="col form-group form-floating mb-3">
                                  <b-input v-model="elemento.cantidad"></b-input>
                                  <label>Cantidad</label>
                                </div>
                              </b-col>
                              <b-col cols="2">
                                <div class="col form-group form-floating mb-3">
                                  <b-input v-model="elemento.precio"></b-input>
                                  <label>Precio</label>
                                </div>
                              </b-col>
                              <b-col cols="1" ><b-button @click=" EliminarProveedorSeleccionado(index)"  variant="light"><b-icon icon="trash"></b-icon></b-button></b-col>
                            </b-row>
                          </b-container>
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
<script>

export default {
  props:{
    id:'',
  },
    data() {
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
        Estados:[ 'Amazonas', 'Anzoátegui', 'Apure', 'Aragua', 'Barinas', 'Bolívar', 'Carabobo', 'Cojedes', 'Delta Amacuro', 'Dependencias Federales',' Distrito Federal',' Falcón', 'Guárico', 'Lara', 'Mérida', 'Miranda', 'Monagas', 'Nueva Esparta', 'Portuguesa', 'Sucre', 'Táchira', 'Trujillo', 'Vargas', 'Yaracuy', 'Zulia'],
        Municipios:['1','2','3'],
        Parroquias:['a','b','c'],
        inventario:[],

        }
      
      },
      created(){
        this.RegistrarInventario()
        this.id=this.$route.params.id
      },

    methods: {
    RegistrarInventario(){
      this.inventario.push({ Proveedor: '', cantidad: '' ,precio:''});
        console.log(this.Inventario)
        this.guardar=true
      },
      EliminarProveedorSeleccionado(indice){
      this.inventario.forEach((elemento,index) => { 
          if (indice==index){
            if(index==0){
              this.inventario.shift()
            }
            else
            { this.inventario.splice(index,1)
            console.log(this.inventario )}
          }
      })

      }
               
    },
    

    }
</script>
