<template>
    <div>
        <Navbar></Navbar>
        
        <Login style="margin-top:2%"></Login>
        
       
    
    </div>
</template>

<script>

import Navbar from '@/components/Comunes/Navbar.vue';

import Login from '@/components/Comunes/Login.vue';

export default{
    components:{
       Login ,Navbar
    }
}
</script>