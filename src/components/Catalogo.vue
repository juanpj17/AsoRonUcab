<template>
    <div class="contenedor">
        <br>
        <h1>Nuestros productos</h1>
        
    <b-row class="mt-5  mx-5">
        <b-col cols="12" md="3" v-for="producto in Productos" :key="producto.id">
            <b-card
                style="max-width: 20rem;"
                class="mb-2"
            >
            <img :src="producto.nombreImagen" class="card-img-top">
            <b-card-title><h3>
                {{ producto.nombre }}
            </h3> </b-card-title>
            <h5 class="card-subtitle mb-2 mr-5 text-body-secondary">{{ producto.precio }} Bs </h5>
            <b-card-text class="color">¡Envío Gratis!</b-card-text>   
            <b-card-text>{{ producto.descripcion }}</b-card-text>   
             
            <b-card-text v-if="producto.stock=='0'"><h6>Agotado</h6></b-card-text> 
            <b-card-text v-else><h6> {{ producto.stock }} disponibles</h6></b-card-text> 
            
            <b-button href="#" variant="primary" v-on:click="verMas()" >Ver mas</b-button>
            </b-card>
        </b-col> 
    </b-row>
    </div>
  
   
</template>
<script>
    import Vue from 'vue'; 
    export default{
    
        props:{
            ClienteRegistrado:'',
        },

        data(){
            return{
                Productos: '',
                Pedido: [],
            }
        }, 

        created(){               
            this.mostrar()
        },
        
        methods:{
            
            mostrar(){
                let url='http://localhost:3000/api/productos/';
                this.axios.get(url)
                    .then(response =>{
                        this.Productos = response.data;                 
                    })    
            },
            verMas(){
                this.$router.push('/DetalleProducto');
            },

             

            alertaNoCliente(){
                if (!this.ClienteRegistrado){
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'No puede realizar una compra sin  antes iniciar sesion',
                        footer: '<a href="/IniciarSView">Iniciar Sesion</a>'})
                }
            },

            alertaServidor(){
                Swal.fire('El servidor no responde')
            },

            enviarPedido(){
                this.$emit('pedido', this.Pedido);
            }
        },
    }
</script>
<style  scoped>
 @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,700;0,800;1,400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&display=swap');
 
 h1{
    font-family: 'Libre Baskerville', serif;
 }
 .contenedor{
   background-color:#F4EFEE;
;

 }
 h3{
  font-family: 'Nunito', sans-serif;
 }
 h6{
  font-family: 'Nunito', sans-serif;
 }
 h5{
  font-family: 'Nunito', sans-serif;
 }
 .color{
    color: #50AF19   ;
 }
</style>