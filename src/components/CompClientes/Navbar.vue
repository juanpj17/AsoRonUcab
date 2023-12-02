<template>
    <header class="header">
         <div class="logo">
            
    <b-button v-b-toggle.sidebar-no-header variant="BLACK" class="boton"><b-icon variant="light" scale="1.5" icon="list"></b-icon></b-button>
    <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow>
      <template #default="{ hide }">
        <div class="p-3">
          <nav class="mb-3">
            <b-nav vertical style="text-align: left;">
              <b-nav-item  @click="MiCuenta()">Mi cuenta</b-nav-item>
              <b-nav-item >Mis pedido</b-nav-item>
              <b-nav-item >Metodos de pago registrado</b-nav-item>
              <b-nav-item  @click="PrincipalAfiliados()">Afiliacion</b-nav-item>
            </b-nav>
          </nav>
          <b-button variant="primary" block @click="hide">Closeidebar</b-button>
        </div>
      </template>
    </b-sidebar>
  







             <img src="@/assets/logo.png" alt="Logo de la marca">
         </div>
         <nav>
            <ul class="nav-links">
                 <li><a class="text" @click="PrincipalProducto()" >Productos</a></li>
                 <li><a class="text" @click="PrincipalEventosC()" >Eventos</a></li>
                 <li><a class="text" href="#">Ofertas</a></li>
                 <li><a class="text" @click="Carrito()" >Carrito</a></li>
            </ul>            
         </nav>
         <a class="btn" href="#"><button>Cerrar sesion</button></a>
     </header
     >
 </template>
 <script>
   
   export default{
          methods:{
           PrincipalProducto() {
             if (this.$route.path!='/PrincipalProductoC/')
             this.$router.push('/PrincipalProductoC/');
           },
           PrincipalEventosC() {
             if (this.$route.path!='/PrincipalEventosC/')
             this.$router.push('/PrincipalEventosC/');
           },
           PrincipalAfiliados() {
             if (this.$route.path!='/PrincipalAfiliados/')
             this.$router.push('/PrincipalAfiliados/');
           },
           MiCuenta() {
             if (this.$route.path!='/MiCuenta/')
             this.$router.push('/MiCuenta/');
           },
           Carrito() {
             if (this.$route.path!='/PrincipalCarrito/')
             this.$router.push('/PrincipalCarrito/');
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

 
 </style>