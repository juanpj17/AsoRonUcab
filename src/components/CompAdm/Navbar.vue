<template>
   <header class="header">
        <div class="logo">
            <img src="@/assets/Logo_amarillo.png" alt="Logo de la marca" @click="InicioAdm()">
        </div>
        <nav>
           <ul class="nav-links">
                <li><a @click="PrincipalProducto()">Productos</a></li>
                <li><a @click="PrincipalEventos()">Eventos</a></li>
                <li><a href="#" @click="PrincipalClientes()">Clientes</a></li>
                <li><a @click="PrincipalEmpleados()">Empleados</a></li>
                <li><a href="#" @click="PrincipalRoles()">Rol/Permiso</a></li>
                <li><a href="#" @click="Inventario()">Inventario</a></li>
                <li><a href="#" @click="Pedidos()">Pedidos</a></li>
                <li><a href="#" @click="Compras()">Compras</a></li>
                <li><a href="#" @click="TiendaFisica()">Tienda Fisica</a></li>
                <li><a href="#" @click="ControlAccion()">Auditoria</a></li>


           </ul>            
        </nav>
        <a class="btn" href="#"><button>Cerrar Sesion</button></a>
    </header>
</template>
<script>
import TiendaFisica from './TiendaFisica.vue';

  export default{
    props:{
      cod_tipo_usuario:''
    },

         methods:{
          PrincipalProducto() {
            if (this.$route.path!='/PrincipalProducto/'+this.cod_tipo_usuario)
            this.$router.push('/PrincipalProducto/'+ this.cod_tipo_usuario);
          },
          PrincipalEmpleados() {
            if (this.$route.path!='/PrincipalEmpleados/'+this.cod_tipo_usuario)
            this.$router.push('/PrincipalEmpleados/'+this.cod_tipo_usuario);
          },
          PrincipalEventos() {
            if (this.$route.path!='/PrincipalEventos/' +this.cod_tipo_usuario)
            this.$router.push('/PrincipalEventos/'+ this.cod_tipo_usuario);
          },
          InicioAdm() {
            if (this.$route.path!='/Home/'+this.cod_tipo_usuario)
            this.$router.push('/Home/'+this.cod_tipo_usuario);
           },
          Inventario() {
            if (this.$route.path!='/Inventario/'+this.cod_tipo_usuario)
            this.$router.push('/Inventario/'+  this.cod_tipo_usuario);
          },
          Pedidos() {
            if (this.$route.path!='/Pedidos/'+this.cod_tipo_usuario)
            this.$router.push('/Pedidos/'+this.cod_tipo_usuario);
          },
          PrincipalClientes() {
            if (this.$route.path!='/PrincipalClientes/'+this.cod_tipo_usuario)
            this.$router.push('/PrincipalClientes/'+this.cod_tipo_usuario);
          },
          PrincipalRoles() {
            if (this.$route.path!='/PrincipalRoles/'+this.cod_tipo_usuario)
            this.$router.push('/PrincipalRoles/'+this.cod_tipo_usuario);
          },
          Compras(){
            if (this.$route.path!='/Compras/'+null+'/'+this.cod_tipo_usuario)
            this.$router.push('/Compras/'+null+'/'+this.cod_tipo_usuario);
          },
          ControlAccion(){
            if (this.$route.path!='/ControlAccion/'+this.cod_tipo_usuario)
            this.$router.push('/ControlAccion/'+this.cod_tipo_usuario);
          },
          TiendaFisica(){
            if (this.$route.path!='/TiendaFisica/'+this.cod_tipo_usuario)
            this.$router.push('/TiendaFisica/'+this.cod_tipo_usuario);
          }
       
         },
  
      
  
  }
  </script>
<style >
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;800&display=swap');

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Nunito', sans-serif;
    font-size: 20px;
}

header .nav-links a {
    font-size: 700;
    color: antiquewhite !important;
    text-decoration: none;
    cursor: pointer;
}

body{
    background-color: #fff59d;
}

.header{
    background-color: #1b3039;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 85px;
    padding: 5px 10%;
}

.header .logo{
    cursor: pointer;
    margin-right: auto;
}

.header .logo img{
    height: 70px;
    width: auto;
    transition: all 0.3s;
}

.header .logo img:hover{
    transform: scale(1.2);
}

.header .nav-links{
    list-style: none;
}

.header .nav-links li{
    display: inline-block;
    padding: 0 20px;    
}

.header .nav-links li:hover{
    transform: scale(1.1);
}

.header .nav-links a{
    font-size: 700;
    color: #eceff1;
    text-decoration: none;    
}


.header .nav-links li a:hover{
    color: #ffbc0e;
}

.header .btn button{
    margin-left: 20px;
    font-weight: 700;
    color: #1b3039;
    padding: 9px 25px;
    background: #eceff1;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
}

.header .btn button:hover{
    background-color: #e2f1f8;
    color: #ffbc0e;
    transform: scale(1.1);
}
</style>