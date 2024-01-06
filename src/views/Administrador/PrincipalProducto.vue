<template>
    <div>
<navbar  ></navbar>
<PrincipalProducto></PrincipalProducto>
    </div>
</template>

<script>
import Navbar from '../../components/CompAdm/Navbar.vue';
import PrincipalProducto from '../../components/CompAdm/PrincipalProducto.vue';


export default{
    props:{
        tipo_codigo_usuario:''
    },
    components:{
  
   PrincipalProducto,Navbar
},
mounted(){
    this.tipo_codigo_usuario=this.$route.params.tipo_codigo_usuario

}
}
</script>