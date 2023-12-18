<template >
    <header class="header">
         <div class="logo">
            
             <img src="@/assets/Logo_amarillo.png" alt="Logo de la marca" @click="PrincipalProducto()">
         </div>
         <nav >
            <ul class="nav-links">
                 <li><a class="text" @click="PrincipalProducto()" >Productos</a></li>
                 <li><a class="text" @click="PrincipalEventosC()" >Eventos</a></li>
            </ul>            
         </nav>
         <a class="btn" href="#">
            <b-dropdown text="Cuenta">
                 <b-dropdown-item @click="Login()">Iniciar sesion</b-dropdown-item>
                <b-dropdown-item v-b-modal.modal-1 > Registrase</b-dropdown-item>
                <b-modal id="modal-1" title="Seleccione el tipo de persona" scrollable="true">
                <b-button style="margin-right: 20px;" variant="dark" @click="RegistroNatural()">Natural</b-button>  
                <b-button variant="dark" @click="RegistroJuridico()">Juridico</b-button>
                </b-modal>
            </b-dropdown>
            
        </a>
     </header
     >
     
 </template>
 <script>
   
   export default{
          methods:{
           PrincipalProducto() {
             if (this.$route.path!='/PrincipalProductoC/*')
             this.$router.push('/PrincipalProductoC/*');
           },
           PrincipalEventosC() {
             if (this.$route.path!='/PrincipalEventosC/*')
             this.$router.push('/PrincipalEventosC/*');
           },
          Login(){
            if (this.$route.path!='/Login/')
             this.$router.push('/Login/');
           
          },
          RegistroNatural(){
            if (this.$route.path!='/PrincipalRegistroNatural/*/*')
           this.$router.push('/PrincipalRegistroNatural/*/*');
   },
   RegistroJuridico(){
    if (this.$route.path!='/PrincipalRegistroJuridico/*/*')
           this.$router.push('/PrincipalRegistroJuridico/*/*');
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

  /*Se eliminan los botones 'Close' y 'Ok' que trae por defecto el modal*/
  .modal-footer {
    display: none !important;
  }
 
  /*se elimina la X superior*/
 .close{
    display: none !important;
 }

 /*cambiando estilos del modal*/
 .modal-header{
    color: black !important;
    justify-content: center !important;
    border-bottom: solid black !important;
 }

 .btn-dark{
    background-color: var(--vinotinto) !important;
    border: solid var(--vinotinto) !important;
 }

 </style>