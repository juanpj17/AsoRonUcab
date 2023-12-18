<template>
    <div>
        <Navbar></Navbar>
        <h2>Crear rol</h2>
        <AsignarRolesVue style="margin-top: 40px;" :id="$route.params.id"></AsignarRolesVue>
    
    </div>
</template>

<script>
import AsignarRolesVue from '../../components/CompAdm/AsignarRoles.vue'
import Navbar from '@/components/CompAdm/Navbar.vue';

export default{
    components:{
        AsignarRolesVue,Navbar
    }
}
</script>