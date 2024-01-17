<template>
    <FichaVue :producto="$route.params.producto" :presentacion="$route.params.presentacion"></FichaVue>
</template>
<script>

import FichaVue from '@/components/Comunes/Ficha.vue';
export default{
    components:{
        FichaVue
    }
}
  
</script>
