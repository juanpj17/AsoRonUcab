<template>
  <div >
      <h1 class="titulos">Registro de Eventos</h1>
        <!--Registro de datos-->
        <section class="container" style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
            <div style="background-color: var(--carne)" class="row content d-flex justify-content-center align-items-center">
                <div class="col-md-10 principal" style="z-index: 50;">
                    <div class="box  bg-white p-4 " >
                        <form class="mb-3">
                        <div class="row">
                             <div class=" col form-group form-floating mb-3">
                                 <input type="text" class="form-control rounded-2 altura" v-model="nombre">
                                 <label>  Nombre del Evento</label> 
                             </div>
                             <div class=" col form-group form-floating mb-3">
                                 <input type="text" class="form-control rounded-2 altura" v-model="descripcion">
                                 <label>Descripción</label> 
                             </div>
    
                         </div>
                        <div class="row" style="margin-top: 10px;">
                            <div class=" col form-group form-floating mb-3">
                                 <input type="date" class="form-control rounded-2 altura" v-model="fecha_inicio">
                                 <label> Fecha de inicio</label> 
                                 
                            </div>
                            <div class=" col form-group form-floating mb-3">
                                 <input type="date" class="form-control rounded-2 altura" v-model="fecha_fin">
                                 <label> Fecha de fin</label> 
                            </div>
                        </div>

                        <div class="row"  style="margin-top: 10px;">
                            <div class="col form-group form-floating mb-3 ">
                                 <input type="text" class="form-control rounded-2 altura" v-model="numEnt">
                                 <label>Cantidad de entradas disponibles</label>
                            </div>
                            <div class="col form-group form-floating mb-3 ">
                              <input type="text" class="form-control rounded-2 altura" v-model="precioXEntrada">
                              <label>Precio por entrada</label>
                         </div>
                        </div>
                        
                        <div class="row"  style="margin-top: 10px;">
                            <!-- <div class="col form-group form-floating mb-3">

                                 <b-form-select  class="custom-select mr-sm-2  form-control altura" v-model="estado" :options="Estados"> </b-form-select>  
                                 <label>Seleccione</label>
                                              
                            </div>
                            <div class="col form-group form-floating mb-3">
                                 <b-form-select  class="custom-select mr-sm-2  form-control altura" v-model="municipio" :options="Municipios"> </b-form-select>  
                                 <label>Seleccione</label>
                                              
                            </div>
                            <div class="col form-group form-floating mb-3">
                                 <b-form-select   class="custom-select mr-sm-2 altura  form-control" v-model="parroquia" :options="Parroquias"> </b-form-select>  
                                 <label>Seleccione</label>

                                 <b-form-select  class="custom-select mr-sm-2  form-control altura" v-model="estado" :options="Estados"> </b-form-select>  
                                 <label>Seleccione/Estado</label>
                                              
                            </div>
                            <div class="col form-group form-floating mb-3">
                                 <b-form-select  class="custom-select mr-sm-2  form-control altura" v-model="municipio" :options="Municipios"> </b-form-select>  
                                 <label>Seleccione/Municipo</label>
                                              
                            </div> -->
                            <div class="col form-group form-floating mb-3">
                                 <b-form-select   class="custom-select mr-sm-2  form-control " v-model="parroquia" :options="parroquias.map(item => ({ text: item.nombre_parroquia, value: item.id }))"> </b-form-select>  
                                 <label>Seleccione/Parroquia</label>

                                        
                            </div>
                        </div>
                        <div class="col form-group"  style="margin-top: 10px;">
                            <div class="form-floating mb-3">
                                  <input type="text" class="form-control rounded-2 altura"  v-model="direccion">
                                  <label>Dirección</label>
                                
                            </div>
                          </div>

                        
<!-------------------Todo a partir de aquí es solo para el input de seleccion de provedores---------------------------------->

                    <div >
                          <b-form-group label-for="tags-with-dropdown" style="border: transparent">
                                <b-form-tags id="tags-with-dropdown" v-model="value" no-outer-focus class="mb-2" style="border: transparent">
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

                                        <b-dropdown size="sm" variant="outline-secondary" block menu-class="w-100" class="centrado">
                                            <template #button-content >
                                                <b-icon icon="person-plus-fill"></b-icon> Seleccione prveedores
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

