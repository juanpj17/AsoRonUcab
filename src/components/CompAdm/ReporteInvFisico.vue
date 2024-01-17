
<template>
    <div>
        
    </div>
</template>

<script>
export default {
    
    data() {
        return {
           month: '',
           ventas : [],
           eventos: [],
        }
    },
        
    methods: {
        //Metodos
        getGenerarReporteVentaFisica() {
            const url = 'http://localhost:3000/api/inventario/ventaFisica/' + this.month;
            try {
                
                axios.get(url).then(response => {
                    console.log(response.data);
                    this.ventas = response.data;
                })

            } 
            catch (error) {
                console.log(error);
            }
        },

        getGenerarReporteVentaFisicaEvento() {
            const url = 'http://localhost:3000/api/inventario/ventaFisicaEvento/' + this.month;
            try {
                
                axios.get(url).then(response => {
                    console.log(response.data);
                    this.eventos = response.data;
                })

            } 
            catch (error) {
                console.log(error);
            }
        },
    },
        
    mounted() {
        //Cargar datos
    }

}


</script>