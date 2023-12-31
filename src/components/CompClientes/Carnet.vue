<template>
    <div>
         <b-card no-body class="overflow-hidden" style="max-width: 600px;" header="Carnet de afiliacion"  header-bg-variant="light">
             <b-row no-gutters>
                <b-col cols="6">
                     <b-card-img  :src="qrCodeData" alt="Image" class="rounded-0"></b-card-img>
                </b-col>
                <b-col cols="6">
                    <b-card-body>
                       <b-container >
                          <b-row v-if="razon==''">
                            <b-col cols="12" style="text-align: left;"><p>Nombres</p></b-col>
                            <b-col cols="12" style="text-align: left; font-size: 18px;">{{ nombres }}</b-col>
                            <b-col cols="12" style="text-align: left;"><p>Apellidos</p></b-col>
                            <b-col cols="12" style="text-align: left; font-size: 18px;">{{ apellidos }}</b-col>
                            <b-col cols="12" style="text-align: left;"><p>Cedula</p></b-col>
                            <b-col cols="12" style="text-align: left; font-size: 18px;">{{ ci }}</b-col>
                            <b-col cols="12" style="text-align: left;"><p>Codigo Identificador</p></b-col>
                            <b-col cols="12" style="text-align: left; font-size: 18px;">{{ codigo }}</b-col>
                          </b-row>
                          <b-row v-else>
                            <b-col cols="12" style="text-align: left;"><p>Razon Social</p></b-col>
                            <b-col cols="12" style="text-align: left; font-size: 18px;">{{ razon }}</b-col>
                            <b-col cols="12" style="text-align: left;"><p>Rif</p></b-col>
                            <b-col cols="12" style="text-align: left; font-size: 18px;">{{ rif }}</b-col>
                            <b-col cols="12" style="text-align: left;"><p>Codigo Identificador</p></b-col>
                            <b-col cols="12" style="text-align: left; font-size: 18px;">{{ codigo }}</b-col>
                          </b-row>
                          
                       </b-container>
                    </b-card-body>
                </b-col>
            </b-row>
        </b-card>
    </div>
  </template>
  
  <script>
  import QRCode from 'qrcode'
  export default {
    props:{
      tipo_codigo_afiliado:''
    },
    data() {
      return {
        //imagen: 'ruta-de-la-imagen',
        titulo: 'Título de afiliación',
        texto_qr: '',
        nombres:'',
        apellidos:'',
        rif:'',
        cedula:'',
        razon:'',
        ci:'',
        codigo:'',
        qrCodeData: null,
        
      };
    },created() {
    
    this.llenarDatosCarnet()
    
  },
    methods: {
    generateQRCode() {
      const textToEncode = this.texto_qr; // Puedes cambiar esto a tus necesidades
      QRCode.toDataURL(textToEncode, (err, url) => {
        if (err) {
          console.error(err);
        } else {
          this.qrCodeData = url;
        }
      });
    },
    llenarDatosCarnet(){
    const url = 'http://localhost:3000/api/afiliado';
    const datos=this.tipo_codigo_afiliado
    console.log(datos)
    this.axios.get(url+'/'+datos).then(response => {
                     console.log(response.data);
                     this.nombres=response.data[0].nombre
                     this.apellidos=response.data[0].apellido
                     this.ci=response.data[0].cedula
                     this.rif=response.data[0].rif
                     this.razon=response.data[0].razon_social
                    this.afiliarse()
                     
                 }).catch(error => {
                     console.log(error.response.data);
                 });},

                 afiliarse(){
    const url = 'http://localhost:3000/api/afiliarse';
   const datos ={
    cedula:this.ci,
    rif:this.rif
   }
    this.axios.post(url,datos).then(response => {
                     console.log(response.data);
                     this.texto_qr=response.data.qr
                     this.codigo=response.data.codigo
                     this.generateQRCode()
                     
                 }).catch(error => {
                     console.log(error.response.data);
                 });},









  llenar_qr_codigo(){
    
  }
  },
  
  };
  </script>
  
  <style scoped>
  .card {
    display: flex;
    align-items: center;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .image-container {
    margin-right: 10px;
  }
  
  .image {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 5px;
  }
  
  .title {
    font-size: 18px;
    margin-bottom: 5px;
  }
  
  .text {
    font-size: 14px;
  }
  </style>