<template>
    <div>
  <button @click="agregarElemento">Agregar Elemento</button>
  <div v-for="(elemento, index) in elementos" :key="index" >
    <b-form-select v-model="elemento.selected" :options="options" ></b-form-select>
    <textarea v-model="elemento.texto" placeholder="Texto"></textarea>
  </div>
  <button @click="guardarInformacion">Guardar Información</button>
</div>
</template>
<script>
  export default {
    data() {
      return {
        elementos:[],
        selected: null,
        options: [
          { value: null, text: 'Please select an option' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Selected Option' },
          { value: 'd', text: 'This one is disabled'}
        ]
        
      }
    },
    methods: {
        agregarElemento() {
        this.elementos.push({texto:'',selected:''})
      },
      guardarInformacion() {
        console.log(this.elementos)
      }
    },
    
  }
</script>