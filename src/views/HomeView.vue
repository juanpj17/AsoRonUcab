<template>
  <div class="home">
    <GenerarQR msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import GenerarQR from '@/components/GenerarQR.vue'

export default {
  name: 'HomeView',
  components: {
    GenerarQR
  }
}
</script>
