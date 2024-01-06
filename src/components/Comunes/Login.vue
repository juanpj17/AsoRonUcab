<template>
    <b-container style="box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px; ">
        <b-row>
            <b-col>
        <h3 style="text-align: left; margin-bottom: 50PX; margin-top: 10px;">Ingresa tu e-mail y contraseña de ASORON</h3>
        <b-row>
            <b-col>
                <b-col>
                <div class=" col form-group form-floating mb-3">
                           <input 
                              type="text" 
                              class="form-control rounded-2 custom-input-height altura" 
                              placeholder="Correo" 
                              v-model="Correo"
                            >
                           <label for="pnombre">Correo</label> 
                 </div>
            </b-col>
            </b-col>
        </b-row>
        <b-row style="margin-top:0px">
            <b-col>
                <div class=" col form-group form-floating mb-3">
                           <input 
                              type="text" 
                              class="form-control rounded-2 custom-input-height altura" 
                              placeholder="pnombre" 
                              v-model="Password"
                            >
                           <label for="pnombre">Contraseña</label> 
                 </div>
            </b-col>
        </b-row>
        <b-row style="margin-top:30px;">
            <b-col></b-col>
            <b-col cols="5"><b-button variant="dark" pill style="margin-bottom: 20px; display: inline-block;"  @click="buscarUsuario()">Iniciar Sesión</b-button></b-col>
            <b-col></b-col>
        </b-row>
    </b-col>
    <div style="background-color:#FfF; width:2px;height:500px;border-right:2px solid rgb(98, 97, 97);padding-left:20px;margin-left:20px;"></div>
    <b-col>
      <h2 style="text-align: left; margin-top: 10px;">Soy nuevo</h2>
      <p style="text-align: left;"> Crear una cuenta en segundos. Solo presiona el botón 'Crear cuenta', rellena los campos y ¡listo! Disfruta de los beneficios de formar parte de ASORON ¿Qué estás esperando?</p>
      <b-button  v-b-modal.modal-1 variant="dark" pill style="margin-top: 28%; display: inline-block">Crear una cuenta</b-button>
      <div>
        <b-modal id="modal-1" title="Seleccione el tipo de persona" scrollable>
            <b-button style="margin-right: 20px; " variant="dark" @click="RegistroNatural()">Natural</b-button>  
            <b-button variant="dark" @click="RegistroJuridico()">Juridico</b-button>
        </b-modal>
      </div>
    </b-col>
        </b-row>
    </b-container>
</template>
<script>
export default {
   data(){
    return{
        Correo:'',
        Password:'',
        cod_1:'',
        cod_2:'',
        tipo_registro:'',
        datos:''
       
    }
   },
   methods:{
    RegistroNatural(){
    if (this.$route.path!='/PrincipalRegistroNatural/*/*Nuevo')
           this.$router.push('/PrincipalRegistroNatural/*/*Nuevo');
   },
   RegistroJuridico(){
    if (this.$route.path!='/PrincipalRegistroJuridico/*/*Nuevo')
           this.$router.push('/PrincipalRegistroJuridico/*/*Nuevo');
   },
   InicioSesion(tipo){
    if (this.$route.path!='/HomeAsoRon/'+ tipo)
           this.$router.push('/HomeAsoRon/'+ tipo);
   },
   //Aqui debe buscar el usuario e identificar el tipo de rol, ignora lo que esta adentro esta en modo prueba
   VerificarUsuario(){
    let tipUsuario='%'
    if (tipUsuario=='$'){
        this.InicioSesion('$')
    }else
    this.InicioSesion('%')
    
   },

   

buscarUsuario(){
    const url = 'http://localhost:3000/api/usuario';
    const  correo=this.Correo
    const contrase=this.Password   
       for (let i=0; i<2 ; i++){
        this.axios.get(url+'/'+correo+'/'+contrase
        ).then(response => {
                     console.log(response.data);
                     this.datos=response.data
                     this.cod_1=this.datos[0].cod1
                     this.cod_2=this.datos[0].cod2
                     this.tipo_registro=this.datos[0].tipo
                     console.log(this.cod_1 +'&'+this.cod_2)
                     this.buscarRuta()
                 }).catch(error => {
                     console.log(error.response);
                 });

}
},
buscarRuta(){
    console.log('$$$')
    console.log(this.cod_1 +'&'+this.cod_2)

    if (this.cod_1!=='' && this.cod_2 !== undefined){
        console.log('$$$')
        let parametro =this.cod_1+'_'+this.cod_2+'_'+this.tipo_registro
        this.InicioSesion(parametro)


    }
   
}









   }
   
}
</script>
<style>
hr{
    border-left: thick solid #000;
    height:100%;
    left: 50%;
    position: absolute;
}


</style>