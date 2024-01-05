<template>
    
      <section class="container" style=" box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset; margin-top: 20px;"  >


    <b-container>
        <b-row>
            <b-col style="margin-left: 30PX;"><h1 style="font-weight: bold; text-align: left;">Recibo</h1></b-col>
            <b-col></b-col>
            <b-col></b-col>
        </b-row>
        <b-row>
            
            <b-col style="margin-left: 30PX;">
                <H4 style="text-align: left;" >ASORONUCAB C.A</H4>
                <h6  style="text-align: left;"> Direccion: {{ direccionAso }}</h6>
                <h6 style="text-align: left;">RIF: {{ rifAso }}</h6>
            </b-col>
            <b-col></b-col>
            <b-col></b-col>
        </b-row>
        <b-row>
            <b-col><h4 style="font-weight: bold; text-align: left;">A</h4></b-col>
            <b-col></b-col>
            <b-col><h5 style="font-weight: bold;">N de recibo: {{ num_factura }}</h5>
            <h5 style="font-weight: bold;">Fecha: {{ fecha }}</h5> </b-col>
        </b-row>
        <b-row>
            <b-col>
                <H6 style="text-align: left;">Nombre/Razon Social: {{ nombre_razon_s }}</H6>
                <h6 style="text-align: left;" >CI/RIF: {{ rif_cedula }}</h6>
                <h6 style="text-align: left;">Direccion: {{ direccionAfi }}</h6>
            </b-col>
            <b-col></b-col>
            <b-col></b-col>
        </b-row>
        <b-row>
            <b-col><h1 style="font-weight: bold;">Total</h1></b-col>
            <b-col></b-col>
            <b-col><h1 style="font-weight: bold;">{{ total }} bs</h1></b-col>
        
        </b-row>
        <b-row>
            <b-col lg="9" style="text-align: left;"><h5>Concepto: Pago del mes de {{ mes }} de la tarifa de afilicion</h5>
            </b-col>
            <b-col></b-col>
        </b-row>
        <b-row>
            <b-col lg="4" style="text-align: left;"><h5 style="; font-weight: bold;" >Pago total</h5>
            </b-col>
            <b-col></b-col>
           
        </b-row>
    </b-container>
    
</section>
</template>
<script>
export default{
    props:{
        codigo_afiliado:'',
        
    },
    data(){
        return{
        direccionAfi:'',
        direccionAso:'',
        rifAso:'',
        rif_cedula:'',
        nombre_razon_s:'',
        total:'',
        mes:'',
        fecha:'',
        num_factura:'',}
    },
    created(){
        this.datosFactura()
        this.datosAfiliacion()
        this.datosAsoron()
    },
    methods:{
        datosFactura(){
            console.log(this.codigo_afiliado)
        const url = 'http://localhost:3000/api/facturaAfiliado';
        const datos ={ codigo_identificador:this.codigo_afiliado}
        this.axios.post(url,datos).then(response => {
                     console.log(response.data);
                    this.num_factura=response.data.num_factura
                    this.fecha=response.data.fecha
                    this.mes=response.data.mes
                    this.total=response.data.total
                     }).catch(error => {
                     console.log(error.response.data);
                 });},
                 datosAfiliacion(){
            console.log(this.codigo_afiliado)
        const url = 'http://localhost:3000/api/facturaAfiliado/datosAfiliado';
        const datos ={ codigo_identificador:this.codigo_afiliado}
        this.axios.post(url,datos).then(response => {
                     console.log(response.data);
                     this.nombre_razon_s=response.data.nombre
                     this.rif_cedula=response.data.rif_cedula
                     this.direccionAfi=response.data.direccion
                     }).catch(error => {
                     console.log(error.response.data);
                 });},
                 datosAsoron(){
            console.log(this.codigo_afiliado)
        const url = 'http://localhost:3000/api/facturaAfiliado/datosAsoron';
        const datos ={ codigo_identificador:this.codigo_afiliado}
        this.axios.post(url,datos).then(response => {
                     console.log(response.data)
                     this.rifAso=response.data.rif
                     this.direccionAso=response.data.direccion
                     }).catch(error => {
                     console.log(error.response.data);
                 });},
                 


    }
}
</script>
