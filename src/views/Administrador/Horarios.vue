<template>
    <div>
<navbar></navbar>
        <EmpleadoAsistencia></EmpleadoAsistencia>
    </div>
</template>

<script>
import Navbar from '../../components/CompAdm/Navbar.vue';
import EmpleadoAsistencia from '@/components/CompAdm/EmpleadoAsistencia.vue';


export default{
    components:{
  
   EmpleadoAsistencia,Navbar
}
}
</script>