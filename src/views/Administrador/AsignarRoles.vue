<template>
    <div>
        <Navbar></Navbar>
        <AsignarRolesVue></AsignarRolesVue>
    
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