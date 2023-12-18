<template>
    <div>
        <Navbar></Navbar>
        <PrincipalRolesVue></PrincipalRolesVue>
    
    </div>
</template>

<script>
import PrincipalRolesVue from '@/components/CompAdm/PrincipalRoles.vue';
import Navbar from '../../components/CompAdm/Navbar.vue'

export default{
    components:{
Navbar,PrincipalRolesVue
    }
}
</script>