<!-------------------------------Se acabo el boton select y empiaza el boton de guardar--------------------------------->

                    <div v-if="isModify">
                        <b-container>
                            <b-row>
                                
                                <b-col cols="11"><p style="text-align: left;">Provedores Participantes</p></b-col>
                                <b-col cols="1" style="margin-bottom: 25px;">   <b-button @click=" RegistrarInventario()" style="border-radius: 110%;"  variant="light">  <b-icon icon="plus-circle" scale="2" style="height: 20px !important; color: var(--verde) "></b-icon></b-button></b-col>
                              </b-row>
                        </b-container>
                                                
                        <div v-for="(elemento, index) in inventario" :key="index">
                          <b-container style="margin-bottom: 10px;">
                            <b-row>
                              <b-col cols="4">
                                  <div class="col form-group form-floating mb-2">
                                    <b-form-select   
                                      class="custom-select mr-sm-2  form-control " 
                                      v-model="inventario[index].proveedor" 
                                      :options="proveedores.map(item => ({ text: item.Nombre, value: item.Rif }))"
                                      @change="filtrarProductosPorProveedor(index)"
                                      > </b-form-select>  
                                    <!-- <b-form-select  class="custom-select mr-sm-2  form-control" v-model="elemento.Proveedor"  :options="Estados"> </b-form-select>   -->
                                    <label>Seleccione/Proveedor</label>
                                  </div>
                              </b-col>
                              <b-col cols="3">
                                <div class="col form-group form-floating mb-3">
                                  <b-form-select  class="custom-select mr-sm-2  form-control " v-model="inventario[index].productoFiltrado" :options="inventario[index].productos.map(item => ({ text: item.nombre_producto, value: item.codigo }))"> </b-form-select>  
                                  <!-- <b-form-select  class="custom-select mr-sm-2  form-control " v-model="elemento.Proveedor" :options="productosFiltrados"> </b-form-select> -->
                                  <label>Seleccione/Producto</label>
                                </div>
                               </b-col>
                              <b-col cols="2">
                                <div class="col form-group form-floating mb-3">
                                  <b-input v-model="elemento.cantidad" class="altura"></b-input>
                                  <label>Cantidad</label>
                                </div>
                              </b-col>
                              <b-col cols="2">
                                <div class="col form-group form-floating mb-3">
                                  <b-input v-model="elemento.precio" class="altura"></b-input>
                                  <label>Precio</label>
                                </div>
                              </b-col>
                              <b-col cols="1" ><b-button @click=" EliminarProveedorSeleccionado(index)"  variant="light"><b-icon icon="trash" style="color: #df5b5b"></b-icon></b-button></b-col>
                            </b-row>
                          </b-container>
                       </div>       
                    </div>
                    <div class="d-grid gap-2 mb-3">
                        <button type="button" class="btn  btn-lg border-0 rounded-3 " style="background-color: var(--vinotinto); color: white" @click="registrarEvento()">Guardar</button>
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
  cod_tipo_usuario:''
  },
    data() {
      return {
        inventario:[
          {proveedor: null, productos: [], cantidad:0, precio: 0, productoFiltrado: null}
        ],
         numEnt:0,
         direccion:'',
          descripcion:'',
          estado:'',
          municipio:'',
          parroquia:null,
          proveedor: null,
          // productoFiltrado: null,
          nombre:'',
          fecha_fin:'',
          fecha_inicio:'',
          max_e: '',
        Estados:[ 'Amazonas', 'Anzoátegui', 'Apure', 'Aragua', 'Barinas', 'Bolívar', 'Carabobo', 'Cojedes', 'Delta Amacuro', 'Dependencias Federales',' Distrito Federal',' Falcón', 'Guárico', 'Lara', 'Mérida', 'Miranda', 'Monagas', 'Nueva Esparta', 'Portuguesa', 'Sucre', 'Táchira', 'Trujillo', 'Vargas', 'Yaracuy', 'Zulia'],
        Municipios:['1','2','3'],
        parroquias:[],
        inventario:[],
        proveedores:[],
        productosFiltrados:[],
        isModify: true,
        precioXEntrada: 0,
        calcularDias: 0
        }
      
      },
      mounted() {
        const cod = this.$route.query.codigo;
        this.cod_tipo_usuario=this.$route.params.cod_tipo_usuario
        
      },
      created(){
        this.verificarModificar(this.$route.query.codigo)
        console.log(this.$route.query.codigo)
        this.obtenerParroquias()
        this.ultimoEvento()
        this.obtenerProveedores()
        this.RegistrarInventario()
        this.id=this.$route.params.id
      },

    methods: {
      verificarModificar(data){
        if(data != undefined){
          console.log('modificar')
          console.log(data)
          this.llenarCampos(data)
          this.isModify= false;
        }else{
          console.log('registrar')
          console.log(data)
          this.isModify= true;
        }
      },
      obtenerPrecioxentrada(id){
          console.log(id)
          const url = 'http://localhost:3000/api/entrada/entradaPrecio';
          const datos = {
            cod: id,
          };
   
          console.log(datos);
          this.axios.post(url, datos).then(response => {
            console.log(response.data);
            this.precioXEntrada = response.data[0].obtener_cantidad_entrada
            this.insertarAuditoria('Consultar','Entrada')
          }).catch(error => {
            console.log(error);
          });
      }, 

      


      llenarCampos(data){
        this.obtenerPrecioxentrada(data)
        console.log(data)
        const url = 'http://localhost:3000/api/evento/consultar';
        const datos = {
            codigo: data
        };
        console.log(datos);
        this.axios.post(url, datos).then(response => {
            console.log(response.data);
            //esto es para convertir la fecha al fromato solicitado
            const fecha_cortada_inicial = response.data.fecha_hora_inicial.slice(0, 10);
            const fecha_cortada_final = response.data.fecha_hora_final.slice(0, 10);
            console.log(fecha_cortada_inicial); 
            console.log(fecha_cortada_final);   
            this.nombre = response.data.nombre,
            this.descripcion =  response.data.descripcion
            this.numEnt = response.data.num_entradas, 
            this.fecha_inicio = fecha_cortada_inicial, 
            this.fecha_fin = fecha_cortada_final, 
            this.direccion = response.data.direccion,
            this.parroquia = response.data.parroquia
            this.insertarAuditoria('Consultar','Evento')

        }).catch(error => {
            console.log(error);
        });
      },
    RegistrarInventario(){
      this.inventario.push({ proveedor: null, cantidad: 0 ,precio:0, productos:[], productoFiltrado: null});
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

      },

      llenarProductos(data, index){
         const producto1 = []
          for (let i = 0; i < data.length; i++) {
            const item = {
              nombre_producto: data[i].nombre_presentacion,
              codigo: data[i].presentacion_id
            };
            producto1.push(item)
          }
          this.inventario[index].productos=producto1;
          console.log(this.inventario)
        },

      async filtrarProductosPorProveedor(index){
        console.log('aqui?')
        const proveedorSeleccionado = this.inventario[index].proveedor;
        const url = 'http://localhost:3000/api/proveedor/PxP';
        console.log(proveedorSeleccionado)
        await this.axios.post(url, {params:{proveedor:proveedorSeleccionado}}).then(response => {
              const producto = response.data;
              console.log(producto)
                this.llenarProductos(producto, index)
                this.insertarAuditoria('Consultar','Presentacion')
            }).catch(error => {
              console.log(error);
            });
      },

      async ultimoEvento(){
        const url = 'http://localhost:3000/api/evento/ultimo'
        await this.axios.get(url).then(response => {
              const numE = response.data;
              console.log(response.data)
             this.max_e = numE[0].codigo +1;
             console.log(this.max_e)
            }).catch(error => {
              console.log(error);
          
            });

      },

      regPresentacionEvento(data){
        // this.ultimoEvento()
        console.log(data.cantidad)
        console.log(data.productoFiltrado)
        const url = 'http://localhost:3000/api/evento/actual';
        const datos = {
            cantidad: data.cantidad,
            precio: data.precio,
            cod_presentacion: data.productoFiltrado,
            cod_evento: this.max_e,
            cod_premio: 1,
        };
   
        console.log(datos);
        this.axios.post(url, datos).then(response => {
            console.log(response.data);
            this.insertarAuditoria('Registrar','Presentacion_Evento')
          
        }).catch(error => {
            console.log(error);
        });
      },
      regEntrada(){
          console.log('por aca')
          const url = 'http://localhost:3000/api/entrada';
          const datos = {
            codigo: this.max_e,
            fecha_inicial: this.fecha_inicio, 
            fecha_final: this.fecha_fin, 
            precio: this.precioXEntrada 
          };
   
          console.log(datos);
          this.axios.post(url, datos).then(response => {
            this.insertarAuditoria('Registrar','Entrada')
            console.log(response.data);
          }).catch(error => {
            console.log(error);
          });

      },

      calcularDias(){
          console.log('por aca')
          const url = 'http://localhost:3000/api/entrada/calculo';
          const datos = {
            fecha_i: this.fecha_inicio, 
            fecha_f: this.fecha_fin, 
          };
   
          console.log(datos);
          this.axios.post(url, datos).then(response => {
            console.log(response.data);
            this.calcularDias = response.data.calcular_dias_entre_fechas
            console.log(this.calcularDias)
          }).catch(error => {
            console.log(error);
          });

      },

      modificarPrecioEntrada(){
    
          const url = 'http://localhost:3000/api/entrada';
          const datos = {
            codigo: this.$route.query.codigo, 
            precio: this.precioXEntrada, 
          };
   
          console.log(datos);
          this.axios.put(url, datos).then(response => {
            console.log(response.data);
            this.insertarAuditoria('Modificar','Entrada')
          
          }).catch(error => {
            console.log(error);
          });

      },
      


      registrarEvento(){
    
        if(this.isModify){
          // this.calcularDias()
          console.log('aca?')
          
          console.log(this.parroquia)
          const url = 'http://localhost:3000/api/evento';
          const datos = {
            nombre: this.nombre,
            descripcion: this.descripcion, 
            num_entradas: this.numEnt, 
            fecha_hora_inicial: this.fecha_inicio, 
            fecha_hora_final: this.fecha_fin, 
            direccion: this.direccion,
            parroquia: this.parroquia
          };
   
          console.log(datos);
          this.axios.post(url, datos).then(response => {
            console.log(response.data);
            this.insertarAuditoria('Crear','Evento')
            const num = this.inventario.map(t => t.numero).slice();
            if(this.numEnt > 0){
              this.regEntrada()
            }
            console.log(this.inventario[0])
            console.log(this.inventario[1])
            console.log(this.inventario[0].productos[0])
            console.log(this.inventario[0].productos[1])
            console.log(this.inventario.length)
            for (let i = 0; i < this.inventario.length; i++) {
              console.log(this.inventario[i].productos[i].codigo)
              this.regPresentacionEvento(this.inventario[i])
            };
          }).catch(error => {
            console.log(error);
          });
        }else{
          console.log('paso por aca')
          const url = 'http://localhost:3000/api/evento';
          const datos = {
            codigo: this.$route.query.codigo,
            nombre: this.nombre,
            descripcion: this.descripcion, 
            num_entradas: this.numEnt, 
            fecha_hora_inicial: this.fecha_inicio, 
            fecha_hora_final: this.fecha_fin, 
            direccion: this.direccion,
            parroquia: this.parroquia
          };
          this.modificarPrecioEntrada()
          console.log(datos);
          this.axios.put(url, datos).then(response => {
            this.insertarAuditoria('Modificar','Evento')
            console.log(response.data);
          }).catch(error => {
            console.log(error);
          });

        }
    
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

        llenarProveedores(data){
          for (let i = 0; i < data.length; i++) {
            const item = {
              Nombre: data[i].nombre,
              Rif: data[i].proveedor_id,
            };
            
            this.proveedores.push(item)
            console.log(this.proveedores)
          }
        },
        async obtenerProveedores() {
            const url = 'http://localhost:3000/api/proveedor';
            await this.axios.get(url).then(response => {
              const proveedor = response.data;
           
              console.log(proveedor)
              this.llenarProveedores(proveedor)
              this.insertarAuditoria('Consultar','Proveedor')
            }).catch(error => {
              console.log(error);
            });
        },
        async  insertarAuditoria(Accion,Tabla){
          console.log(this.cod_tipo_usuario)
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
<style scoped>
/*Cambio el color de los label*/
label{
  color: black !important;
}

 /*cambia la altura y el color del borde de los inputs*/
 .altura{
  border:1px solid rgb(0, 0, 0);
  margin-bottom: 25px;
  min-height: 0px !important;
  height: 50px !important;
}

/*Centrando la etiqueta de los proveedores*/
.centrado{
  margin-bottom: 22px;
  margin-top: -22px;
}
</style>