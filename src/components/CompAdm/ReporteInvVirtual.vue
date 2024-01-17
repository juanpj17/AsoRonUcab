
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
           compras: [],
        }
    },
        
    methods: {
        //Metodos
        getGenerarReporteVenta() {
            const url = 'http://localhost:3000/api/inventario/venta/' + this.month;
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

        getGenerarReporteCompra() {
            const url = 'http://localhost:3000/api/inventario/compra/' + this.month;
            try {
                
                axios.get(url).then(response => {
                    console.log(response.data);
                    this.compras = response.data;
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

