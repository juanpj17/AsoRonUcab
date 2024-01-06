<template >
    <header class="header">
         <div class="logo">
             <img src="@/assets/Logo_amarillo.png" alt="Logo de la marca" @click="Inicio()">
         </div>
         <nav >
            <ul class="nav-links">
                 <li><a class="text" @click="PrincipalProducto()" >Productos</a></li>
                 <li><a class="text" @click="PrincipalEventosC()" >Eventos</a></li>
                 <li><a class="text" @click="MisPedidos()">Mis Pedidos</a></li>
                 <li><a class="text" @click="Carrito()" >Carrito</a></li>
            </ul>            
         </nav>

         <a class="btn" href="#">
            <b-dropdown text="Cuenta">
                 <b-dropdown-item @click="MiCuenta()">Mi cuenta</b-dropdown-item>
                 <b-dropdown-item @click="PersonasContacto()">Personas de Contacto</b-dropdown-item>
                 <b-dropdown-item @click="PrincipalAfiliados()">Afiliacion</b-dropdown-item>
                <b-dropdown-item v-b-modal.modal-1 >Cerrar sesion</b-dropdown-item>
                
            </b-dropdown>
         </a>
     </header
     >
 </template>
 <script>


   
   export default{
    props:{
      tipo_codigo_registro:''
    },

          methods:{
           PrincipalProducto() {
             if (this.$route.path!='/PrincipalProductoC/'+this.tipo_codigo_registro)
             this.$router.push('/PrincipalProductoC/'+ this.tipo_codigo_registro);
           },
           PrincipalEventosC() {
             if (this.$route.path!='/PrincipalEventosC/$')
             this.$router.push('/PrincipalEventosC/$');
           },
           TiendaFisica() {
             if (this.$route.path!='/TiendaFisica/')
             this.$router.push('/TiendaFisica/');
           },
           AsignarRoles() {
             if (this.$route.path!='/AsignarRoles/')
             this.$router.push('/AsignarRoles/');
           },
           PrincipalAfiliados() {
             if (this.$route.path!='/PrincipalAfiliados/'+this.tipo_codigo_registro)
             this.$router.push('/PrincipalAfiliados/'+this.tipo_codigo_registro);
           },
           MiCuenta() {
             if (this.$route.path!='/MiCuenta/')
             this.$router.push('/MiCuenta/');
           },
           Carrito() {
             if (this.$route.path!='/PrincipalCarrito/')
             this.$router.push('/PrincipalCarrito/');
           },
           MisPedidos() {
             if (this.$route.path!='/MisPedidos/')
             this.$router.push('/MisPedidos/');
           },
           PersonasContacto() {
             if (this.$route.path!='/PersonasContacto/')
             this.$router.push('/PersonasContacto/');
           },
           Inicio() {
             if (this.$route.name!=='home')
             this.$router.push({name: 'home'});
           },
        
        
        
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
 
 body{
     background-color: #fff59d;
 }
 
 .header{
     background-color: #833440;
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
     color: antiquewhite;
     text-decoration: none;    
     cursor: pointer;
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
 .boton{
    margin-top: 20px;
    position:fixed;
    left: 20px;
    transform: translateY(-50%);
}

  .text{
    color: antiquewhite;
  }

  ul{
    margin: auto !important;
  }
 </style>