<template>
   <header class="header">
        <div class="logo">
            <img src="@/assets/logo.png" alt="Logo de la marca">
        </div>
        <nav>
           <ul class="nav-links">
                <li><a @click="PrincipalProducto()">Productos</a></li>
                <li><a @click="PrincipalEventos()">Eventos</a></li>
                <li><a href="#">Empleados</a></li>
                <li><a href="#">Clientes</a></li>
                <li><a @click="PrincipalProveedor()">Proveedores</a></li>
                <li><a href="#">Rol/Permiso</a></li>
                <li><a href="#">Clientes</a></li>
                <li><a href="#" @click="Inventario()">Inventario</a></li>
           </ul>            
        </nav>
        <a class="btn" href="#"><button>Contact</button></a>
    </header>
</template>
<script>
  
  export default{

         methods:{
          PrincipalProducto() {
            if (this.$route.path!='/PrincipalProducto/')
            this.$router.push('/PrincipalProducto/');
          },
          PrincipalProveedor() {
            if (this.$route.path!='/PrincipalProveedor/')
            this.$router.push('/PrincipalProveedor/');
          },
          PrincipalEventos() {
            if (this.$route.path!='/PrincipalEventos/')
            this.$router.push('/PrincipalEventos/');
          },
          Inventario() {
            if (this.$route.path!='/Inventario/')
            this.$router.push('/Inventario/');
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