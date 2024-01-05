<template>
    <div> 
      <b-container>
          <b-row style="margin-bottom: 20px;">
            <b-col><input type="text" id="rolNombre" class="flex-grow-1 form-control" v-model="nombreDelRol" placeholder="Nombre del Rol"></b-col>
          </b-row>
          <b-row>
            <b-col><b-form-textarea id="textarea" v-model="text" placeholder="Descripcion del rol..."></b-form-textarea></b-col>
         </b-row>
      </b-container>  
      <div class="container">
         <div class="row" v-if="id!=='*'">
            <div class="col-md-12 text-center mt-3">
                <h3>Permisos asociados</h3>
            </div>
            <div v-for="(item, index) in arrayCheckBox" :key="index" class="col-md-3 form-check form-switch">
              <input type="checkbox" class="form-check-input" v-model="item.selected">
              <label class="form-check-label" style="text-align: left;">{{ item.text }}</label>
            </div>
        </div>
      </div>
      <b-row>
          <b-col>   <button class="btn btn-primary "   @click="Registrar()">Registrar</button></b-col>
      </b-row>
    </div>
  </template>
  
  <script>
import RegistrarEventoVue from './RegistrarEvento.vue';
  
    export default {
      props:{
        id:''
      },
    data(){
      return {
        text:'',
          
          logo: "",
          nombreDelRol:'',
          arrayCheckBox :[
          {value: 'Crear_producto', text:'Crear producto', selected: false},
          {value: 'Editar_producto', text:'Editar producto', selected: false},
          {value: 'Eliminar_producto', text:'Eliminar producto', selected: false},
          {value: 'Registrar_empleado', text:'Registrar empleado', selected: false},
          {value: 'Editar_empleado', text:'Editar empleado', selected: false},
          {value: 'Eliminar_empleado', text:'Eliminar empleado', selected: false},
          {value: 'Crear_proveedor', text: 'Crear proveedor', selected: false},
          {value: 'Editar_proveedor', text: 'Editar proveedor', selected: false},
          {value: 'Eliminar_proveedor', text: 'Eliminar proveedor', selected: false},
          {value: 'Registrar_cliente', text: 'Registrar cliente', selected: false},
          {value: 'Editar_cliente', text: 'Editar cliente', selected: false},
          {value: 'Eliminar_cliente', text: 'Eliminar cliente', selected: false},
          {value: 'Registrar_evento', text: 'Registrar evento', selected: false},
          {value: 'Editar_evento', text: 'Editar evento', selected: false},
          {value: 'Eliminar_evento', text: 'Eliminar evento', selected: false},
          {value: 'Registrar_inventario', text: 'Registrar inventario', selected: false},
          {value: 'Editar_inevntario', text: 'Editar inventario', selected: false},
          {value: 'Eliminar_inventario', text: 'Eliminar inventario', selected: false},
          {value: 'Registrar_rol', text: 'Registrar rol', selected: false},
          {value: 'Editar_rol', text: 'Editar rol', selected: false},
          {value: 'Eliminar_rol', text: 'Eliminar rol', selected: false},
        ],
        permisos:[],
        permisos_asignados:[],
        permisos_rol:[]
       
      };
    },
  created(){
this.buscarRolId();
this.buscarPermisosRol();
this.obtenerPermisos();


  },
  
  
  
    methods: {
      obtenerEstadoCasillas() {
       this.permisos_asignados = []
       this.arrayCheckBox.forEach((item, index) => {
       this.permisos_asignados.push({valor:this.arrayCheckBox[index].selected,codigo:item.Value})
      });
      this.registrarPermisos()
      this.arrayCheckBox.forEach((item, index) => {
      this.arrayCheckBox[index].selected = false;
        });
      },
      async RegistrarRol() {
        const datos={nombre:this.nombreDelRol,descripcion:this.text}
        const url = 'http://localhost:3000/api/roles';
        await this.axios.post(url,datos).then(response => {
          this.roles = response.data;
          console.log(this.roles)
         
        }).catch(error => {
          console.log(error);
        });
        },
      async  buscarRolId(){
          if (this.id!=='*'){
            const datos={id:this.id}
            const url = 'http://localhost:3000/api/roles/id';
            await this.axios.post(url,datos).then(response => {
              console.log(response.data)
          this.nombreDelRol= response.data.nombre
          this.text=response.data.descripcion
          
         
        }).catch(error => {
          console.log(error);
        });}
        },
   async modificarRol(){
          const datos={
            id:this.id,
            nombre:this.nombreDelRol,
            descripcion:this.text}
           const url = 'http://localhost:3000/api/roles/modificar'; 
           await this.axios.post(url,datos).then(response => {
              console.log(response.data)
              Swal.fire(response.data.modificar_rol);
              this.obtenerEstadoCasillas()
        }).catch(error => {
          console.log(error);
        })
        
        },

        Registrar(){
          if (this.id=='*')
          {this.RegistrarRol()}
          else
          {this.modificarRol()}
        },

      async obtenerPermisos() {
      const url = 'http://localhost:3000/api/roles/permisos';
      await this.axios.get(url).then(response => {
        this.permisos = response.data;
        this.llenarCheck(this.permisos)
        console.log(this.permisos)
      }).catch(error => {
        console.log(error);
      });
},
llenarCheck(data){
  this.arrayCheckBox =[]
    for (let i = 0; i < data.length; i++) {
      const item = {Value: data[i].codigo,text: data[i].nombre, selected: false };
      if(this.permisos_rol.includes(item.Value))
      { item.selected=true}
      this.arrayCheckBox.push(item)}
    },

registrarPermisos(){
  this.eliminarPermisosRol()
  this.permisos_asignados.forEach((item, index) => {
      if (item.valor==true)
      { this.insertarPermisos( item.codigo)}
      });},

async insertarPermisos(codigo) {
  const dato={codigo_permiso:codigo,codigo_rol:this.id}
  const url = 'http://localhost:3000/api/roles/asignarPermisos';
  await this.axios.post(url,dato).then(response => {this.permisos = response.data;}).catch(error => { console.log(error); });
},

 async buscarPermisosRol(){
    const dato={codigo_rol:this.id}
    const url = 'http://localhost:3000/api/roles/rolPermisos';
    await this.axios.post(url,dato).then(response => {
    this.permisos = response.data;
    this.llenarArrayPermisoRol(response.data)
  }).catch(error => {console.log(error);});
    },
  llenarArrayPermisoRol(data){
    for (let i = 0; i < data.length; i++) {
      this.permisos_rol.push(data[i].seleccionar_codigos_permisos_rol)}
      console.log('*'+this.permisos_rol)
},
async eliminarPermisosRol(){
    const dato={codigo_rol:this.id}
    const url = 'http://localhost:3000/api/roles/eliminarRolPermisos';
    await this.axios.post(url,dato).then(response => {
    this.permisos = response.data;
  }).catch(error => {console.log(error);});
    },
      


    }
  };
  
  </script>
  
  
  
  
  
  
  <style>
  
   /******************** Estos son los estilos de tienda física ***********************************/
  .espace{
    height: 25vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  
  .tabla-con-scroll {
    max-height: 49vh;
    overflow-y: auto;
  }
  
  .tabla-con-scroll thead {
      position: sticky;
      top: 0;
      background-color: #fff;
  }
  
  .azul-inferior {
    height: 25vh;
    position: relative;
    padding-right: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  
  }
  
  .boton-canjear,
  .boton-pagar {
    position: absolute;
  }
  
  .boton-canjear {
    right: 45px;
    width: 150px;
    height: 60px;
    margin-right: 150px;
  }
  
  .boton-pagar {
    right: 15px;
    width: 150px;
    height: 60px;
  
  }
  
  .botones-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
  }
  
  .centered-div {
    text-align: center;
  }
  
  .centered-div p {
    margin: 0;
    font-size: 20px;
  }
  
  .centered-div p strong {
    font-weight: bold;
  }
  
  .total {
    font-size: 25px;
    font-weight: bold;
    color: black;
  }
  
  
  
  /********************************** Estilo para el modal ***********************************/
  .modal {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
  
  /* Estilo para el contenido del modal */
  .modal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 20px;
    text-align: center;
    width: 35%;
  }
  
  /* Estilo para el botón de cerrar el modal */
  .close {
    position: absolute;
    top: 0;
    right: 0;
    padding: 10px;
    cursor: pointer;
  }
  
  
  
  .btn_position{
    width: 135px;
    height: 50px;
  }
  
  </style>
  
  